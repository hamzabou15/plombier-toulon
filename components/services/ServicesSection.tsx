// components/services/ServicesSection.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Check } from "lucide-react";

const services = [
  {
    title: "Dépannage Plomberie Urgence 24h/24",
    description: "Intervention express à Toulon pour fuites d'eau, canalisations bouchées et panne de chauffe-eau. Service garanti avec délai moyen de 30 minutes.",
    image: "/images/plombier-sur-toulon-fuite-depannage.webp",
    alt: "Plombier en intervention urgente à Toulon pour dépannage de plomberie",
    link: "/services/depannage-plomberie-urgence-toulon"
  },
  {
    title: "Débouchage Canalisation Express",
    description: "Solution rapide pour canalisations bouchées à Toulon. WC, évier, douche - Intervention en moins d'1h avec garantie de résultat.",
    image: "/images/debouchage-canalisation-toulon.webp",
    alt: "Technicien plombier débouche une canalisation à Toulon",
    link: "/services/debouchage-canalisation-toulon"
  },
  {
    title: "Réparation Fuite d'Eau Sans Casse",
    description: "Détection précise et réparation de fuites à Toulon sans endommager vos murs ou sols. Technologie infrarouge professionnelle.",
    image: "/images/reparation-fuite-eau-toulon.webp",
    alt: "Réparation de fuite d'eau par plombier expert à Toulon",
    link: "/services/reparation-fuite-eau-toulon"
  },
  {
    title: "Installation Chauffe-Eau Toulon",
    description: "Remplacement et pose de chauffe-eau à Toulon (électrique, thermodynamique, gaz). Devis gratuit et installation sous 24h.",
    image: "/images/chauffeau.webp",
    alt: "Installation d'un chauffe-eau par plombier à Toulon",
    link: "/services/installation-chauffe-eau-toulon"
  },
  {
    title: "Rénovation Salle de Bains Clé en Main",
    description: "Transformation complète de votre salle de bains à Toulon. Du design à la réalisation, avec garantie décennale.",
    image: "/images/salle-de-bain.webp",
    alt: "Rénovation de salle de bains par artisan plombier à Toulon",
    link: "/services/renovation-salle-de-bains-toulon"
  },
  {
    title: "Entretien Annuel Chaudière",
    description: "Contrat d'entretien pour chaudière à Toulon. Détartrage, vérification des systèmes de sécurité et optimisation des performances.",
    image: "/images/remplacement-chaudiere-toulon.webp",
    alt: "Entretien de chaudière par technicien qualifié à Toulon",
    link: "/services/entretien-chaudiere-toulon"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-20 bg-white text-center flex flex-col items-center px-4 sm:px-6 lg:px-8">
      <p className="text-sm max-md:text-[12px] max-md:text-center font-medium text-gray-600 tracking-widest uppercase max-w-7xl text-center Xl:m-auto">
        Plomberie – Chauffage – Climatisation à Toulon
      </p>
      <h2 className="text-4xl max-sm:text-2xl font-bold text-[#0f4c5c] mb-12 max-w-7xl text-center">
        Nos services de plomberie à Toulon et ses environs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 gap-y-16 max-w-7xl mx-auto">
        {services.map((service, i) => (
          <div key={i} className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-44 h-44 rounded-full overflow-hidden mb-6 border-4 border-[#f0f8ff] shadow-md">
              <Image
                src={service.image}
                alt={service.alt}
                width={176}
                height={176}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#0f4c5c] mt-1 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed mb-4 px-2">
              {service.description}
            </p>
            <Link 
              href={service.link} 
              title={`Détails du service ${service.title}`}
              className="mt-auto"
            >
              <Button size={"lg"} variant="submit">
                Détails & tarifs
              </Button>
            </Link>
          </div>
        ))}
      </div>
      
      <div className="mt-16 max-w-3xl mx-auto bg-[#f7f9fa] p-8 rounded-xl">
        <h3 className="text-2xl font-bold text-[#0f4c5c] mb-4">Pourquoi choisir notre service de plomberie à Toulon ?</h3>
        <ul className="text-left grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="flex items-start">
            <Check className="w-5 h-5 text-[#0077B6] mt-1 mr-2 flex-shrink-0" />
            <span><strong>Plombiers certifiés</strong> avec 10+ ans d&apos;expérience</span>
          </li>
          <li className="flex items-start">
            <Check className="w-5 h-5 text-[#0077B6] mt-1 mr-2 flex-shrink-0" />
            <span><strong>Intervention en moins de 30 minutes</strong> en urgence</span>
          </li>
          <li className="flex items-start">
            <Check className="w-5 h-5 text-[#0077B6] mt-1 mr-2 flex-shrink-0" />
            <span><strong>Devis gratuit</strong> et <strong>transparence tarifaire</strong></span>
          </li>
          <li className="flex items-start">
            <Check className="w-5 h-5 text-[#0077B6] mt-1 mr-2 flex-shrink-0" />
            <span><strong>Garantie décennale</strong> sur tous nos travaux</span>
          </li>
        </ul>
      </div>
    </section>
  );
}