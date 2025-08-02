
// app/layout.tsx
import "./globals.css";
import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import CTA from "@/components/layout/CTA";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "Plombier à Toulon – Dépannage rapide et efficace | PlombierToulon Expert",
  description:
    "Plombier professionnel à Toulon : dépannage en urgence, détection de fuites, débouchage, rénovation de salle de bains. Devis gratuit 7j/7 !",
  keywords: [
    "plombier Toulon",
    "urgence plomberie Toulon",
    "chauffe-eau Toulon",
    "débouchage canalisation Toulon",
    "rénovation salle de bains Toulon",
  ],
  openGraph: {
    title: "Plombier à Toulon – Dépannage rapide et efficace | PlombierToulon Expert",
    description:
      "Interventions express à Toulon : fuite d’eau, débouchage, chauffe-eau, rénovation de salle de bains. Contactez un artisan local fiable.",
    url: "https://plombiertoulon-expert.fr/",
    siteName: "PlombierToulon Expert",
    images: [
      {
        url: "/images/plombier-toulon-hero.webp",
        width: 1200,
        height: 630,
        alt: "Plombier professionnel à Toulon",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={montserrat.variable}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased bg-white text-[#00B4D8]">
        <Header />
        <CTA />
        {children}
        <Footer />
      </body>
    </html>
  );
}
