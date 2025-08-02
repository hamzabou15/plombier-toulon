import Link from "next/link";

export default function NotFound() {


    return (
        <main className="h-screen flex flex-col justify-center items-center text-[#1b1e3f] p-6 text-center font-sans">
            <h1 className="text-[5rem] mb-2 font-bold">404</h1>
            <h2 className="text-2xl mb-4">Oups ! Page non trouvée</h2>
            <p className="text-lg max-w-md">
                La page que vous recherchez n’existe pas ou a été déplacée.
            </p>
            <Link
                href="/"
                className="mt-8 px-6 py-3 bg-[#0077B6] text-[white] rounded-md font-semibold transition-colors hover:bg-[#162036]"
            >
                Retour à l&apos;accueil
            </Link>
        </main>
    );
}