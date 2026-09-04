import { Microscope, Users, HeartHandshake, GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/fade-in";

const items = [
  {
    icon: GraduationCap,
    title: "Equipo especializado",
    description: "Cada área cuenta con un profesional formado específicamente en ella.",
  },
  {
    icon: Microscope,
    title: "Tecnología actual",
    description: "Diagnóstico por imágenes digitales y protocolos actualizados.",
  },
  {
    icon: HeartHandshake,
    title: "Atención personalizada",
    description: "Un plan de tratamiento pensado para tu situación particular.",
  },
  {
    icon: Users,
    title: "Pacientes de todas las edades",
    description: "Desde primeras consultas infantiles hasta rehabilitaciones completas.",
  },
];

export function TrustSection() {
  return (
    <section className="border-y border-line bg-pine-50/60 py-14">
      <Container>
        <FadeIn>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {items.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex flex-col gap-3">
                <Icon size={22} className="text-pine-500" />
                <h3 className="font-display text-lg text-pine-900">{title}</h3>
                <p className="text-sm text-ink/70">{description}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
