import { Resend } from "resend";
import { site } from "@/data/site";
import { validateContact, type ContactData } from "@/lib/validation";

/**
 * POST /api/contact: validates the enquiry and emails it via Resend.
 *
 * Required environment variables (set in Vercel → Project → Settings → Environment Variables):
 *   RESEND_API_KEY      API key from https://resend.com
 *   CONTACT_TO_EMAIL    where enquiries are delivered (your inbox)
 *   CONTACT_FROM_EMAIL  a sender on a domain verified in Resend, e.g. "UPÉ Website <hello@yourdomain.com>"
 */

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

function renderEmail(d: ContactData) {
  const rows: [string, string][] = [
    ["Name", d.name],
    ["Email", d.email],
    ["Phone", d.phone || "-"],
    ["Service", d.service],
    ["Budget", d.budget],
  ];
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px">
      <h2 style="margin:0 0 16px">New enquiry from the ${escape(site.shortName)} website</h2>
      <table cellpadding="8" style="border-collapse:collapse;width:100%">
        ${rows.map(([k, v]) => `<tr><td style="background:#f4f4f8;font-weight:bold;width:110px">${k}</td><td>${escape(v)}</td></tr>`).join("")}
      </table>
      <h3 style="margin:24px 0 8px">Message</h3>
      <p style="white-space:pre-wrap;line-height:1.5">${escape(d.message)}</p>
    </div>`;
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nMessage:\n${d.message}`;
  return { html, text };
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const parsed = validateContact(body);
  if (!parsed.success) {
    return Response.json(
      { ok: false, error: "Please check the highlighted fields.", fieldErrors: parsed.fieldErrors },
      { status: 422 },
    );
  }
  const data = parsed.data;

  // Honeypot filled in: pretend success so bots don't retry.
  if (data.company) return Response.json({ ok: true });

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] Email not configured; submission received:", data);
      return Response.json({ ok: true, dev: true });
    }
    console.error("[contact] Missing RESEND_API_KEY / CONTACT_TO_EMAIL / CONTACT_FROM_EMAIL");
    return Response.json(
      { ok: false, error: `Our form is temporarily unavailable. Please email ${site.contact.email} or message us on WhatsApp.` },
      { status: 500 },
    );
  }

  const { html, text } = renderEmail(data);
  const resend = new Resend(RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: CONTACT_FROM_EMAIL,
    to: CONTACT_TO_EMAIL.split(",").map((s) => s.trim()),
    replyTo: data.email,
    subject: `New enquiry: ${data.service} · ${data.name}`,
    html,
    text,
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return Response.json(
      { ok: false, error: "We couldn't send your message right now. Please try again or reach us on WhatsApp." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
