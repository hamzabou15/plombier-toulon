"use client";
import Link from "next/link";

export default function InfoSection() {
    return (
        <section className="bg-[#f7f9fa] py-16 px-16 max-sm:px-6">
            <div className="max-w-7xl mx-auto text-[#0f4c5c]">
            <div className="space-y-10 mx-auto">
                    <h2 className="text-4xl font-extrabold max-md:text-3xl">
                        Plombier Urgence Cannes 24h/24 - Interventions Express
                    </h2>

                    <p className="text-lg leading-relaxed">
                        En cas de <strong>fuite d&apos;eau</strong>, de <strong>canalisation bouchée</strong> ou de <strong>panne de chauffe-eau</strong>, notre équipe de plombiers à Cannes intervient en moins de 30 minutes 24h/24 et 7j/7. 
                        Spécialistes en dépannage plomberie d&apos;urgence, nous couvrons tous les quartiers de Cannes : 
                        <strong> Centre-ville, La Croisette, Le Suquet, La Bocca, Californie, et Mandelieu</strong>.
                    </p>

                    <p className="text-lg leading-relaxed">
                        Nos services incluent : détection de fuite non destructive, débouchage canalisation express, remplacement de chauffe-eau, 
                        réparation sanitaire et rénovation complète de salle de bain. 
                        <strong> Devis gratuit</strong> et <strong>tarifs transparents</strong> avant toute intervention.
                    </p>

                    <h2 className="text-4xl font-extrabold max-md:text-3xl mt-12">
                        Zones d&apos;intervention : Plombier Cannes et Alentours
                    </h2>

                    <p className="text-lg leading-relaxed">
                        Nous intervenons dans tout le <strong>département des Alpes-Maritimes (06)</strong> : 
                        Antibes, Mougins, Vallauris, Le Cannet, Grasse, Mandelieu-La Napoule, Théoule-sur-Mer, 
                        Saint-Laurent-du-Var, Cagnes-sur-Mer, et Cannes. 
                        <strong> Appelez-nous pour vérifier notre disponibilité immédiate</strong> dans votre secteur.
                    </p>

                    <div className="text-center mt-8">
                        <Link
                            href="/contact"
                            className="inline-block bg-[#3a5a40] text-white font-semibold px-10 py-3 rounded-md shadow hover:bg-[#0e5a5f] transition"
                        >
                            ☎ Demander un plombier en urgence
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}