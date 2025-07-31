import Intro from '@/components/a-propos/Intro'
import Introduction from '@/components/a-propos/introduction'
import StatsCard from '@/components/a-propos/Stats'
import HeroSection from '@/components/HeroSection'
import ProjectSection from '@/components/home/ProjectSection'
import LocalBusinessSchema from '@/components/SEO/LocalBusiness'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Plombier Cannes Expert - Notre Expertise en Plomberie & Dépannage Urgence",
  description: "Artisan plombier à Cannes depuis 15 ans : interventions 24h/24, dépannage fuite d'eau, débouchage canalisation. Service express dans tout Cannes et ses quartiers.",
  keywords: [
    "plombier cannes expert",
    "entreprise plomberie cannes",
    "dépannage urgence cannes",
    "plombier certifié cannes",
    "réparation fuite d'eau cannes"
  ],
}

const page = () => {
    return (
        <>
            <LocalBusinessSchema />
            <main className=' mx-auto relative text-[#222626] '>
                <HeroSection
                    title='Plombier Cannes Expert : 15 ans d’expérience en dépannage urgence'
                />
                <Intro />
                <Introduction />
                <StatsCard />
                <div className='flex justify-center my-16 max-w-7xl mx-auto px-16 max-md:px-6'>
                    <Image
                        src="/images/expert-plombier-cannes.webp"
                        alt="Artisan plombier expert intervenant à Cannes pour dépannage urgence"
                        width={1000}
                        height={667}
                        className='w-full  h-auto object-cover rounded-lg shadow-lg'
                        priority
                    />
                </div>
                <ProjectSection />
            </main>
        </>
    )
}

export default page