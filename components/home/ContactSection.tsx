"use client"
import React, { useState } from 'react'

const ContactSection = () => {
    const [status, setStatus] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        const form = e.currentTarget
        const formData = new FormData(form)

        try {
            const response = await fetch("https://formspree.io/f/xyzppnpj", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            })

            if (response.ok) {
                setStatus("Votre demande a bien été envoyée. Nous vous contactons sous 10 minutes.")
                form.reset()
            } else {
                setStatus("Une erreur est survenue. Veuillez réessayer ou nous appeler au +33 7 56 93 52 00")
            }
        } catch (error) {
            setStatus("Une erreur est survenue. Veuillez nous appeler directement au +33 7 56 93 52 00")
        }
    }

    return (
        <section className="bg-[#f0f8ff] py-20 px-4 relative">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16">
                <div>
                    <h3 className="uppercase text-sm tracking-widest text-[#0077B6] font-medium mb-2">
                        Contactez notre équipe
                    </h3>
                    <h2 className="text-4xl font-extrabold max-md:text-3xl text-[#0f4c5c] mb-4 leading-tight">
                        Plombier Disponible 24h/24 <br />
                        <span className="text-[#0077B6]">☎ +33 7 56 93 52 00</span>
                    </h2>
                    <p className="text-gray-700 mb-6">
                        En cas d&apos;urgence (fuite d&apos;eau, WC bouché, panne chauffe-eau), notre équipe intervient en <strong>moins de 30 minutes</strong> sur Toulon et environs.
                    </p>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                        <h3 className="font-bold text-lg text-[#0f4c5c] mb-3">Horaires d&apos;intervention :</h3>
                        <ul className="space-y-2">
                            <li className="flex justify-between">
                                <span>Lundi - Vendredi</span>
                                <span>24h/24</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Samedi - Dimanche</span>
                                <span>24h/24</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Jours fériés</span>
                                <span>24h/24</span>
                            </li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="font-bold text-lg text-[#0f4c5c] mb-3">Pour les urgences :</h3>
                        <a 
                            href="tel:+33756935200" 
                            className="inline-flex items-center bg-[#0077B6] text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-[#0e5a5f] transition"
                        >
                            <span className="mr-2">☎</span> Appel direct 24h/24
                        </a>
                    </div>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input type="hidden" name="_subject" value="Urgence Plombier Toulon - Nouvelle demande" />
                        
                        <div>
                            <label className="block text-gray-700 mb-1">Nom complet *</label>
                            <input 
                                type="text" 
                                name="Nom" 
                                placeholder="Votre nom" 
                                required 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077B6]"
                            />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 mb-1">Téléphone *</label>
                                <input 
                                    type="tel" 
                                    name="Téléphone" 
                                    placeholder="Votre numéro" 
                                    required 
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077B6]"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-1">Email</label>
                                <input 
                                    type="email" 
                                    name="Email" 
                                    placeholder="Votre email" 
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077B6]"
                                />
                            </div>
                        </div>
                        
                        <div>
                            <label className="block text-gray-700 mb-1">Adresse (Toulon et environs) *</label>
                            <input 
                                type="text" 
                                name="Adresse" 
                                placeholder="Votre adresse à Toulon" 
                                required 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077B6]"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-gray-700 mb-1">Type d&apos;urgence *</label>
                            <select 
                                name="Besoin" 
                                required 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077B6]"
                            >
                                <option value="">Sélectionnez une urgence</option>
                                <option value="Fuite d'eau">Fuite d&apos;eau</option>
                                <option value="Canalisation bouchée">Canalisation bouchée</option>
                                <option value="Panne chauffe-eau">Panne chauffe-eau</option>
                                <option value="Robinetterie défectueuse">Robinetterie défectueuse</option>
                                <option value="Problème chauffage">Problème chauffage</option>
                                <option value="Autre urgence">Autre urgence</option>
                            </select>
                        </div>
                        
                        <div>
                            <label className="block text-gray-700 mb-1">Description de l&apos;urgence *</label>
                            <textarea 
                                name="Message" 
                                placeholder="Décrivez votre problème..." 
                                required 
                                rows={3}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077B6]"
                            ></textarea>
                        </div>
                        
                        <button
                            type="submit"
                            className="w-full mt-2 px-6 py-3 bg-[#0077B6] text-white font-semibold rounded-md hover:bg-[#005f87] transition"
                        >
                            Envoyer ma demande d&apos;urgence
                        </button>
                        
                        {status && (
                            <p className={`text-sm mt-3 ${status.includes("bien") ? "text-green-600" : "text-red-600"}`}>
                                {status}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactSection