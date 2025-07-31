import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const services = [
  {
    title: "Dépannage Plomberie Urgence 24h/24",
    description: "Intervention express à Cannes pour fuites d'eau, canalisations bouchées et panne de chauffe-eau. Service garanti avec délai moyen de 30 minutes.",
    image: "/images/plombier-sur-cannes-fuite-depannage.webp",
    alt: "Plombier en intervention urgente à Cannes pour dépannage de plomberie",
    link: "/services/depannage-plomberie-urgence-cannes"
  },
  {
    title: "Débouchage Canalisation Express",
    description: "Solution rapide pour canalisations bouchées à Cannes. WC, évier, douche - Intervention en moins d'1h avec garantie de résultat.",
    image: "/images/debouchage-canalisation-cannes.webp",
    alt: "Technicien plombier débouche une canalisation à Cannes",
    link: "/services/debouchage-canalisation-cannes"
  },
  {
    title: "Réparation Fuite d'Eau Sans Casse",
    description: "Détection précise et réparation de fuites à Cannes sans endommager vos murs ou sols. Technologie infrarouge professionnelle.",
    image: "/images/reparation-fuite-eau-cannes.webp",
    alt: "Réparation de fuite d'eau par plombier expert à Cannes",
    link: "/services/reparation-fuite-eau-cannes"
  },
  {
    title: "Installation Chauffe-Eau Cannes",
    description: "Remplacement et pose de chauffe-eau à Cannes (électrique, thermodynamique, gaz). Devis gratuit et installation sous 24h.",
    image: "/images/chauffeau.webp",
    alt: "Installation d'un chauffe-eau par plombier à Cannes",
    link: "/services/installation-chauffe-eau-cannes"
  },
  {
    title: "Rénovation Salle de Bains Clé en Main",
    description: "Transformation complète de votre salle de bains à Cannes. Du design à la réalisation, avec garantie décennale.",
    image: "/images/salle-de-bain.webp",
    alt: "Rénovation de salle de bains par artisan plombier à Cannes",
    link: "/services/renovation-salle-de-bains-cannes"
  },
  {
    title: "Entretien Annuel Chaudière",
    description: "Contrat d'entretien pour chaudière à Cannes. Détartrage, vérification des systèmes de sécurité et optimisation des performances.",
    image: "/images/remplacement-chaudiere-cannes.webp",
    alt: "Entretien de chaudière par technicien qualifié à Cannes",
    link: "/services/entretien-chaudiere-cannes"
  }
];

export default function ServicesSection() {
  return (
    <section className="w-full py-20 bg-white text-center flex flex-col items-center px-4 sm:px-6 lg:px-8">
      <p className="text-sm max-md:text-[12px] max-md:text-center font-medium text-gray-600 tracking-widest uppercase max-w-7xl text-center Xl:m-auto">
        Plomberie – Chauffage – Climatisation à Cannes
      </p>
      <h2 className="text-4xl max-sm:text-2xl font-bold text-[#0f4c5c] mb-12 max-w-7xl text-center">
        Nos services de plomberie à Cannes et ses environs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 gap-y-16 max-w-7xl mx-auto">
        {services.map((service, i) => (
          <Link key={i} href={service.link} className="group">
            <div className="flex flex-col items-center text-center">
              <div className="w-44 h-44 rounded-full overflow-hidden mb-6">
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={176}
                  height={176}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-sm text-gray-500">{service.alt.split(' - ')[0]}</p>
              <h3 className="text-xl font-semibold text-[#0f4c5c] mt-1 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                {service.description}
              </p>
              <Link href={service.link}>
                <Button size={"lg"} variant="submit">
                  En savoir plus
                </Button>
              </Link>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}