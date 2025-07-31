"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function PlumbingIntro() {
    return (
        <section className="py-16 md:py-24 bg-[#f7f9fa] mt-20 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
                {/* Texte côté gauche */}
                <div className="lg:w-1/2">
                    <p className="uppercase text-sm text-gray-600 font-semibold tracking-widest mb-2">
                        Plombier Cannes - Urgence 24/7
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                        Services Plomberie à Cannes : <span className="text-[#3a5a40]">Dépannage Express & Installation</span>
                    </h2>

                    <p className="text-lg text-gray-700 mb-6">
                        <strong>Artisan plombier certifié à Cannes</strong>, nous intervenons 24h/24 pour :
                    </p>

                    <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-2">
                        <li><strong>Dépannage fuite d&apos;eau</strong> - Détection sans casse et réparation immédiate</li>
                        <li><strong>Débouchage canalisation</strong> - Intervention rapide sur WC, évier, douche</li>
                        <li><strong>Remplacement chauffe-eau</strong> - Ballon électrique, thermodynamique, gaz</li>
                        <li><strong>Réparation sanitaire</strong> - Robinetterie, éviers, wc, chasses d&apos;eau</li>
                        <li><strong>Rénovation salle de bains</strong> - Complète ou partielle, clé en main</li>
                    </ul>

                    <p className="text-sm text-gray-600 mb-8">
                        Zones d&apos;intervention : Cannes Centre, La Croisette, Le Suquet, La Bocca, Californie, Mandelieu-La Napoule, Mougins
                    </p>

                    <div className="flex flex-col mx-auto gap-4">
                        <Link href="/contact">
                            <Button size={"lg"} variant="submit">
                                ☎ Demander un devis
                            </Button>
                        </Link>
                        <a
                            href="tel:+33612345678"
                            aria-label="Appeler un plombier en urgence à Cannes"
                            className="flex items-center gap-2 bg-[#3a5a40] text-white px-4 py-2 rounded-md font-medium max-sm:mx-auto"
                        >
                            <Phone className="w-5 h-5" />
                            <span className="font-semibold">+33 7 56 93 52 00</span>
                        </a>
                    </div>
                </div>

                {/* Images côté droit */}
                <div className="lg:w-1/2 grid grid-cols-2 gap-4 max-lg:w-full">
                    <div className="relative h-72 rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src="/images/plombier-cannes.Webp"
                            alt="Plombier expert réparant une fuite d'eau à Cannes Centre"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative h-72 rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src="/images/plombier-expert-cannes.webp"
                            alt="Technicien plombier effectuant un débouchage canalisation à La Bocca"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative h-72 rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src="/images/chauffeau.Webp"
                            alt="Installation de chauffe-eau par plombier professionnel à Cannes"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative h-72 rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src="/images/plombier-sur-cannes-fuite-Renovation.webp"
                            alt="Rénovation de salle de bains à Cannes par plombier expert"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}