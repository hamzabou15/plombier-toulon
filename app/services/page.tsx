// app/services/page.tsx
import HeroSection from '@/components/HeroSection'
import PlumbingIntro from '@/components/home/PlumberIntroSection'
import LocalBusinessSchema from '@/components/SEO/LocalBusiness'
import ContactSection from '@/components/services/ContactSection'
import ServicesSection from '@/components/services/ServicesSection'
import Testimonials from '@/components/Testimonials'
import { Metadata } from 'next'
import Head from 'next/head'

export const metadata: Metadata = {
  title: "Services Plomberie Toulon │ Dépannage Urgence 24h/24 & Installation",
  description: "Plombier expert à Toulon pour dépannage fuite d'eau, débouchage canalisation, remplacement chauffe-eau. ☎ +33 7 56 93 52 00 - Intervention sous 30 min dans tout Toulon et le Var.",
  keywords: [
    "dépannage plomberie Toulon",
    "urgence fuite d'eau Toulon",
    "débouchage canalisation Toulon",
    "plombier 24/7 Toulon",
    "chauffe-eau Toulon",
    "réparation plomberie Toulon",
    "artisan plombier Var",
    "tarif plombier Toulon"
  ],
  alternates: {
    canonical: "https://plombiertoulon-expert.fr/services"
  },
  openGraph: {
    title: "Services Plomberie Toulon │ Dépannage Urgence 24h/24 & Installation",
    description: "Plombier expert à Toulon pour toutes interventions urgentes : fuites, canalisation bouchée, chauffe-eau. Service rapide avec garantie.",
    url: "https://plombiertoulon-expert.fr/services",
    siteName: "Plombier Toulon Expert",
    images: [
      {
        url: "https://plombiertoulon-expert.fr/images/plombier-toulon-services.webp",
        width: 1200,
        height: 630,
        alt: "Services de plomberie à Toulon par Plombier Toulon Expert",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

const page = () => {
    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ItemList",
                            "name": "Services Plomberie Toulon",
                            "description": "Liste complète des services de plomberie à Toulon",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Dépannage Plomberie Urgence Toulon",
                                    "url": "https://plombiertoulon-expert.fr/services/depannage-plomberie",
                                    "description": "Intervention 24h/24 pour fuites d'eau et canalisations bouchées à Toulon"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Débouchage Canalisation Toulon",
                                    "url": "https://plombiertoulon-expert.fr/services/debouchage-canalisation",
                                    "description": "Solution rapide pour WC, évier et douche bouchés à Toulon"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "Réparation Fuite d'Eau Toulon",
                                    "url": "https://plombiertoulon-expert.fr/services/reparation-fuite-eau",
                                    "description": "Détection sans casse et réparation de fuites à Toulon"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 4,
                                    "name": "Installation Chauffe-Eau Toulon",
                                    "url": "https://plombiertoulon-expert.fr/services/installation-chauffe-eau",
                                    "description": "Remplacement et pose de chauffe-eau à Toulon"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 5,
                                    "name": "Rénovation Salle de Bains Toulon",
                                    "url": "https://plombiertoulon-expert.fr/services/renovation-salle-de-bains",
                                    "description": "Transformation complète de salle de bains à Toulon"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 6,
                                    "name": "Entretien Chaudière Toulon",
                                    "url": "https://plombiertoulon-expert.fr/services/entretien-chaudiere",
                                    "description": "Maintenance annuelle de chaudière à Toulon"
                                }
                            ]
                        })
                    }}
                />
            </Head>
            <LocalBusinessSchema />

            <main className="bg-white text-[#0077B6]">
                <HeroSection
                    title='Services Plomberie à Toulon'
                />
                <PlumbingIntro />
                <ServicesSection />
                <ContactSection />
                <Testimonials />
            </main>
        </>
    )
}

export default page