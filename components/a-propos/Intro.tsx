"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Intro() {
    return (
        <section className="py-16 md:py-24 max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                {/* Texte côté gauche */}
                <div className="lg:w-1/2 flex flex-col">
                    <p className="uppercase text-sm text-gray-600 font-semibold tracking-widest mb-2">
                        Plombier Cannes - Urgence 24h/24
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                        Artisan Plombier Certifié à Cannes depuis 2010
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Fondée en 2010, <strong>Plombier Cannes Expert</strong> intervient pour tous dépannages urgents sur Cannes et ses quartiers :
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-2">
                        <li>Recherche et réparation de fuites d&apos;eau (murs, sols, canalisations)</li>
                        <li>Débouchage express de canalisations et WC</li>
                        <li>Remplacement de chauffe-eau et chaudière</li>
                        <li>Rénovation complète de salles de bains</li>
                    </ul>
                    <p className="text-sm text-gray-600 mb-8">
                        Zones d&apos;intervention : Cannes Centre, La Croisette, Le Suquet, La Bocca, Californie, Mandelieu-La Napoule
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/contact">
                            <Button size={"lg"} variant="submit">
                                Demander un devis
                            </Button>
                        </Link>
                        <a href="tel:+33612345678" aria-label="Appeler un plombier urgence Cannes" 
                            className="flex items-center gap-2 text-gray-900 font-medium bg-[#3a5a401a] px-4 py-2 rounded-md">
                            <Phone className="w-5 h-5 text-[#3a5a40]" />
                            <span className="font-semibold">+33 7 56 93 52 00</span>
                        </a>
                    </div>
                </div>

                {/* Images côté droit */}
                <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                    <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src="/images/chauffeau.Webp"
                            alt="Remplacement de chauffe-eau par plombier expert à Cannes"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative h-80 rounded-lg overflow-hidden shadow-lg mt-12">
                        <Image
                            src="/images/plombier-cannes.webp"
                            alt="Plombier professionnel réparant une fuite d'eau à Cannes"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}