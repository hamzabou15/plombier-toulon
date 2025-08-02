"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

interface Project {
    title: string;
    category: string;
    image: string;
    alt: string;
}
const projects: Project[] = [
    {
        title: "Débouchage canalisation cuisine - Toulon Centre",
        category: "Intervention express sous 1h",
        image: "/images/salle-de-bain.webp",
        alt: "Débouchage canalisation cuisine par plombier urgence Toulon",
    },
    {
        title: "Remplacement chauffe-eau - La Bocca",
        category: "Installation en 2h avec garantie",
        image: "/images/entretien-de-chaudiere-a-toulon.webp",
        alt: "Remplacement chauffe-eau par plombier Toulon",
    },
    {
        title: "Réparation fuite murale - Le Suquet",
        category: "Détection sans casse",
        image: "/images/Reparation-de-fuite-eau.webp",
        alt: "Réparation fuite murale à Toulon par expert plomberie",
    },
    {
        title: "Détection fuite enterrée - La Croisette",
        category: "Technologie non destructive",
        image: "/images/Inspection-de-canalisation-pour-fuite-enterrer.webp",
        alt: "Détection fuite canalisation enterrée à Toulon",
    },
    {
        title: "Rénovation salle de bain - Californie",
        category: "Travaux clé en main",
        image: "/images/Installations-de-canalisations-habiles.webp",
        alt: "Rénovation salle de bain par plombier Toulon",
    },
];

export default function ProjectSection() {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const scroll = (direction: "left" | "right"): void => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -300 : 300,
                behavior: "smooth",
            });
        }
    };

    const onMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
        setScrollLeft(scrollRef.current?.scrollLeft || 0);
    };

    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollRef.current) return;
        const x = e.pageX - scrollRef.current.offsetLeft;
        scrollRef.current.scrollLeft = scrollLeft - (x - startX);
    };

    const stopDrag = () => setIsDragging(false);

    return (
        <section className="bg-[#f7f9fa] px-16 max-md:px-6 py-16 mx-auto">
            <div className="max-w-6xl mx-auto mb-10">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex flex-col gap-4">
                        <p className="uppercase text-sm tracking-widest text-gray-500 font-medium">
                            Nos réalisations
                        </p>
                        <div className="flex gap-5 max-sm:flex-col">
                            <h2 className="text-4xl font-extrabold max-md:text-3xl text-[#00B4D8]">
                                Interventions Plomberie à Toulon
                            </h2>
                            <p className="mt-2 text-gray-600 max-w-xl text-base">
                                Exemples concrets de dépannages urgents réalisés par nos plombiers experts sur Toulon et ses quartiers.
                            </p>
                        </div>

                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => scroll("left")}
                            className="p-2 rounded-full border border-gray-300 hover:bg-gray-200 transition"
                            aria-label="Voir les projets précédents"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="p-2 rounded-full border border-gray-300 hover:bg-gray-200 transition"
                            aria-label="Voir les projets suivants"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory -mx-2 px-2 cursor-grab active:cursor-grabbing select-none"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    onMouseDown={onMouseDown}
                    onMouseMove={onMouseMove}
                    onMouseUp={stopDrag}
                    onMouseLeave={stopDrag}
                >
                    <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>

                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative min-w-[350px] bg-white rounded-xl overflow-hidden shadow-sm transition snap-center cursor-pointer duration-300"
                        >
                            <div className="relative w-full h-72 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:hover:scale-[1.1]"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-white/95 px-4 py-3 translate-y-full group-hover:translate-y-[-20px] transition-transform duration-500 ease-in-out">
                                    <h3 className="text-base font-semibold text-[#00B4D8]">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-gray-600">{project.category}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}