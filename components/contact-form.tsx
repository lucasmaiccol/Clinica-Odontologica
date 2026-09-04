"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { clinicConfig } from "@/lib/clinicConfig";
import { Button } from "@/components/ui/button";
import type { ContactFormState } from "@/types";

const inputClasses =
  "w-full rounded-xl border border-line bg-porcelain px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-pine-500 focus-visible:outline-none";

export function ContactForm() {
  const [state, setState] = useState<ContactFormState>({ status: "idle" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setState({ status: "idle" });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        setState({
          status: "error",
          message: data.message ?? "No pudimos enviar tu solicitud. Probá de nuevo.",
          fieldErrors: data.fieldErrors,
        });
        return;
      }

      setState({ status: "success", message: "¡Listo! Te vamos a contactar a la brevedad." });
      form.reset();
    } catch {
      setState({
        status: "error",
        message: "Ocurrió un error de conexión. Probá nuevamente en unos minutos.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-start gap-3 rounded-2xl bg-pine-50 p-8">
        <CheckCircle2 className="text-pine-700" size={28} />
        <p className="font-display text-xl text-pine-900">Solicitud enviada</p>
        <p className="text-sm text-ink/70">{state.message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      {/* Honeypot: oculto para personas, visible para bots simples */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm text-ink/70">
            Nombre completo
          </label>
          <input id="name" name="name" required className={inputClasses} />
          {state.fieldErrors?.name && (
            <p className="mt-1 text-xs text-red-600">{state.fieldErrors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm text-ink/70">
            Teléfono
          </label>
          <input id="phone" name="phone" required className={inputClasses} />
          {state.fieldErrors?.phone && (
            <p className="mt-1 text-xs text-red-600">{state.fieldErrors.phone}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm text-ink/70">
          Email
        </label>
        <input id="email" name="email" type="email" required className={inputClasses} />
        {state.fieldErrors?.email && (
          <p className="mt-1 text-xs text-red-600">{state.fieldErrors.email}</p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="sm:col-span-1">
          <label htmlFor="treatment" className="mb-1.5 block text-sm text-ink/70">
            Tratamiento
          </label>
          <select id="treatment" name="treatment" required className={inputClasses} defaultValue="">
            <option value="" disabled>
              Elegir
            </option>
            {clinicConfig.treatments.map((t) => (
              <option key={t.slug} value={t.slug}>
                {t.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="preferredDate" className="mb-1.5 block text-sm text-ink/70">
            Fecha preferida
          </label>
          <input id="preferredDate" name="preferredDate" type="date" className={inputClasses} />
        </div>

        <div>
          <label htmlFor="preferredTime" className="mb-1.5 block text-sm text-ink/70">
            Horario preferido
          </label>
          <input
            id="preferredTime"
            name="preferredTime"
            placeholder="Ej: mañana"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-ink/70">
          Mensaje (opcional)
        </label>
        <textarea id="message" name="message" rows={4} className={inputClasses} />
      </div>

      {state.status === "error" && (
        <p role="alert" className="text-sm text-red-600">
          {state.message}
        </p>
      )}

      <Button type="submit" size="lg" disabled={isSubmitting} className="mt-2 self-start">
        {isSubmitting && <Loader2 size={16} className="animate-spin" />}
        {isSubmitting ? "Enviando..." : "Enviar solicitud"}
      </Button>
    </form>
  );
}
