import {
  Stethoscope,
  AlignCenter,
  Anchor,
  Sparkles,
  Smile,
  Droplets,
  Baby,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { clinicConfig } from "@/lib/clinicConfig";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/fade-in";

const icons: Record<string, LucideIcon> = {
  "odontologia-general": Stethoscope,
  ortodoncia: AlignCenter,
  implantes: Anchor,
  blanqueamiento: Sparkles,
  "estetica-dental": Smile,
  "limpieza-dental": Droplets,
  odontopediatria: Baby,
};

export function Treatments() {
  return (
    <section id="tratamientos" className="py-24 sm:py-28">
      <Container>
        <FadeIn className="max-w-lg">
          <h2 className="font-display text-3xl text-pine-900 sm:text-4xl">
            Tratamientos
          </h2>
          <p className="mt-4 text-ink/70">
            Un abordaje completo, del control preventivo a la rehabilitación
            estética, con un tratamiento específico para cada necesidad.
          </p>
        </FadeIn>

        <div className="mt-14 divide-y divide-line border-y border-line">
          {clinicConfig.treatments.map((treatment, index) => {
            const Icon = icons[treatment.slug] ?? Stethoscope;
            return (
              <FadeIn key={treatment.slug} delay={index * 0.04}>
                <a
                  href="#contacto"
                  className="group flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:gap-8"
                >
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-pine-50 text-pine-700 transition-colors group-hover:bg-pine-700 group-hover:text-porcelain">
                    <Icon size={20} />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-display text-xl text-pine-900">
                      {treatment.name}
                    </h3>
                    <p className="mt-1 max-w-xl text-sm text-ink/70">
                      {treatment.shortDescription}
                    </p>
                  </div>

                  <div className="flex flex-none items-center gap-2 text-sm font-medium text-pine-700 sm:opacity-0 sm:transition-opacity sm:group-hover:opacity-100">
                    Consultar
                    <ArrowUpRight size={16} />
                  </div>
                </a>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
