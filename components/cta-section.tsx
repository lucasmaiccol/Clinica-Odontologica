import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";
import { FadeIn } from "@/components/fade-in";

export function CtaSection() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <FadeIn className="flex flex-col items-start gap-8 rounded-3xl bg-pine-700 px-8 py-14 text-porcelain sm:px-14 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="font-display text-3xl sm:text-4xl lg:max-w-md">
            ¿Lista o listo para cuidar tu sonrisa?
          </h2>
          <LinkButton
            href="#contacto"
            size="lg"
            className="flex-none bg-porcelain text-pine-900 hover:bg-pine-50"
          >
            Agendar consulta
          </LinkButton>
        </FadeIn>
      </Container>
    </section>
  );
}
