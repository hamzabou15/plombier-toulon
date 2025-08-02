// components/a-propos/introduction.tsx
import React from 'react'
import Link from 'next/link'

const Introduction = () => {
    return (
        <section className="py-16 bg-[#f7f9fa] px-4 md:px-6 my-16">
            <div className="max-w-7xl mx-auto space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0077B6]">
                    Notre Engagement à Toulon et dans le Var
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Mission</h3>
                        <p className="text-lg leading-relaxed text-gray-700">
                            Fournir un service de plomberie d&apos;urgence rapide, fiable et à prix transparent aux habitants de Toulon. 
                            Notre priorité : votre satisfaction et la préservation de votre patrimoine.
                        </p>
                    </div>
                    
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Valeurs</h3>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                                <span className="text-[#0077B6] font-bold mr-2">•</span>
                                <span><strong>Rapidité</strong> : Intervention en moins de 30 minutes</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#0077B6] font-bold mr-2">•</span>
                                <span><strong>Expertise</strong> : Plombiers certifiés avec 10+ ans d&apos;expérience</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#0077B6] font-bold mr-2">•</span>
                                <span><strong>Transparence</strong> : Devis détaillé avant toute intervention</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#0077B6] font-bold mr-2">•</span>
                                <span><strong>Écologie</strong> : Solutions économes en eau et énergie</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0077B6]">
                        Zones d&apos;Intervention : Toulon et le Var
                    </h2>
                    <p className="text-lg leading-relaxed mt-4 text-gray-700">
                        Nous intervenons dans tout le <strong>département du Var (83)</strong> : 
                        Toulon, La Valette-du-Var, La Garde, Le Revest-les-Eaux, Ollioules, La Seyne-sur-Mer, 
                        Six-Fours-les-Plages, Sanary-sur-Mer, Bandol, et toutes les communes environnantes.
                    </p>
                    
                    <div className="mt-8 flex flex-wrap gap-2">
                        {["Toulon Centre", "Le Mourillon", "Pont-du-Las", "Saint-Jean du Var", "Le Pont Neuf", "La Rode", "La Valette-du-Var", "La Garde", "Le Revest-les-Eaux"].map((zone, index) => (
                            <span key={index} className="bg-white border border-[#0077B6] text-[#0077B6] px-3 py-1 rounded-full text-sm">
                                {zone}
                            </span>
                        ))}
                    </div>
                    
                  
                </div>
            </div>
        </section>
    )
}

export default Introduction