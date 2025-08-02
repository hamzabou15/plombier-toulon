"use client";
import Link from "next/link";

export default function InfoSection() {
    return (
        <section className="bg-[#f7f9fa] py-16 px-16 max-sm:px-6">
            <div className="max-w-7xl mx-auto text-[#0f4c5c]">
                <div className="space-y-10 mx-auto">
                    <h2 className="text-4xl font-extrabold max-md:text-3xl">
                        Plombier Urgence Toulon 24h/24 - Interventions Express
                    </h2>

                    <p className="text-lg leading-relaxed">
                        En cas de <strong>fuite d&apos;eau</strong>, de <strong>canalisation bouchée</strong> ou de <strong>panne de chauffe-eau</strong>, notre équipe de plombiers à Toulon intervient en moins de 30 minutes 24h/24 et 7j/7. 
                        Spécialistes en dépannage plomberie d&apos;urgence dans le Var, nous couvrons tous les quartiers de Toulon : 
                        <strong> Centre-ville, Le Mourillon, Pont-du-Las, Saint-Jean du Var, La Rode, Le Pont Neuf</strong> et ses alentours.
                    </p>

                    <p className="text-lg leading-relaxed">
                        Nos services de plombier à Toulon incluent : 
                        <strong> détection de fuite non destructive</strong>, <strong>débouchage canalisation express</strong>, 
                        <strong> remplacement de chauffe-eau</strong>, <strong>réparation sanitaire</strong> et 
                        <strong> rénovation complète de salle de bain</strong>. 
                        <strong> Devis gratuit</strong> et <strong>tarifs transparents</strong> avant toute intervention.
                    </p>

                    <h2 className="text-4xl font-extrabold max-md:text-3xl mt-12">
                        Zones d&apos;intervention : Plombier Toulon et le Var
                    </h2>

                    <p className="text-lg leading-relaxed">
                        Nous intervenons dans tout le <strong>département du Var (83)</strong> : 
                        <strong> La Valette-du-Var, La Garde, Le Revest-les-Eaux, Ollioules, La Seyne-sur-Mer, Six-Fours-les-Plages, 
                        Sanary-sur-Mer, Bandol</strong>. Pour les urgences plomberie à Toulon et ses environs, 
                        <strong> notre équipe est disponible 24h/24</strong>.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-[#0f4c5c] mb-3">Pourquoi choisir notre service de plomberie à Toulon ?</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Plombiers <strong>certifiés</strong> et <strong>assurés</strong></li>
                                <li>Intervention en <strong>moins de 30 minutes</strong> en urgence</li>
                                <li><strong>Transparence tarifaire</strong> - Pas de surprise</li>
                                <li>Matériel de <strong>haute qualité</strong> garanti</li>
                                <li>Service client disponible <strong>24h/24</strong></li>
                            </ul>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-[#0f4c5c] mb-3">Urgence plomberie à Toulon</h3>
                            <p className="mb-4">
                                En cas d&apos;urgence (fuite importante, inondation, WC bouché), appelez-nous directement :
                            </p>
                            <a 
                                href="tel:+33756935200" 
                                className="inline-flex items-center bg-[#0077B6] text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-[#0e5a5f] transition mb-4"
                            >
                                <span className="mr-2">☎</span> +33 756 93 52 00
                            </a>
                            <p className="text-sm text-gray-600">
                                Service disponible 24h/24, 7j/7, jours fériés inclus
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-10">
                        <Link
                            href="/contact"
                            className="inline-block bg-[#0077B6] text-white font-semibold px-10 py-3 rounded-md shadow hover:bg-[#0e5a5f] transition mx-2"
                        >
                            ☎ Demander un plombier en urgence
                        </Link>
                        <Link
                            href="/services"
                            className="inline-block border border-[#0077B6] text-[#0f4c5c] font-semibold px-10 py-3 rounded-md shadow hover:bg-[#f0f8ff] transition mx-2 mt-4 md:mt-0"
                        >
                            Voir nos services
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}