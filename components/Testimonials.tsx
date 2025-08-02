"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSwipeable } from "react-swipeable";

const testimonials = [
    {
        name: "Nathalie Dupont",
        location: "Toulon Centre (06)",
        image: "/icons/user1.webp",
        quote:
            "Intervention rapide pour détecter une fuite d'eau encastrée à Toulon Centre. Réponse en urgence 24h/24. Service professionnel, je recommande vivement !",
        color: "black",
    },
    {
        name: "Olivier Martin",
        location: "Toulon Ouest (06)",
        image: "/icons/user2.webp",
        quote:
            "Très professionnel, dépannage en urgence sans casse à Toulon Ouest. Détection de fuite impeccable, prix raisonnables. Service de plombier recommandé.",
        color: "teal",
    },
    {
        name: "Claire Lefèvre",
        location: "Toulon Est (06)",
        image: "/icons/user3.webp",
        quote:
            "Intervention en urgence, détection rapide de la fuite d'eau. Aucun dégât, travail soigné. Plombier expérimenté et fiable à Toulon Est.",
        color: "teal",
    },
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);

    const handleSwipe = (dir: "LEFT" | "RIGHT") => {
        if (dir === "LEFT") {
            setIndex((prev) => (prev + 1) % testimonials.length);
        } else {
            setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        }
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => handleSwipe("LEFT"),
        onSwipedRight: () => handleSwipe("RIGHT"),
        trackMouse: true,
    });

    const visibleCards = 2;
    const visibleTestimonials = testimonials.slice(index, index + visibleCards);

    while (visibleTestimonials.length < visibleCards) {
        visibleTestimonials.push(
            testimonials[(visibleTestimonials.length + index) % testimonials.length]
        );
    }

    return (
          <section className="w-full py-16 bg-white relative overflow-hidden px-16 max-md:px-6">
            <div className="text-center mb-12">
                <p className="text-sm tracking-widest text-gray-500 uppercase">Avis Clients</p>
                <h2 className="text-4xl font-bold text-gray-900 mt-2">
                    Ce que disent nos clients de Toulon
                </h2>
            </div>

            <div className="flex items-stretch justify-center gap-6 px-4 flex-wrap md:flex-nowrap cursor-grab active:cursor-grabbing select-none"
                {...handlers}>
                {visibleTestimonials.map((t, i) => (
                    <Card key={i} className="bg-[#f4f7f8] rounded-2xl p-8 shadow-md w-full max-w-md transition-transform duration-500 ease-in-out">
                        <Quote className={cn("w-6 h-6 mb-4", t.color === "black" ? "text-black" : "text-teal-600")} />
                        <p className="text-gray-700 text-lg leading-relaxed">{t.quote}</p>
                        <div className="flex items-center gap-4 mt-6">
                            <img src={t.image} alt={`${t.name}, ${t.location}`} className="w-12 h-12 rounded-full object-cover" />
                            <div>
                                <p className="font-semibold text-gray-900">{t.name}</p>
                                <p className="text-sm text-gray-500">{t.location}</p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {/* ... (pagination et boutons) */}
        </section>
    );
}
