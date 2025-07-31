"use client";

import { Droplet, Handshake, Pipette, Wrench } from "lucide-react";

const services = [
  {
    title: "Débouchage Canalisation",
    icon: <Pipette className="w-12 h-12 text-[#3a5a40]" />,
    description: "Débouchement urgent WC, éviers et canalisations à Cannes - Intervention sous 1h",
  },
  {
    title: "Réparation Fuite d'Eau",
    icon: <Droplet className="w-12 h-12 text-[#3a5a40]" />,
    description: "Détection et réparation de fuites sans casse (murs, sols, canalisations)",
  },
  {
    title: "Urgence Chauffe-Eau",
    icon: <Wrench className="w-12 h-12 text-[#3a5a40]" />,
    description: "Dépannage et remplacement de chauffe-eau 24h/24 sur Cannes et environs",
  },
  {
    title: "Plomberie Salle de Bain",
    icon: <Handshake className="w-12 h-12 text-[#3a5a40]" />,
    description: "Installation et rénovation complète de sanitaire avec garantie artisanale",
  },
];

export default function ServiceSection() {
  return (
    <section className="bg-[#f7f9fa] py-16 px-16 max-sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="uppercase text-sm tracking-widest text-gray-500 font-medium mb-2">
          Services Urgence
        </p>
        <h2 className="text-4xl font-extrabold max-md:text-3xl text-[#0f4c5c] mb-12">
          Plombier Cannes Expert - Interventions 24h/24
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-lg shadow-md transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer group"
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#0f4c5c] group-hover:text-[#3a5a40] transition">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2">{service.description}</p>
              <a href="tel:0612345678" className="mt-4 inline-block text-[#3a5a40] text-sm font-medium">
                Appeler pour urgence
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}