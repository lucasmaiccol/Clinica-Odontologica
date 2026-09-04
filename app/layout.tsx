import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { clinicConfig } from "@/lib/clinicConfig";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${clinicConfig.name} — ${clinicConfig.tagline}`,
    template: `%s — ${clinicConfig.shortName}`,
  },
  description:
    "Clínica odontológica con atención integral: odontología general, ortodoncia, implantes, estética dental y odontopediatría. Agendá tu consulta.",
  openGraph: {
    title: clinicConfig.name,
    description: clinicConfig.tagline,
    url: siteUrl,
    siteName: clinicConfig.name,
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: clinicConfig.name,
    description: clinicConfig.tagline,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: clinicConfig.name,
    image: `${siteUrl}/images/hero-clinic.jpg`,
    telephone: clinicConfig.contact.phone,
    email: clinicConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinicConfig.contact.address,
    },
    url: siteUrl,
    priceRange: "$$",
  };

  return (
    <html lang="es" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
