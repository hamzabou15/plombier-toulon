"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Hero() {
    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 2xl:px-16">
                {/* Image */}
                <div className="w-full md:w-1/2">
                    <Image
                        src="/images/plombier-cannes-hero.webp"
                        alt="Plombier professionnel intervenant en urgence à Cannes pour réparation fuite d'eau"
                        width={600}
                        height={500}
                        className="w-full h-auto object-cover"
                        priority
                    />
                </div>

                {/* Texte principal */}
                <div className="w-full md:w-1/2 text-center md:text-left pr-12 max-md:px-4">
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-[#222626]">
                        Plombier Cannes Urgence 24/7 <br />
                        Intervention Express sous 30 min
                    </h1>
                    <p className="text-gray-700 mb-6 text-lg">
                        Fuite d&apos;eau? Canalisation bouchée? Chauffe-eau en panne? Notre équipe de plombiers experts à Cannes intervient 
                        24h/24 et 7j/7 pour tous dépannages urgents. Service rapide avec garantie artisanale.
                    </p>
                    <Link href="/contact">
                        <Button size={"lg"} variant="default" className="bg-[#3a5a40] text-white hover:bg-[#0e5a5f]">
                            ☎ Appel Urgence Plomberie
                        </Button>
                    </Link>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 text-center mt-10 py-">
                        <div>
                            <p className="text-2xl font-bold text-[#222626]">24h/24</p>
                            <p className="text-sm text-gray-500">Urgence plomberie</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-[#222626]">30 min</p>
                            <p className="text-sm text-gray-500">Délai moyen d&apos;intervention</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-[#222626]">0€</p>
                            <p className="text-sm text-gray-500">Devis gratuit</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}