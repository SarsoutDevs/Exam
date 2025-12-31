import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-sm">TechStore © 2025</p>

        {/* Contact */}
        <Link
          href="/contact"
          className="text-sm hover:text-blue-400 transition"
        >
          Contactez-nous
        </Link>

        {/* Réseaux sociaux */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hover:text-blue-500 transition"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>

          <a
            href="#"
            className="hover:text-pink-500 transition"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>

          <a
            href="#"
            className="hover:text-sky-400 transition"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>

          <a
            href="#"
            className="hover:text-blue-600 transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
