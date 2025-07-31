"use client";

import Script from "next/script";
import schemaLocalBusiness from "@/public/schema-local-business.json";

export default function LocalBusinessSchema() {
  // Mise à jour du JSON Schema avec vos informations spécifiques
  const updatedSchema = {
    ...schemaLocalBusiness,
    name: "Plombier Cannes Expert",
    image: "https://plombiercannes-expert.fr/logo.png",
    telephone: "+33612345678",
    address: {
      ...schemaLocalBusiness.address,
      addressLocality: "Cannes",
      addressRegion: "Alpes-Maritimes",
      postalCode: "06400",
      streetAddress: "123 Boulevard de la Croisette"
    },
    geo: {
      latitude: "43.552847",
      longitude: "7.017369"
    },
    openingHoursSpecification: [
      {
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59"
      }
    ],
    areaServed: [
      {
        geoRadius: 20000,
        geoMidpoint: {
          latitude: "43.552847",
          longitude: "7.017369"
        }
      }
    ]
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