import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "TechStore – High-Tech & Innovation",
  description:
    "Découvrez les meilleurs produits technologiques au meilleur prix",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <Header />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
