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
  title: "Plombier Toulon │ Urgence 24h/24 - Artisan Certifié & Intervention Express",
  description: "Plombier expert à Toulon pour dépannage immédiat 7j/7 : fuites d'eau, débouchage canalisation, chauffe-eau. ☎ +33 7 56 93 52 00 - Intervention rapide quartiers Toulon Centre, Mourillon, Pont-du-Las",
  keywords: "plombier toulon, dépannage plomberie toulon, urgence plombier 24/7, débouchage canalisation toulon, fuite d'eau toulon, réparation chauffe-eau toulon, artisan plombier var",
  openGraph: {
    title: "Plombier Toulon Expert │ Urgence 24h/24 - Devis Gratuit & Intervention Rapide",
    description: "Plombier certifié à Toulon pour interventions express 7j/7. Fuites, canalisations, chauffe-eau - Service garanti avec transparence tarifaire",
    url: "https://plombiertoulon-expert.fr",
    siteName: "Plombier Toulon Expert",
    images: [
      {
        url: "https://plombiertoulon-expert.fr/images/plombier-toulon-hero.webp",
        width: 1200,
        height: 630,
        alt: "Plombier professionnel en intervention d'urgence à Toulon",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plombier Toulon │ Urgence 24h/24 - Artisan Local & Intervention Express",
    description: "☎ +33 756 93 52 00 - Plombier expert pour dépannage immédiat dans le Var. Fuites, canalisations, chauffe-eau - Service 24/7 avec garantie",
    images: ["https://plombiertoulon-expert.fr/images/plombier-toulon-hero.webp"],
  },
  alternates: {
    canonical: "https://plombiertoulon-expert.fr",
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