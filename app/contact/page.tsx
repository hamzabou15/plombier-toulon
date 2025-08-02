import ContactForm from '@/components/contact/Form'
import LocalBusinessSchema from '@/components/SEO/LocalBusiness';
import Head from 'next/head'
import React from 'react'

export const metadata = {
    title: "Plombier à Toulon - Interventions rapides & professionnelles",
    description: "Intervention express à Toulon pour dépannage, fuite, débouchage, chauffe-eau et plus. Plombier expérimenté, devis gratuit et service garanti.",
    openGraph: {
        title: "Plombier à Toulon - Interventions rapides & professionnelles",
        description: "Intervention express à Toulon pour dépannage, fuite, débouchage, chauffe-eau et plus.",
        url: "https://plombiertoulon-expert.fr",
        siteName: "Plombier Toulon Expert",
        images: [
            {
                url: "https://plombiertoulon-expert.fr/images/plombier-toulon-hero.webp",
                width: 800,
                height: 600,
                alt: "Plombier professionnel à Toulon",
            },
        ],
        locale: "fr_FR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Plombier à Toulon - Interventions rapides & professionnelles",
        description: "Plombier expérimenté pour dépannage, fuite, chauffe-eau, rénovation à Toulon. Service rapide, devis gratuit.",
        images: ["https://plombiertoulon-expert.fr/images/plombier-toulon-hero.webp"],
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
                            "@type": "LocalBusiness",
                            name: "PlombierToulon Expert",
                            image: "https://plombiertoulon-expert.fr/images/plombier-toulon-hero.webp",
                            "@id": "https://plombiertoulon-expert.fr/",
                            url: "https://plombiertoulon-expert.fr/",
                            telephone: "+33756935200",
                            address: {
                                "@type": "PostalAddress",
                                streetAddress: "12 Rue de France",
                                addressLocality: "Toulon",
                                postalCode: "06000",
                                addressCountry: "FR",
                            },
                            openingHoursSpecification: [
                                {
                                    "@type": "OpeningHoursSpecification",
                                    dayOfWeek: [
                                        "Monday",
                                        "Tuesday",
                                        "Wednesday",
                                        "Thursday",
                                        "Friday",
                                        "Saturday",
                                        "Sunday",
                                    ],
                                    opens: "08:00",
                                    closes: "20:00",
                                },
                            ],
                            sameAs: [],
                        }),
                    }}
                />
            </Head>
            <LocalBusinessSchema />
            <main className="min-h-[calc(100vh-100px)]">
                <div className="max-w-6xl mx-auto px-4 py-10">
                    {/* Contact Form Component */}
                    <ContactForm />
                </div>
            </main>
        </>
    )
}

export default page