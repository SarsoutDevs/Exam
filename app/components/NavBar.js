"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Accueil", path: "/" },
    { name: "Produits", path: "/produits" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.jpg"
            alt="TechStore Logo"
            width={70}
            height={70}
          />
          <span className="text-xl font-bold text-gray-900">TechStore</span>
        </Link>

        {/* Menu desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className="relative text-gray-700 font-medium 
                after:absolute after:-bottom-1 after:left-0 after:w-0 
                after:h-0.5 after:bg-blue-600 
                hover:text-blue-600 
                after:transition-all after:duration-300 
                hover:after:w-full"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Bouton Inscription desktop */}
        <Link
          href="/inscription"
          className="hidden md:inline-block px-5 py-2 rounded-xl bg-blue-600 text-white 
          font-semibold hover:bg-blue-700 transition duration-300"
        >
          Inscription
        </Link>

        {/* Hamburger mobile */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-4 px-6 py-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="text-gray-700 font-medium hover:text-blue-600 transition"
                  onClick={() => setIsOpen(false)} // fermer menu au clic
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/inscription"
                className="block w-full text-center px-5 py-2 rounded-xl bg-blue-600 text-white 
                font-semibold hover:bg-blue-700 transition"
                onClick={() => setIsOpen(false)}
              >
                Inscription
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
