import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustSection } from "@/components/trust-section";
import { Treatments } from "@/components/treatments";
import { About } from "@/components/about";
import { Team } from "@/components/team";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { CtaSection } from "@/components/cta-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <Treatments />
        <About />
        <Team />
        <Process />
        <Testimonials />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
