import { z } from "zod";
import { clinicConfig } from "@/lib/clinicConfig";

const treatmentSlugs = clinicConfig.treatments.map((t) => t.slug) as [
  string,
  ...string[],
];

export const appointmentRequestSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Ingresá tu nombre completo.")
    .max(100, "El nombre es demasiado largo."),
  email: z
    .string()
    .trim()
    .email("Ingresá un email válido.")
    .max(150),
  phone: z
    .string()
    .trim()
    .min(6, "Ingresá un teléfono válido.")
    .max(30),
  treatment: z.enum(treatmentSlugs, {
    errorMap: () => ({ message: "Seleccioná un tratamiento." }),
  }),
  preferredDate: z
    .string()
    .optional()
    .refine((val) => !val || !Number.isNaN(Date.parse(val)), {
      message: "Fecha inválida.",
    }),
  preferredTime: z.string().max(20).optional(),
  message: z.string().trim().max(1000).optional(),
  // Honeypot anti-spam: campo oculto que un usuario real nunca completa.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type AppointmentRequestInput = z.infer<typeof appointmentRequestSchema>;
