import { z } from "zod";

/** Shared by the contact form (client) and /api/contact (server). */
export const contactSchema = z.object({
  name: z.string({ error: "Please enter your name." }).trim().min(2, "Please enter your name.").max(100),
  email: z.string({ error: "Please enter a valid email address." }).trim().max(200).pipe(z.email("Please enter a valid email address.")),
  phone: z
    .string()
    .trim()
    .max(30)
    .refine((v) => v === "" || /^[+()\d\s-]{7,}$/.test(v), "Please enter a valid phone number.")
    .optional()
    .default(""),
  // `error` also covers a missing field (unselected radio/select), not just an empty one
  service: z.string({ error: "Please choose a service." }).trim().min(1, "Please choose a service."),
  budget: z.string({ error: "Please choose a budget range." }).trim().min(1, "Please choose a budget range."),
  message: z
    .string({ error: "Tell us a little more (at least 20 characters)." })
    .trim()
    .min(20, "Tell us a little more (at least 20 characters).")
    .max(5000, "Please keep your message under 5,000 characters."),
  /** Honeypot: real people leave this empty. */
  company: z.string().max(200).optional().default(""),
});

/** Validates raw form values; returns the first error message per field. */
export function validateContact(values: unknown) {
  const result = contactSchema.safeParse(values);
  if (result.success) return { success: true as const, data: result.data };
  const fieldErrors: Record<string, string> = {};
  for (const [field, messages] of Object.entries(z.flattenError(result.error).fieldErrors)) {
    if (messages?.[0]) fieldErrors[field] = messages[0];
  }
  return { success: false as const, fieldErrors };
}

export type ContactInput = z.input<typeof contactSchema>;
export type ContactData = z.output<typeof contactSchema>;
