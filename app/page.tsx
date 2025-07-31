import ContactSection from "@/components/home/ContactSection";
import Hero from "@/components/home/Hero";
import InfoSection from "@/components/home/InfoSection";
import PlumbingIntro from "@/components/home/PlumberIntroSection";
import ProductGallery from "@/components/home/ProdcutsGallery";
import ProjectSection from "@/components/home/ProjectSection";
import ServiceSection from "@/components/home/ServiceSection";
import Testimonials from "@/components/Testimonials";
import StatsCard from "@/components/StatsCard";
import type { Metadata } from "next";
import LocalBusinessSchema from "@/components/SEO/LocalBusiness";

export const metadata: Metadata = {
  title: "Plombier Cannes │ Urgence 24h/24 - Devis Gratuit & Intervention Express",
  description: "Plombier certifié à Cannes pour dépannage immédiat, fuites d'eau, débouchage canalisation et chauffe-eau. ☎ 06 XX XX XX XX - Intervention sous 30 min sur Cannes Centre, La Croisette, Le Suquet.",
  keywords: "plombier cannes, urgence plomberie cannes, dépannage plomberie, débouchage canalisation cannes, fuite d'eau cannes, chauffe-eau cannes",
  openGraph: {
    title: "Plombier Cannes │ Urgence 24h/24 - Devis Gratuit & Intervention Express",
    description: "Plombier expert à Cannes pour interventions rapides 7j/7. Fuites, canalisations, chauffe-eau - Service garanti",
    url: "https://plombiercannes-expert.fr",
    siteName: "Plombier Cannes Expert",
    images: [
      {
        url: "https://plombiercannes-expert.fr/images/plombier-cannes-hero.webp",
        width: 1200,
        height: 630,
        alt: "Plombier professionnel intervenant en urgence à Cannes",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plombier Cannes │ Urgence 24h/24 - Devis Gratuit & Intervention Express",
    description: "☎ 06 XX XX XX XX - Plombier expert pour dépannage immédiat à Cannes. Fuites, canalisations, chauffe-eau - Service 24/7",
    images: ["https://plombiercannes-expert.fr/images/plombier-cannes-hero.webp"],
  },
  alternates: {
    canonical: "https://plombiercannes-expert.fr",
  },
};

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <main className="font-sans bg-white text-[#0f4c5c]">
        <Hero />
        <section className="bg-white">
          <PlumbingIntro />
        </section>
        <ServiceSection />
        <ProjectSection />
        <InfoSection />
        <ContactSection />
        <StatsCard />
        <Testimonials />
        <ProductGallery />
      </main>
    </>
  );
}