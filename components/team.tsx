import { UserRound } from "lucide-react";
import { clinicConfig } from "@/lib/clinicConfig";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/fade-in";

export function Team() {
  return (
    <section id="profesionales" className="py-24 sm:py-28">
      <Container>
        <FadeIn className="max-w-lg">
          <h2 className="font-display text-3xl text-pine-900 sm:text-4xl">
            Profesionales
          </h2>
          <p className="mt-4 text-ink/70">
            Datos de ejemplo (placeholder) — reemplazar por el equipo real de
            la clínica, con foto, especialidad y trayectoria.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {clinicConfig.team.map((member, index) => (
            <FadeIn key={member.name} delay={index * 0.06}>
              <div className="flex h-40 items-center justify-center rounded-2xl bg-pine-50 text-pine-300">
                <UserRound size={48} strokeWidth={1.2} />
              </div>
              <h3 className="mt-5 font-display text-lg text-pine-900">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-pine-500">{member.role}</p>
              <p className="mt-2 text-sm text-ink/70">{member.bio}</p>
              <p className="mt-2 text-xs text-ink/50">{member.experience}</p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
