import InscriptionForm from "../components/InscriptionForm";

export default function InscriptionPage() {
  return (
    <main className="max-w-lg mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Inscription
      </h1>

      <InscriptionForm />
    </main>
  );
}
