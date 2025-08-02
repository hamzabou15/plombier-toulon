"use client";

import { Droplet, Pipette, Wrench, Bath, Thermometer, Zap } from "lucide-react";

const services = [
  {
    title: "Débouchage Canalisation",
    icon: <Pipette className="w-12 h-12 text-[#0077B6]" />,
    description: "Débouchement urgent WC, éviers et canalisations à Toulon",
    keywords: "débouchage canalisation toulon, wc bouché toulon"
  },
  {
    title: "Réparation Fuite d'Eau",
    icon: <Droplet className="w-12 h-12 text-[#0077B6]" />,
    description: "Détection et réparation de fuites sans casse",
    keywords: "fuite eau toulon, réparation fuite var"
  },
  {
    title: "Urgence Chauffe-Eau",
    icon: <Thermometer className="w-12 h-12 text-[#0077B6]" />,
    description: "Dépannage et remplacement chauffe-eau 24h/24",
    keywords: "chauffe-eau toulon, dépannage ballon eau chaude"
  },
  {
    title: "Plomberie Salle de Bain",
    icon: <Bath className="w-12 h-12 text-[#0077B6]" />,
    description: "Rénovation complète avec garantie artisanale",
    keywords: "rénovation salle bain toulon, plomberie sanitaire"
  },
  {
    title: "Installation Pompe à Chaleur",
    icon: <Zap className="w-12 h-12 text-[#0077B6]" />,
    description: "Certifié QUALIPAC - Aides de l'État",
    keywords: "pompe à chaleur toulon, plombier chauffagiste var"
  },
  {
    title: "Dépannage Chauffage",
    icon: <Wrench className="w-12 h-12 text-[#0077B6]" />,
    description: "Chaudières, radiateurs et circuits de chauffage",
    keywords: "dépannage chauffage toulon, plombier chauffagiste"
  }
];

export default function ServiceSection() {
  return (
    <section id="services" className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="uppercase text-sm tracking-widest text-gray-500 font-medium">
            Nos Expertises
          </p>
          <h2 className="text-4xl font-extrabold max-md:text-3xl text-[#0f4c5c]">
            Services Plomberie à Toulon
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Artisan plombier local intervenant 24h/24 pour tous vos dépannages dans le Var
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#f7f9fa] p-6 rounded-xl shadow-md border border-gray-100 transition-all hover:shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="bg-[#e8f5e9] p-3 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#0f4c5c] ml-4">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a 
                href={`tel:+334XXXXXXX`} 
                className="text-[#0077B6] font-medium hover:underline inline-flex items-center"
              >
                <span>Demander une intervention</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}