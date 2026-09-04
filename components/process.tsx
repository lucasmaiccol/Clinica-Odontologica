import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/fade-in";

const steps = [
  {
    title: "Agendás tu consulta",
    description: "Elegís día, horario y el motivo de consulta desde el formulario o por WhatsApp.",
  },
  {
    title: "Evaluamos tu situación",
    description: "Diagnóstico clínico y, si hace falta, estudios de imagen complementarios.",
  },
  {
    title: "Diseñamos tu tratamiento",
    description: "Te presentamos las opciones, tiempos y costos antes de empezar.",
  },
  {
    title: "Acompañamos tu proceso",
    description: "Seguimiento en cada etapa hasta el resultado final y los controles posteriores.",
  },
];

export function Process() {
  return (
    <section className="bg-pine-50/60 py-24 sm:py-28">
      <Container>
        <FadeIn className="max-w-lg">
          <h2 className="font-display text-3xl text-pine-900 sm:text-4xl">
            Cómo funciona la atención
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.05} className="relative pl-0">
              <div className="flex items-center gap-3">
                <span className="font-display text-2xl text-pine-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-line" />
              </div>
              <h3 className="mt-4 font-display text-lg text-pine-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-ink/70">{step.description}</p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
