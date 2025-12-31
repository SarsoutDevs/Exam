import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        {/* Bannière */}
        <section className="relative w-full h-[70vh] flex items-center justify-center">
          {/* Image de fond */}
          <Image
            src="/images/banner-tech.avif"
            alt="Univers High-Tech"
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Contenu */}
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bienvenue sur TechStore
            </h1>
            <p className="max-w-xl mx-auto mb-8 text-lg">
              Découvrez les dernières innovations high-tech et gadgets modernes
            </p>

            {/* Boutons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/produits"
                className="px-6 py-3 rounded-xl bg-blue-600 
              hover:bg-blue-700 transition text-white font-semibold"
              >
                Produits
              </Link>

              <Link
                href="/inscription"
                className="px-6 py-3 rounded-xl bg-white text-gray-900 
              hover:bg-gray-200 transition font-semibold"
              >
                S’inscrire
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
