"use client";
import React from "react";
import Image from "next/image";

const images = [
    {
        src: "/images/plombier-sur-cannes-fuite-depannage.webp",
        alt: "Dépannage fuite d'eau urgence 24h/24 à Cannes",
    },
    {
        src: "/images/plombier-sur-cannes-fuite-Renovation.webp",
        alt: "Rénovation salle de bain par plombier expert Cannes",
    },
    {
        src: "/images/plombier-sur-cannes-fuite-reparation.webp",
        alt: "Réparation canalisation bouchée à Cannes",
    },
    {
        src: "/images/plombier-sur-cannes-fuite.webp",
        alt: "Installation chauffe-eau par plombier Cannes",
    },
    {
        src: "/images/plombier-sur-cannes-fuite-canalisation.webp",
        alt: "Détection fuite d'eau non destructive à Cannes",
    },
];

export default function ProductGallery() {
    return (
        <section className="w-full pt-8 px-0 bg-white" aria-label="Galerie interventions plomberie Cannes">
            <div className="grid grid-cols-5 w-full bg-black justify-center px-0 max-md:grid-cols-2">
                {images.map((img, i) => (
                    <div key={i} className="w-full h-[180px] relative overflow-hidden hover:opacity-80 transition duration-300">
                        <Image src={img.src} alt={img.alt} fill className="object-cover" />
                    </div>
                ))}
            </div>
        </section>
    );
}