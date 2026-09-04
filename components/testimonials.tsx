import { Quote } from "lucide-react";
import { clinicConfig } from "@/lib/clinicConfig";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/fade-in";

export function Testimonials() {
  return (
    <section id="testimonios" className="py-24 sm:py-28">
      <Container>
        <FadeIn className="max-w-lg">
          <h2 className="font-display text-3xl text-pine-900 sm:text-4xl">
            Lo que cuentan nuestros pacientes
          </h2>
          <p className="mt-3 text-sm text-ink/50">
            Testimonios de ejemplo (placeholder) — reemplazar por reseñas
            reales antes de publicar.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {clinicConfig.testimonials.map((testimonial, index) => (
            <FadeIn
              key={`${testimonial.name}-${index}`}
              delay={index * 0.06}
              className="rounded-2xl bg-pine-50/70 p-7"
            >
              <Quote size={20} className="text-pine-300" />
              <p className="mt-4 text-[15px] text-ink/80">{testimonial.quote}</p>
              <p className="mt-5 text-sm font-medium text-pine-900">
                {testimonial.name}
              </p>
              <p className="text-xs text-ink/50">{testimonial.treatment}</p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
