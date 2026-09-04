"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { clinicConfig } from "@/lib/clinicConfig";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-porcelain/90 backdrop-blur-md shadow-[0_1px_0_0_theme(colors.line)]"
          : "bg-transparent",
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <a
          href="#inicio"
          className="font-display text-xl text-pine-900 tracking-tight"
        >
          {clinicConfig.shortName}
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {clinicConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] text-ink/80 hover:text-pine-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <LinkButton href="#contacto" size="md">
            Agendar consulta
          </LinkButton>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-pine-900 lg:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden bg-porcelain lg:hidden"
          >
            <Container className="flex flex-col gap-1 pb-8 pt-2">
              {clinicConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-3 text-base text-ink/85 hover:bg-pine-50"
                >
                  {item.label}
                </a>
              ))}
              <LinkButton
                href="#contacto"
                size="lg"
                className="mt-3 justify-center"
                onClick={() => setIsOpen(false)}
              >
                Agendar consulta
              </LinkButton>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
