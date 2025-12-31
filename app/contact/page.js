import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-10 text-center">
        Contactez-nous
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Colonne 1 : Formulaire */}
        <ContactForm />

        {/* Colonne 2 : Infos fictives */}
        <div className="bg-gray-100 p-6 rounded-xl space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Nos coordonnées
          </h2>

          <div className="flex items-center gap-3 text-gray-700">
            <MapPin />
            <span>Tunis, Tunisie</span>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <Phone />
            <span>+216 22 333 444</span>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <Mail />
            <span>support@techstore.tn</span>
          </div>

          <p className="text-sm text-gray-600">
            Notre équipe est disponible du lundi au vendredi de 9h à 17h.
          </p>
        </div>
      </div>
    </main>
  );
}
