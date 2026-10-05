import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Hanken_Grotesk } from "next/font/google";
import { Providers } from "@/components/Providers";
import { site } from "@/content/site";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

const description =
  "Escritório de advocacia em Araguari, MG. Atuação cível, trabalhista e de família, com atendimento presencial no bairro Goiás e online para todo o Brasil.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Gomes Evaristo Advocacia | Cível, trabalhista e família em Araguari, MG",
  description,
  openGraph: {
    title: "Gomes Evaristo Advocacia",
    description,
    locale: "pt_BR",
    type: "website",
    images: ["/images/escritorioge2.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: site.name,
  url: site.url,
  email: site.email,
  telephone: site.phones[0].tel,
  image: `${site.url}/images/escritorioge2.webp`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.city,
    addressRegion: site.state,
    postalCode: site.address.zip,
    addressCountry: "BR",
  },
  areaServed: "BR",
  knowsAbout: ["Direito civil", "Direito do trabalho", "Direito de família"],
  sameAs: Object.values(site.social),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${bodoni.variable} ${hanken.variable} antialiased`}>
      <body>
        <Providers>{children}</Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
