import Image from "next/image";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/fade-in";

const values = [
  {
    title: "Criterio clínico ante todo",
    description: "Cada plan de tratamiento se basa en diagnóstico, no en venta de servicios.",
  },
  {
    title: "Tecnología al servicio del paciente",
    description: "Radiografía digital y planificación 3D para decisiones más precisas.",
  },
  {
    title: "Acompañamiento real",
    description: "Seguimos el proceso completo, no solo la intervención puntual.",
  },
];

export function About() {
  return (
    <section id="nosotros" className="bg-pine-900 py-24 text-porcelain sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <FadeIn className="relative order-2 lg:order-1">
          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop"
              alt="Equipo odontológico atendiendo a un paciente"
              fill
              sizes="(min-width: 1024px) 520px, 90vw"
              className="object-cover"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="order-1 lg:order-2">
          <h2 className="font-display text-3xl sm:text-4xl">
            Una clínica pensada desde la calma, no desde la urgencia.
          </h2>
          <p className="mt-5 max-w-lg text-porcelain/75">
            Contenido de ejemplo (placeholder): reemplazar por la historia y
            filosofía real de la clínica. Buscamos que cada persona entienda
            su diagnóstico y participe de las decisiones sobre su tratamiento.
          </p>

          <dl className="mt-10 flex flex-col gap-7">
            {values.map((value) => (
              <div key={value.title} className="border-l-2 border-pine-300/40 pl-5">
                <dt className="font-display text-lg">{value.title}</dt>
                <dd className="mt-1 text-sm text-porcelain/70">
                  {value.description}
                </dd>
              </div>
            ))}
          </dl>
        </FadeIn>
      </Container>
    </section>
  );
}
