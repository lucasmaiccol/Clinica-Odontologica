import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { clinicConfig } from "@/lib/clinicConfig";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/fade-in";
import { ContactForm } from "@/components/contact-form";

export function ContactSection() {
  const whatsappHref = `https://wa.me/${clinicConfig.contact.whatsapp}`;

  return (
    <section id="contacto" className="py-24 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <FadeIn>
          <h2 className="font-display text-3xl text-pine-900 sm:text-4xl">
            Contacto
          </h2>
          <p className="mt-4 max-w-sm text-ink/70">
            Escribinos o completá el formulario y te contactamos para
            coordinar el día y horario que mejor te quede.
          </p>

          <ul className="mt-9 flex flex-col gap-5 text-sm text-ink/80">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 flex-none text-pine-500" />
              <a href={clinicConfig.contact.mapsUrl} className="hover:text-pine-900">
                {clinicConfig.contact.address}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={18} className="mt-0.5 flex-none text-pine-500" />
              <a href={`tel:${clinicConfig.contact.phone}`} className="hover:text-pine-900">
                {clinicConfig.contact.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={18} className="mt-0.5 flex-none text-pine-500" />
              <a href={`mailto:${clinicConfig.contact.email}`} className="hover:text-pine-900">
                {clinicConfig.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MessageCircle size={18} className="mt-0.5 flex-none text-pine-500" />
              <a href={whatsappHref} className="hover:text-pine-900">
                WhatsApp
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={18} className="mt-0.5 flex-none text-pine-500" />
              <div className="flex flex-col gap-1">
                {clinicConfig.hours.map((h) => (
                  <span key={h.day}>
                    {h.day}: {h.time}
                  </span>
                ))}
              </div>
            </li>
          </ul>
        </FadeIn>

        <FadeIn delay={0.1}>
          <ContactForm />
        </FadeIn>
      </Container>
    </section>
  );
}
