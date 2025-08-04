"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
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

  // Avancer / reculer avec boucle
  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);
  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Swipe
  const handlers = useSwipeable({
    onSwipedLeft: () => next(),
    onSwipedRight: () => prev(),
    trackMouse: true,
  });

  // Clavier
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // Auto-rotation (décommenter si tu veux)
  // useEffect(() => {
  //   const id = setInterval(next, 8000);
  //   return () => clearInterval(id);
  // }, [next]);

  // Construire les cartes visibles en boucle
  const visibleTestimonials: typeof testimonials = [];
  for (let i = 0; visibleTestimonials.length < VISIBLE_CARDS; i++) {
    visibleTestimonials.push(testimonials[(index + i) % testimonials.length]);
  }

  return (
    <section
      className="w-full py-16 bg-white relative overflow-hidden px-16 max-md:px-6"
      aria-label="Témoignages clients"
    >
      <div className="text-center mb-12">
        <p className="text-sm tracking-widest text-gray-500 uppercase">Avis Clients</p>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">
          Ce que disent nos clients de Toulon et ses environs
        </h2>
      </div>

      <div className="relative flex items-stretch justify-center gap-6 px-4 flex-wrap md:flex-nowrap cursor-grab active:cursor-grabbing select-none"
        {...handlers}
      >
        {/* Flèche précédente */}
        <button
          aria-label="Précédent"
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow hover:scale-105 transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {visibleTestimonials.map((t, i) => (
          <Card
            key={`${t.name}-${i}-${index}`}
            className="bg-[#f4f7f8] rounded-2xl p-8 shadow-md w-full max-w-md transition-transform duration-500 ease-in-out"
            aria-label={`Témoignage de ${t.name} à ${t.location}`}
          >
            <Quote
              className={cn(
                "w-6 h-6 mb-4",
                t.color === "black" ? "text-black" : "text-teal-600"
              )}
              aria-hidden="true"
            />
            <p className="text-gray-700 text-lg leading-relaxed">{t.quote}</p>
            <div className="flex items-center gap-4 mt-6">
              <img
                src={t.image}
                alt={`${t.name}, ${t.location}`}
                className="w-12 h-12 rounded-full object-cover"
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/icons/default-user.webp";
                }}
              />
              <div>
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.location}</p>
              </div>
            </div>
          </Card>
        ))}

        {/* Flèche suivante */}
        <button
          aria-label="Suivant"
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow hover:scale-105 transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Pagination indicateurs */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Voir témoignage ${idx + 1}`}
            onClick={() => setIndex(idx)}
            className={cn(
              "w-3 h-3 rounded-full transition",
              idx === index ? "bg-gray-900" : "bg-gray-300"
            )}
          />
        ))}
      </div>
    </section>
  );
}
