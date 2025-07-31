
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
  title: "Plombier à Cannes – Dépannage rapide et efficace | PlombierCannes Expert",
  description:
    "Plombier professionnel à Cannes : dépannage en urgence, détection de fuites, débouchage, rénovation de salle de bains. Devis gratuit 7j/7 !",
  keywords: [
    "plombier Cannes",
    "urgence plomberie Cannes",
    "chauffe-eau Cannes",
    "débouchage canalisation Cannes",
    "rénovation salle de bains Cannes",
  ],
  openGraph: {
    title: "Plombier à Cannes – Dépannage rapide et efficace | PlombierCannes Expert",
    description:
      "Interventions express à Cannes : fuite d’eau, débouchage, chauffe-eau, rénovation de salle de bains. Contactez un artisan local fiable.",
    url: "https://plombiercannes-expert.fr/",
    siteName: "PlombierCannes Expert",
    images: [
      {
        url: "/images/plombier-cannes-hero.webp",
        width: 1200,
        height: 630,
        alt: "Plombier professionnel à Cannes",
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
      <body className="antialiased bg-white text-[#0f4c5c]">
        <Header />
        <CTA />
        {children}
        <Footer />
      </body>
    </html>
  );
}
