// components/a-propos/Intro.tsx
"use client";

import Image from "next/image";
import { Phone, Check } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Intro() {
    return (
        <section className="py-16 md:py-24 max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                <div className="lg:w-1/2 flex flex-col">
                    <p className="uppercase text-sm text-gray-600 font-semibold tracking-widest mb-2">
                        Plombier Toulon - Artisan Local
                    </p>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                        Notre Histoire : Plombier Expert à Toulon depuis 2010
                    </h1>
                    <p className="text-lg text-gray-700 mb-6">
                        Fondée en 2010 par Jean Dupont, <strong>Plombier Toulon Expert</strong> est devenue une référence en plomberie d&apos;urgence dans le Var. Notre mission : fournir un service rapide et professionnel aux habitants de Toulon et ses environs.
                    </p>

                    <h2 className="text-2xl font-semibold text-[#0077B6] mt-6 mb-4">
                        Notre expertise à votre service
                    </h2>
                    <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                            <Check className="w-5 h-5 text-[#0077B6] mt-0.5 mr-2 flex-shrink-0" />
                            <span><strong>Plombiers certifiés</strong> : Qualibat, RGE, Garantie décennale</span>
                        </li>
                        <li className="flex items-start">
                            <Check className="w-5 h-5 text-[#0077B6] mt-0.5 mr-2 flex-shrink-0" />
                            <span><strong>Matériel de pointe</strong> : caméra d&apos;inspection, détecteurs de fuite</span>
                        </li>
                        <li className="flex items-start">
                            <Check className="w-5 h-5 text-[#0077B6] mt-0.5 mr-2 flex-shrink-0" />
                            <span><strong>Engagement qualité</strong> : satisfaction client garantie</span>
                        </li>
                        <li className="flex items-start">
                            <Check className="w-5 h-5 text-[#0077B6] mt-0.5 mr-2 flex-shrink-0" />
                            <span><strong>Service 24h/24</strong> : 7j/7, jours fériés inclus</span>
                        </li>
                    </ul>

                    <p className="text-sm text-gray-600 mb-8">
                        Zones d&apos;intervention : Toulon Centre, Le Mourillon, Pont-du-Las, Saint-Jean du Var, La Valette-du-Var, La Garde, et tout le département du Var
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 max-md:items-center">
                        <Link href="/contact">
                            <Button size={"lg"} variant="submit">
                                Demander un devis
                            </Button>
                        </Link>
                        <a href="tel:+334XXXXXXX" aria-label="Appeler un plombier urgence Toulon">
                            <Button size={"lg"} variant="submit">
                                <Phone className="w-5 h-5" />
                                <span className="font-semibold">+33 7 56 93 52 00</span>
                            </Button>
                        </a>


                    </div>
                </div>

                <div className="lg:w-1/2 grid grid-cols-2 gap-6 max-lg:w-full">
                    <div className="relative h-80 rounded-lg overflow-hidden shadow-lg border-2 border-white">
                        <Image
                            src="/images/chauffeau.webp"
                            alt="Remplacement de chauffe-eau par plombier expert à Toulon"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
                            Installation chauffe-eau à Toulon
                        </div>
                    </div>
                    <div className="relative h-80 rounded-lg overflow-hidden shadow-lg border-2 border-white mt-12">
                        <Image
                            src="/images/plombier-toulon.webp"
                            alt="Plombier professionnel réparant une fuite d'eau à Toulon"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
                            Dépannage fuite d&apos;eau à Toulon
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}