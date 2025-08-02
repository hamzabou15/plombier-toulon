"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Hero() {
    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 2xl:px-16">
                <div className="w-full md:w-1/2">
                    <Image
                        src="/images/plombier-toulon-hero.webp"
                        alt="Plombier professionnel en intervention d'urgence à Toulon pour réparation fuite d'eau"
                        width={600}
                        height={500}
                        className="w-full h-auto object-cover"
                        priority
                    />
                </div>

                <div className="w-full md:w-1/2 text-center md:text-left pr-12 max-md:px-4">
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-[#0077B6]">
                        Plombier Toulon Urgence 24/7 <br />
                        Artisan Local - Intervention Express
                    </h1>
                    <p className="text-gray-700 mb-6 text-lg">
                        Plombier certifié à Toulon pour dépannage urgent : fuites d&apos;eau, canalisations bouchées, chauffe-eau en panne. 
                        Intervention rapide 24h/24 dans tout le Var avec garantie artisanale.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-md:items-center">
                        <Link href="/contact">
                            <Button size={"lg"} variant="default" className="bg-[#0077B6] text-white hover:bg-[#0e5a5f]">
                                ☎ Urgence Plomberie
                            </Button>
                        </Link>
                        <Link href="/services">
                            <Button size={"lg"} variant="outline" className="border-[#0077B6] text-[#0f4c5c]">
                                Nos Services
                            </Button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-center mt-10 py-4 border-t border-gray-200">
                        <div>
                            <p className="text-2xl font-bold text-[#0077B6]">24h/24</p>
                            <p className="text-sm text-gray-500">7j/7 même jours fériés</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-[#0077B6]">30 min</p>
                            <p className="text-sm text-gray-500">Délai moyen d&apos;intervention</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-[#0077B6]">0€</p>
                            <p className="text-sm text-gray-500">Déplacement & Devis</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}