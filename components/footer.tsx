import { Instagram, Facebook } from "lucide-react";
import { clinicConfig } from "@/lib/clinicConfig";
import { Container } from "@/components/ui/container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-porcelain-dim/40 pt-16">
      <Container>
        <div className="grid gap-12 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-xl text-pine-900">
              {clinicConfig.shortName}
            </p>
            <p className="mt-3 max-w-xs text-sm text-ink/65">
              {clinicConfig.tagline}.
            </p>
            <div className="mt-5 flex gap-4">
              <a
                href={clinicConfig.social.instagram}
                aria-label="Instagram"
                className="text-ink/60 hover:text-pine-900"
              >
                <Instagram size={18} />
              </a>
              <a
                href={clinicConfig.social.facebook}
                aria-label="Facebook"
                className="text-ink/60 hover:text-pine-900"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-pine-900">Navegación</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-ink/65">
              {clinicConfig.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-pine-900">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-pine-900">Tratamientos</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-ink/65">
              {clinicConfig.treatments.slice(0, 5).map((t) => (
                <li key={t.slug}>
                  <a href="#tratamientos" className="hover:text-pine-900">
                    {t.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-pine-900">Contacto</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-ink/65">
              <li>{clinicConfig.contact.address}</li>
              <li>{clinicConfig.contact.phoneDisplay}</li>
              <li>{clinicConfig.contact.email}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-line py-6 text-xs text-ink/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {clinicConfig.name}. Todos los derechos reservados.
          </p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-pine-900">
              Política de privacidad
            </a>
            <a href="#" className="hover:text-pine-900">
              Términos y condiciones
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
