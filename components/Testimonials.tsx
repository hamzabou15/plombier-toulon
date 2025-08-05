"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSwipeable } from "react-swipeable";

const testimonials = [
  {
    name: "Nathalie Dupont",
    location: "Toulon Centre (06)",
    image: "/icons/femme1.webp",
    quote:
      "Intervention rapide pour détecter une fuite d'eau encastrée à Toulon Centre. Réponse en urgence 24h/24. Service professionnel, je recommande vivement !",
    color: "black",
  },
  {
    name: "Olivier Martin",
    location: "Toulon Ouest (06)",
    image: "/icons/homme1.webp",
    quote:
      "Très professionnel, dépannage en urgence sans casse à Toulon Ouest. Détection de fuite impeccable, prix raisonnables. Service de plombier recommandé.",
    color: "teal",
  },
  {
    name: "Claire Lefèvre",
    location: "Toulon Est (06)",
    image: "/icons/femme2.webp",
    quote:
      "Intervention en urgence, détection rapide de la fuite d'eau. Aucun dégât, travail soigné. Plombier expérimenté et fiable à Toulon Est.",
    color: "teal",
  },
  {
    name: "Julien Fournier",
    location: "La Garde (83)",
    image: "/icons/homme2.webp",
    quote:
      "Un service impeccable : diagnostic précis et réparation sans délais. Le technicien a été clair, efficace et très aimable. Je suis rassuré.",
    color: "black",
  },
  {
    name: "Sophie Bernard",
    location: "Hyères (83)",
    image: "/icons/femme3.webp",
    quote:
      "Fuite détectée en un rien de temps, sans déranger la structure. Excellent suivi et communication. Je conseille fortement pour les urgences.",
    color: "teal",
  },
  {
    name: "Marc Petit",
    location: "Le Pradet (83)",
    image: "/icons/homme3.webp",
    quote:
      "Résolu rapidement, prix transparent et service très réactif. J'ai pu reprendre une vie normale rapidement, merci pour votre professionnalisme.",
    color: "black",
  },
  {
    name: "Isabelle Roy",
    location: "Six-Fours-les-Plages (83)",
    image: "/icons/femmme4.webp",
    quote:
      "Efficace, courtois, et surtout sans surprise. La fuite était cachée et pourtant identifiée sans casse. Très satisfaite du résultat.",
    color: "teal",
  },
  {
    name: "Antoine Moreau",
    location: "Ollioules (83)",
    image: "/icons/homme4.webp",
    quote:
      "Intervention de nuit, équipe hyper réactive. Aucune détérioration et explication claire de la panne. On sent l'expérience.",
    color: "black",
  },
];

const VISIBLE_CARDS = 2;

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);
  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => next(),
    onSwipedRight: () => prev(),
    trackMouse: true,
  });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const visibleTestimonials: typeof testimonials = [];
  for (let i = 0; visibleTestimonials.length < VISIBLE_CARDS; i++) {
    visibleTestimonials.push(testimonials[(index + i) % testimonials.length]);
  }

  return (
    <section
      className="w-full px-4 sm:px-6 py-12 xl:max-w-6xl mx-auto"
      aria-label="Témoignages clients"
    >
      <div className="text-center mb-12">
        <p className="text-sm tracking-widest text-[#555555] uppercase">Avis Clients</p>
        <h2 className="text-4xl font-bold text-[#2f2f2f] mt-2 max-xl:text-[28px]">
          Ce que disent nos clients de Toulon et ses environs
        </h2>
      </div>

      <div
        className="relative flex items-stretch justify-center gap-6 px-4 flex-wrap md:flex-nowrap cursor-grab active:cursor-grabbing select-none"
        {...handlers}
      >
        <button
          aria-label="Précédent"
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:scale-105 transition"
        >
          <ChevronLeft className="w-6 h-6 text-[#E67E22]" />
        </button>

        {visibleTestimonials.map((t, i) => (
          <Card
            key={`${t.name}-${i}-${index}`}
            className="bg-white rounded-2xl p-8 shadow-lg w-full max-w-md border border-[#e8dfd6] transition-transform duration-500 ease-in-out"
            aria-label={`Témoignage de ${t.name} à ${t.location}`}
          >
            <Quote
              className={cn(
                "w-6 h-6 mb-4",
                t.color === "black" ? "text-[#2f2f2f]" : "text-[#1f7f6f]"
              )}
              aria-hidden="true"
            />
            <p className="text-[#4a4a4a] text-lg leading-relaxed">{t.quote}</p>
            <div className="flex items-center gap-4 mt-6">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-[#f0f0f5] flex-shrink-0">
                <img
                  src={t.image}
                  alt={`${t.name}, ${t.location}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/icons/default-user.webp";
                  }}
                />
              </div>
              <div>
                <p className="font-semibold text-[#2f2f2f]">{t.name}</p>
                <p className="text-sm text-[#6b7280]">{t.location}</p>
                {/* Étoiles jaunes */}
                <div className="flex mt-1">
                  {Array.from({ length: 5 }).map((_, starIdx) => (
                    <Star
                      key={starIdx}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}

        <button
          aria-label="Suivant"
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:scale-105 transition"
        >
          <ChevronRight className="w-6 h-6 text-[#E67E22]" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Voir témoignage ${idx + 1}`}
            onClick={() => setIndex(idx)}
            className={cn(
              "w-3 h-3 rounded-full transition",
              idx === index ? "bg-[#E67E22]" : "bg-[#d1d5db]"
            )}
          />
        ))}
      </div>
    </section>
  );
}
