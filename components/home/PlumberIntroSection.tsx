"use client";

import Image from "next/image";
import { Phone, Check } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const servicesList = [
  "Dépannage fuite d'eau - Détection sans casse",
  "Débouchage canalisation - WC, évier, douche",
  "Remplacement chauffe-eau - Électrique, thermodynamique",
  "Réparation sanitaire - Robinetterie, éviers, WC",
  "Rénovation salle de bains - Clé en main",
  "Installation pompe à chaleur - Certifié QUALIPAC"
];

const areasServed = [
  "Toulon Centre", "Le Mourillon", "Pont-du-Las", 
  "Saint-Jean du Var", "Le Pont Neuf", "La Rode",
  "La Valette-du-Var", "La Garde", "Le Revest-les-Eaux"
];

export default function PlumbingIntro() {
    return (
        <section className="py-16 md:py-24 bg-[#f7f9fa]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                    <p className="uppercase text-sm text-gray-600 font-semibold tracking-widest mb-2">
                        Plombier Toulon - Artisan Local
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                        Service Plomberie Complète dans le <span className="text-[#0077B6]">Var</span>
                    </h2>

                    <div className="mb-6">
                        {servicesList.map((service, index) => (
                            <div key={index} className="flex items-start mb-2">
                                <Check className="w-5 h-5 text-[#0077B6] mt-0.5 mr-2 flex-shrink-0" />
                                <p className="text-gray-700">{service}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mb-8">
                        <p className="font-semibold text-gray-900 mb-2">Zones d&apos;intervention :</p>
                        <div className="flex flex-wrap gap-2">
                            {areasServed.map((area, index) => (
                                <span key={index} className="bg-white border border-[#0077B6] text-[#0f4c5c] px-3 py-1 rounded-full text-sm">
                                    {area}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 max-md:items-center">
                        <Link href="/contact">
                            <Button size={"lg"} variant="submit">
                                ✉ Demander un devis
                            </Button>
                        </Link>
                     <a href="tel:+33756935200" aria-label="Appeler un plombier urgence Toulon">
                            <Button size={"lg"} variant="submit">
                                <Phone className="w-5 h-5" />
                                <span className="font-semibold">+33 756 93 52 00</span>
                            </Button>
                        </a>
                    </div>
                </div>

                <div className="lg:w-1/2 grid grid-cols-2 gap-4 max-lg:w-full">
                    {[
                        "/images/plombier-toulon.Webp",
                        "/images/plombier-expert-toulon.webp",
                        "/images/chauffeau.Webp",
                        "/images/plombier-sur-toulon-fuite-Renovation.webp"
                    ].map((src, index) => (
                        <div key={index} className="relative h-72 rounded-lg overflow-hidden shadow-lg border border-gray-200">
                            <Image
                                src={src}
                                alt={`Plombier expert intervenant à Toulon - Service ${index+1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}