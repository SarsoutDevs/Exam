"use client";

import Image from "next/image";

export default function DetailsProduitCard({ produit }) {
  if (!produit) {
    return <p className="text-center text-red-500">Produit introuvable</p>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Image */}
      <Image
        src={produit.image}
        alt={produit.nom}
        width={500}
        height={400}
        className="rounded-lg object-cover w-full"
      />

      {/* Infos */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">{produit.nom}</h1>

        <p className="text-gray-600">
          Catégorie : <span className="font-medium">{produit.categorie}</span>
        </p>

        <p className="text-2xl font-semibold text-blue-600">
          {produit.prix} TND
        </p>

        <p className="text-gray-700">{produit.description}</p>

        <button
          onClick={() => {
            alert("Commande confirmée");
          }}
          className="mt-6 px-6 py-3 bg-green-600 text-white rounded-xl 
          hover:bg-green-700 transition font-semibold"
        >
          Acheter
        </button>
      </div>
    </div>
  );
}
