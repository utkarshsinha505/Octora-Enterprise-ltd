"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { contactPage, services } from "@/data/site";
import { cn, whatsappHref } from "@/lib/utils";
import { buttonClasses } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

type Field = "name" | "email" | "phone" | "service" | "budget" | "message";
type Errors = Partial<Record<Field, string>>;
// zod is only needed on submit, so it's loaded on demand to keep it out of the page's initial JavaScript
const loadValidation = () => import("@/lib/validation");

type Status = { state: "idle" | "sending" | "success" | "error"; message?: string };

const serviceOptions = [...services.map((s) => s.title), "Something else"];

const inputClass =
  "w-full rounded-2xl border border-line bg-surface px-4 py-3.5 text-fg placeholder:text-muted/70 transition-colors outline-none focus:border-violet focus-visible:outline-none focus:ring-2 focus:ring-violet/40 aria-[invalid=true]:border-red-400";

function FieldWrap({ id, label, error, optional, children }: { id: Field; label: string; error?: string; optional?: boolean; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold">
        {label} {optional ? <span className="font-normal text-muted">(optional)</span> : <span aria-hidden="true" className="text-violet">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-400 light:text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const serviceRef = useRef<HTMLSelectElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>({ state: "idle" });

  // /contact?service=ai-songs preselects that service. Done after mount so the form stays static HTML.
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("service");
    const match = services.find((s) => s.id === id);
    if (match && serviceRef.current && !serviceRef.current.value) serviceRef.current.value = match.title;
  }, []);

  const a11y = (id: Field) => ({
    id,
    name: id,
    "aria-invalid": errors[id] ? true : undefined,
    "aria-describedby": errors[id] ? `${id}-error` : undefined,
  });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const values = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const { validateContact } = await loadValidation();
    const result = validateContact(values);

    if (!result.success) {
      const next = result.fieldErrors as Errors;
      setErrors(next);
      setStatus({ state: "idle" });
      const first = (["name", "email", "phone", "service", "budget", "message"] as Field[]).find((f) => next[f]);
      if (first) form.querySelector<HTMLElement>(`#${first}`)?.focus();
      return;
    }

    setErrors({});
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        if (json.fieldErrors) setErrors(json.fieldErrors as Errors);
        setStatus({ state: "error", message: json.error ?? "Something went wrong. Please try again." });
        return;
      }
      form.reset();
      setStatus({ state: "success" });
    } catch {
      setStatus({ state: "error", message: "Network error. Please check your connection and try again." });
    }
  }

  if (status.state === "success") {
    return (
      <div role="status" className="rounded-[2rem] glass p-10 text-center">
        <span className="mx-auto grid size-16 place-items-center rounded-full bg-accent text-[#07070c]">
          <Icon name="check" size={30} />
        </span>
        <h2 className="mt-6 text-2xl font-bold">Message received!</h2>
        <p className="mx-auto mt-3 max-w-md text-muted">
          Thanks for reaching out. We&apos;ll get back to you within one working day. Need us sooner? Message us on WhatsApp.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={buttonClasses("whatsapp")}>
            <Icon name="whatsapp" size={18} /> WhatsApp
          </a>
          <button type="button" onClick={() => setStatus({ state: "idle" })} className={buttonClasses("secondary")}>
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} onFocusCapture={() => void loadValidation()} noValidate className="rounded-[2rem] glass p-6 md:p-10" aria-describedby="form-note">
      <p id="form-note" className="mb-8 text-sm text-muted">
        Fields marked <span className="text-violet">*</span> are required.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        <FieldWrap id="name" label="Your name" error={errors.name}>
          <input {...a11y("name")} type="text" autoComplete="name" required className={inputClass} placeholder="Jane Doe" />
        </FieldWrap>
        <FieldWrap id="email" label="Email" error={errors.email}>
          <input {...a11y("email")} type="email" autoComplete="email" required className={inputClass} placeholder="you@company.com" />
        </FieldWrap>
        <FieldWrap id="phone" label="Phone / WhatsApp" error={errors.phone} optional>
          <input {...a11y("phone")} type="tel" autoComplete="tel" className={inputClass} placeholder="+00 00000 00000" />
        </FieldWrap>
        <FieldWrap id="service" label="Service interested in" error={errors.service}>
          <select {...a11y("service")} ref={serviceRef} required defaultValue="" className={cn(inputClass, "appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10")} style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23a3a3b8' stroke-width='2'><path d='m6 9 6 6 6-6'/></svg>\")" }}>
            <option value="" disabled>
              Choose a service
            </option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </FieldWrap>
        <div className="md:col-span-2">
          <fieldset aria-describedby={errors.budget ? "budget-error" : undefined}>
            <legend className="mb-3 text-sm font-semibold">
              Budget range <span aria-hidden="true" className="text-violet">*</span>
            </legend>
            <div className="flex flex-wrap gap-2">
              {contactPage.budgetRanges.map((b, i) => (
                <label key={b} className="cursor-pointer">
                  <input
                    type="radio"
                    name="budget"
                    value={b}
                    id={i === 0 ? "budget" : undefined}
                    className="peer sr-only"
                  />
                  <span className="inline-block rounded-full border border-line px-4 py-2 text-sm text-muted transition-colors peer-checked:border-transparent peer-checked:bg-accent peer-checked:text-[#07070c] peer-focus-visible:ring-2 peer-focus-visible:ring-cyan hover:border-fg/30 hover:text-fg">
                    {b}
                  </span>
                </label>
              ))}
            </div>
            {errors.budget && (
              <p id="budget-error" className="mt-2 text-sm text-red-400 light:text-red-600">
                {errors.budget}
              </p>
            )}
          </fieldset>
        </div>
        <div className="md:col-span-2">
          <FieldWrap id="message" label="Tell us about your project" error={errors.message}>
            <textarea
              {...a11y("message")}
              rows={6}
              required
              className={cn(inputClass, "resize-y")}
              placeholder="What are you making, who is it for, and when do you need it?"
            />
          </FieldWrap>
        </div>
        {/* honeypot: hidden from people and assistive tech */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 overflow-hidden">
          <label>
            Company
            <input type="text" name="company" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
      </div>

      {status.state === "error" && (
        <p role="alert" className="mt-6 rounded-2xl border border-red-400/40 bg-red-500/10 p-4 text-sm">
          {status.message}
        </p>
      )}

      <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">We&apos;ll only use your details to reply to this enquiry.</p>
        <button type="submit" disabled={status.state === "sending"} className={buttonClasses("primary", "lg")}>
          {status.state === "sending" ? "Sending…" : "Send message"}
          <Icon name="arrowRight" size={18} />
        </button>
      </div>
    </form>
  );
}
