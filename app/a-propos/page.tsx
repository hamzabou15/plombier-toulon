// app/a-propos/page.tsx
import Intro from '@/components/a-propos/Intro'
import Introduction from '@/components/a-propos/introduction'
import StatsCard from '@/components/a-propos/Stats'
import HeroSection from '@/components/HeroSection'
import ProjectSection from '@/components/home/ProjectSection'
import LocalBusinessSchema from '@/components/SEO/LocalBusiness'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Plombier Toulon Expert - Notre Expertise en Plomberie & Dépannage Urgence",
  description: "Artisan plombier à Toulon depuis 15 ans : interventions 24h/24, dépannage fuite d'eau, débouchage canalisation. Service express dans tout le Var.",
  keywords: [
    "plombier toulon expert",
    "entreprise plomberie toulon",
    "dépannage urgence toulon",
    "plombier certifié toulon",
    "réparation fuite d'eau toulon",
    "histoire plombier toulon",
    "équipe plomberie var"
  ],
  openGraph: {
    title: "À Propos - Plombier Toulon Expert | 15 ans d'expérience",
    description: "Découvrez notre histoire et notre engagement pour un service de plomberie d'excellence à Toulon et dans le Var.",
    images: [
      {
        url: "https://plombiertoulon-expert.fr/images/expert-plombier-toulon.webp",
        width: 1200,
        height: 630,
        alt: "Équipe de plombiers experts à Toulon",
      },
    ],
  },
}

const page = () => {
    return (
        <>
            <LocalBusinessSchema />
            <main className='mx-auto relative text-[#0077B6]'>
                <HeroSection
                    title='Plombier Toulon Expert : 15 ans d’expérience'
                />
                <Intro />
                <Introduction />
                <StatsCard />
                <div className='flex justify-center my-16 max-w-7xl mx-auto px-4 md:px-6'>
                    <div className="relative w-full max-w-7xl max-md:h-[400px]">
                        <Image
                            src="/images/expert-plombier-toulon.webp"
                            alt="Équipe de plombiers experts de Toulon en intervention chez un client"
                            width={1000}
                            height={667}
                            className='w-full h-full object-cover rounded-lg shadow-lg'
                            priority
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
                            <p className="text-lg">L&apos;équipe Plombier Toulon Expert - Depuis 2010</p>
                        </div>
                    </div>
                </div>
                <ProjectSection />
            </main>
        </>
    )
}

export default page