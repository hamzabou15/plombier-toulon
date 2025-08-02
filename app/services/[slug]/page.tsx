// app/services/[slug]/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { services } from '@/lib/service';
import ContactForm from '@/components/services/ContactSection';

interface PageProps {

  params: Promise<{ slug: string }>
}


// Génère les metadata dynamiques pour chaque service
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {

    const { slug } = await params;

  const service = services.find(p => p.slug === slug);

  if (!service) {
    return {
      title: 'Service non trouvé - Plombier Expert Toulon',
      description: "Service de plomberie introuvable sur notre site",
    };
  }

  return {
    title: `${service.title} | Plombier Expert à Toulon`,
    description: service.description,
    alternates: {
      canonical: `https://www.plombiertoulon-expert.fr/${service.link}`,
    },
    openGraph: {
      title: `${service.title} | Plombier Toulon`,
      description: service.description,
      images: [
        {
          url: `https://www.plombiertoulon-expert.fr/${service.image}`,
          alt: service.alt,
        },
      ],
      locale: 'fr_FR',
      type: 'website',
    },
    keywords: [
      service.title.split(' ')[0],
      'Toulon',
      'Plombier',
      'Urgence',
      'Dépannage',
      ...service.title.split(' '),
    ],
  };
}


export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((p) => p.slug === slug);

  if (!service) return notFound();

  return (
    <main className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 p-6 max-lg:items-center">
        <div className="md:col-span-2">
          <Image
            src={service.image}
            alt={service.alt}
            width={800}
            height={500}
            className="w-full h-auto max-h-[500px] object-cover rounded"
          />
          <h2 className="text-4xl font-bold max-lg:text-3xl mt-6 text-[#00B4D8]">
            {service.title}
          </h2>
          <p className="text-[#4d5562] mt-4">{service.description}</p>

          {service.child && (
            <>
              <h3 className="text-xl font-semibold mt-6 text-[#00B4D8]">
                {service.child.title1}
              </h3>
              <div
                className="mt-2"
                dangerouslySetInnerHTML={{ __html: service.child.description1 }}
              />
              <div className="flex gap-6 mt-6 max-lg:flex-col">
                <Image
                  className="mt-4 object-cover w-full max-lg:max-h-64"
                  src={
                    service.child.img1 ??
                    '/images/plombier-expert-sur-toulon.webp'
                  }
                  alt="Pipeline 1"
                  width={300}
                  height={200}
                />
                <Image
                  className="mt-4 object-cover w-full max-lg:max-h-64"
                  src={
                    service.child.img2 ??
                    '/images/plombier-expert-sur-toulon.webp'
                  }
                  alt="Pipeline 2"
                  width={300}
                  height={200}
                />
              </div>

              <h3 className="text-xl font-semibold mt-6 text-[#00B4D8]">
                {service.child.title2}
              </h3>
              <div
                className="mt-2"
                dangerouslySetInnerHTML={{
                  __html: service.child.description2 ?? '',
                }}
              />
            </>
          )}
        </div>

        <div className="min-h-[calc(100vh-40px)] sticky top-[100px] self-start bg-white p-6 max-lg:min-h-auto">
          {/* ContactForm est un composant client, c'est OK ici */}
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
