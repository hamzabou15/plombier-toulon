"use client";

import Script from "next/script";
import schemaLocalBusiness from "@/public/schema-local-business.json";

export default function LocalBusinessSchema() {
  const updatedSchema = {
    ...schemaLocalBusiness,
    "@type": "Plumber",
    name: "Plombier Toulon Expert",
    image: "https://plombiertoulon-expert.fr/logo.png",
    telephone: "+334XXXXXXX",
    address: {
      ...schemaLocalBusiness.address,
      addressLocality: "Toulon",
      addressRegion: "Var",
      postalCode: "83000",
      streetAddress: "123 Avenue de la République"
    },
    geo: {
      latitude: "43.124228",
      longitude: "5.928000"
    },
    openingHoursSpecification: [
      {
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59"
      }
    ],
    areaServed: [
      "Toulon",
      "La Valette-du-Var",
      "La Garde",
      "Le Revest-les-Eaux",
      "Ollioules",
      "La Seyne-sur-Mer"
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "43.124228",
        longitude: "5.928000"
      },
      geoRadius: "20000"
    },
    priceRange: "€€",
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "4.9",
        bestRating: "5"
      },
      author: {
        "@type": "Person",
        name: "Marie D."
      }
    }
  };

  return (
    <Script
      type="application/ld+json"
      id="local-business-schema"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(updatedSchema),
      }}
    />
  );
}