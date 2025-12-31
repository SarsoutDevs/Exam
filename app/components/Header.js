import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Élément gauche (icône ou slogan) */}
        <div className="flex items-center gap-2 text-gray-700">
          <ShoppingCart size={20} />
          <span className="text-sm font-medium">High Tech & Gadgets</span>
        </div>

        {/* Nom du site */}
        <h1 className="text-3xl font-bold text-center text-gray-900">
          TechStore
        </h1>

        {/* Élément droite (bouton) */}
        <Link
          href="/annonces"
          className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
        >
          Annonces
        </Link>
      </div>
    </header>
  );
}
