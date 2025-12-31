import Image from "next/image";
import Link from "next/link";

export default function ProduitCard({ produit }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4">
      <Image
        src={produit.image}
        alt={produit.nom}
        width={300}
        height={200}
        className="rounded-lg object-contain w-full h-48"
      />

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900">{produit.nom}</h3>

        <b className="text-sm text-gray-500">{produit.categorie}</b>
        <p className="text-sm text-gray-500">{produit.description}</p>

        <p className="text-blue-600 font-bold mt-2">{produit.prix} TND</p>
      </div>
      {/* Bouton Détails */}
      <Link
        href={`/produits/${produit.id}`}
        className="mt-4 block w-full mx-auto bg-blue-600 text-center bg text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition"
      >
        Détails
      </Link>
    </div>
  );
}
