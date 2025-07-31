import HeroSection from '@/components/HeroSection'
import PlumbingIntro from '@/components/home/PlumberIntroSection'
import LocalBusinessSchema from '@/components/SEO/LocalBusiness'
import ContactSection from '@/components/services/ContactSection'
import ServicesSection from '@/components/services/ServicesSection'
import Testimonials from '@/components/Testimonials'
import { Metadata } from 'next'
import Head from 'next/head'

export const metadata: Metadata = {
  title: "Services Plomberie Cannes │ Dépannage Urgence 24h/24 & Installation",
  description: "Plombier expert à Cannes pour dépannage fuite d'eau, débouchage canalisation, remplacement chauffe-eau. ☎ +33 7 56 93 52 00 - Intervention sous 30 min dans tout Cannes.",
  keywords: [
    "dépannage plomberie Cannes",
    "urgence fuite d'eau Cannes",
    "débouchage canalisation Cannes",
    "plombier 24/7 Cannes",
    "chauffe-eau Cannes",
    "réparation plomberie Cannes"
  ],
  openGraph: {
    title: "Services Plomberie Cannes │ Dépannage Urgence 24h/24 & Installation",
    description: "Plombier expert à Cannes pour toutes interventions urgentes : fuites, canalisation bouchée, chauffe-eau. Service rapide avec garantie.",
    url: "https://plombiercannes-expert.fr/services",
    siteName: "Plombier Cannes Expert",
    images: [
      {
        url: "https://plombiercannes-expert.fr/images/plombier-cannes-hero.webp",
        width: 1200,
        height: 630,
        alt: "Plombier professionnel intervenant à Cannes",
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
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Dépannage Plomberie Urgence Cannes",
                                    "url": "https://plombiercannes-expert.fr/services/depannage-plomberie"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Débouchage Canalisation Cannes",
                                    "url": "https://plombiercannes-expert.fr/services/debouchage-canalisation"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "Réparation Fuite d'Eau Cannes",
                                    "url": "https://plombiercannes-expert.fr/services/reparation-fuite-eau"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 4,
                                    "name": "Installation Chauffe-Eau Cannes",
                                    "url": "https://plombiercannes-expert.fr/services/installation-chauffe-eau"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 5,
                                    "name": "Rénovation Salle de Bains Cannes",
                                    "url": "https://plombiercannes-expert.fr/services/renovation-salle-de-bains"
                                }
                            ]
                        })
                    }}
                />
            </Head>
            <LocalBusinessSchema />

            <main className="bg-white text-[#222626] ">
                <HeroSection
                    title='Services Plomberie Cannes'
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