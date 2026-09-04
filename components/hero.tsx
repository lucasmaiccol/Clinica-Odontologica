import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";
import { FadeIn } from "@/components/fade-in";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <Container className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <FadeIn>
          <p className="text-sm font-medium text-pine-500">
            Odontología integral para toda la familia
          </p>
          <h1 className="mt-5 font-display text-[2.6rem] leading-[1.08] text-pine-900 sm:text-6xl">
            Cuidamos tu sonrisa con criterio clínico y trato cercano.
          </h1>
          <p className="mt-6 max-w-md text-lg text-ink/75">
            Diagnóstico claro, tratamientos planificados y un equipo que te
            explica cada paso, desde una limpieza de rutina hasta una
            rehabilitación completa.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <LinkButton href="#contacto" size="lg">
              Agendar consulta
            </LinkButton>
            <LinkButton href="#tratamientos" variant="secondary" size="lg">
              Ver tratamientos
            </LinkButton>
          </div>

          <div className="mt-10 flex items-center gap-3 text-sm text-ink/70">
            <ShieldCheck size={18} className="text-pine-500" />
            <span>Bioseguridad certificada y equipamiento de última generación</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[999px] rounded-b-3xl bg-pine-100 shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop"
              alt="Consultorio odontológico moderno y luminoso"
              fill
              priority
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 hidden w-52 rounded-2xl bg-porcelain p-4 shadow-soft ring-1 ring-line sm:block">
            <p className="font-display text-3xl text-pine-900">+12</p>
            <p className="mt-1 text-sm text-ink/70">años acompañando la salud bucal de nuestros pacientes</p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
