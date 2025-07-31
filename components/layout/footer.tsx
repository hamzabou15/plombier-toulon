import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#161A1A] text-white pt-16 pb-8 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo et description */}
                <div>
                    <div className="mb-4">
                        <Image
                            src="/images/logo-plombier-cannes-expert.svg"
                            alt="Plombier Cannes Expert - Logo"
                            width={160}
                            height={40}
                            className="filter-contrast-125"
                        />
                    </div>
                    <p className="text-gray-300 text-sm mb-4">
                        Plombier professionnel à Cannes pour dépannages urgents 24h/24, 
                        débouchage canalisation, réparation fuite d&apos;eau et rénovation salle de bains.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" aria-label="Page Facebook Plombier Cannes Expert" className="text-gray-300 hover:text-[#3a5a40]">
                            <Facebook size={20} />
                        </a>
                        <a href="#" aria-label="Page Instagram Plombier Cannes" className="text-gray-300 hover:text-[#3a5a40]">
                            <Instagram size={20} />
                        </a>
                    </div>
                </div>

                {/* Liens rapides */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>
                            <Link href="/" className="hover:text-[#3a5a40] transition">Accueil</Link>
                        </li>
                        <li>
                            <Link href="/services" className="hover:text-[#3a5a40] transition">Services Plomberie</Link>
                        </li>
                        <li>
                            <Link href="/a-propos" className="hover:text-[#3a5a40] transition">À Propos de Nous</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-[#3a5a40] transition">Contact Urgence</Link>
                        </li>
                        <li>
                            <Link href="/mentions-legales" className="hover:text-[#3a5a40] transition">Mentions Légales</Link>
                        </li>
                    </ul>
                </div>

                {/* Services populaires */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Services Populaires</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>
                            <Link href="/services/depannage-plomberie-urgence-cannes" className="hover:text-[#3a5a40] transition">
                                Dépannage Plomberie Urgence
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/debouchage-canalisation-cannes" className="hover:text-[#3a5a40] transition">
                                Débouchage Canalisation Cannes
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/reparation-fuite-eau-cannes" className="hover:text-[#3a5a40] transition">
                                Réparation Fuite d&apos;Eau
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/installation-chauffe-eau-cannes" className="hover:text-[#3a5a40] transition">
                                Installation Chauffe-Eau
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact et localisation */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Nous Contacter</h3>
                    <div className="space-y-3 text-sm text-gray-300">
                        <div className="flex items-start">
                            <MapPin className="flex-shrink-0 h-5 w-5 mt-0.5 text-[#3a5a40] mr-2" />
                            <p>
                                15 Rue de France, Bureau 302<br />
                                06400 Cannes, France
                            </p>
                        </div>
                        <div className="flex items-center">
                            <Phone className="h-5 w-5 text-[#3a5a40] mr-2" />
                            <a href="tel:+33612345678" className="hover:text-[#3a5a40] font-medium">
                                +33 7 56 93 52 00
                            </a>
                        </div>
                        <div className="flex items-center">
                            <Mail className="h-5 w-5 text-[#3a5a40] mr-2" />
                            <a href="mailto:contact@plombiercannes-expert.fr" className="hover:text-[#3a5a40]">
                                contact@plombiercannes-expert.fr
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-gray-400 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
                <p>&copy; {new Date().getFullYear()} Plombier Cannes Expert. Tous droits réservés.</p>
                <div className="flex space-x-4 mt-2 md:mt-0">
                    <Link href="/politique-confidentialite" className="hover:text-white">Confidentialité</Link>
                    <Link href="/conditions-generales" className="hover:text-white">CGU</Link>
                    <Link href="/plan-du-site" className="hover:text-white">Plan du site</Link>
                </div>
            </div>
        </footer>
    );
}