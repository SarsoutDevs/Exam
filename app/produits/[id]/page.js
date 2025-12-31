import DetailsProduitCard from "@/app/components/DetailsProduitCard";
import produits from "../../data/produits";

export default async function ProduitDetailsPage({ params }) {
  const resolvedParams = await params;
  const produit = produits.find((p) => p.id === Number(resolvedParams.id));

  return (
    <main className="px-6 py-12">
      <DetailsProduitCard produit={produit} />
    </main>
  );
}
