import React from 'react'
import { Button } from '../ui/button'
import { MdLocalPhone } from 'react-icons/md'
import { IoNewspaperOutline } from 'react-icons/io5'
import Link from 'next/link'

const CTA = () => {
    return (
        <div className="fixed bottom-16 right-4 flex flex-col items-end z-50">
            {/* Bouton téléphone */}
            <Button
                asChild
                variant="submit"
                size="xlg"
                className="group flex items-center overflow-hidden hover:gap-2 shadow-lg animate-pulse"
            >
                <a
                    href="tel:+33756935200"
                    aria-label="Appeler un plombier en urgence à Toulon"
                >
                    <MdLocalPhone className="text-white text-xl" />
                    <span className="transition-all duration-300 opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-[200px] ml-2">
                        Urgence Plombier
                    </span>
                </a>
            </Button>

            {/* Bouton devis */}
            <Link href="/contact" className="mt-3">
                <Button
                    variant="send"
                    size="xlg"
                    className="group flex items-center overflow-hidden shadow-lg hover:gap-2"
                >
                    <IoNewspaperOutline className="text-xl" />
                    <span className="transition-all duration-300 opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-[200px] ml-2">
                        Devis Gratuit
                    </span>
                </Button>
            </Link>
        </div>
    )
}

export default CTA