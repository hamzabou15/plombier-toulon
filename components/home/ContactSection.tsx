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
                setStatus("Votre demande a bien été envoyée.")
                form.reset()
            } else {
                setStatus("Une erreur est survenue. Veuillez réessayer.")
            }
        } catch (error) {
            console.error(error)
            setStatus("Une erreur est survenue. Veuillez réessayer.")
        }
    }

    return (

        <section
            className="bg-white py-20 px-4 relative bg-top"
            aria-label="Contact Urgence Plombier Cannes"
            style={{ backgroundImage: "url('/images/plombier-sur-cannes-expert.webp')" }}
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-0 rounded-xl overflow-hidden shadow-lg">
                <div className="hidden md:block"></div>
                <div className="bg-white p-10 flex flex-col justify-center">
                    <h3 className="uppercase text-sm tracking-widest text-gray-500 font-medium mb-2">
                        Urgence Plomberie Cannes
                    </h3>
                    <h2 className="text-4xl font-extrabold max-md:text-3xl text-[#0f4c5c] mb-4 leading-tight">
                        Plombier Disponible 24h/24 <br />
                        <span className="text-[#3a5a40]">☎ +33 7 56 93 52 00</span>
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Fuite d&apos;eau? WC bouché? Panne de chauffe-eau? Notre équipe intervient en <strong>moins de 30 minutes</strong> sur Cannes et environs.
                        <strong> Devis gratuit</strong> et <strong>travail garanti</strong>.
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                        <input type="hidden" name="_subject" value="Urgence Plombier Cannes - Nouvelle demande" />

                        <input type="text" name="Prénom" placeholder="Prénom" required className="border-b border-gray-300 focus:outline-none focus:border-[#3a5a40] py-2" />
                        <input type="text" name="Nom" placeholder="Nom" required className="border-b border-gray-300 focus:outline-none focus:border-[#3a5a40] py-2" />
                        <input type="email" name="Email" placeholder="Email" required className="border-b border-gray-300 focus:outline-none focus:border-[#3a5a40] py-2 col-span-2" />
                        <input type="tel" name="Téléphone" placeholder="Numéro de téléphone" required className="border-b border-gray-300 focus:outline-none focus:border-[#3a5a40] py-2 col-span-2" />

                        <select name="Besoin" required className="border-b border-gray-300 focus:outline-none focus:border-[#3a5a40] py-2 col-span-2">
                            <option value="">Type d&apos;urgence</option>
                            <option value="Fuite d'eau">Fuite d&apos;eau</option>
                            <option value="Canalisation bouchée">Canalisation bouchée</option>
                            <option value="Panne chauffe-eau">Panne chauffe-eau</option>
                            <option value="Robinetterie défectueuse">Robinetterie défectueuse</option>
                            <option value="Autre urgence">Autre urgence</option>
                        </select>

                        <button
                            type="submit"
                            className="mt-4 mx-auto w-fit px-6 py-3 bg-[#3a5a40] text-white font-semibold rounded hover:bg-[#0e5a61] transition col-span-2"
                        >
                            Demander un plombier en urgence
                        </button>

                        {status && (
                            <p className="text-sm col-span-2 mt-2 text-green-600">{status}</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
