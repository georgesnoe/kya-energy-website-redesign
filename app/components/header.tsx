"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

export default function Header() {
    const pathname = usePathname();
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="bg-white shadow">
            <div className="container mx-auto px-4 h-24 flex items-center justify-between gap-6 relative">
                <div className="flex items-center justify-center w-max">
                    <img src="/logo.avif" className="w-16 h-16 object-cover" />
                    {/* Faire ressembler le texte aux couleurs du logo */}
                    <p className="font-bold text-sm text-green-700 text-right w-max">Kya-Energy<br /><span className="text-orange-400">GROUP</span></p>
                </div>

                {/* Liens utiles */}
                <div className={`${showMenu == true ? "" : "hidden"} bg-white p-4 rounded absolute top-20 right-0 xl:static xl:block z-50`}>
                    <nav>
                        <ul className="flex items-start xl:items-center gap-4 flex-col xl:flex-row">
                            {
                                [
                                    ["Acceuil", "/"],
                                    ["Produits & Services", "/produits-et-services"],
                                    ["Notre équipe", "/notre-equipe"],
                                    ["Récompenses", "/recompenses"],
                                    ["Certifications", "/certifications"],
                                    // ["Actualités", "/actualites"],
                                    ["Fondation KYA", "/fondation-kya"]
                                ].map((value, index) => (
                                    <li key={index} className="w-max">
                                        <Link href={value[1]} id={value[1].slice(1)}
                                            className={`${pathname == value[1] ? "text-green-600" : ""} hover:text-green-500`}>
                                            {value[0]}
                                        </Link>
                                    </li>
                                ))
                            }
                            <li className="w-max xl:hidden">
                                <a href="/politique_qualité_kya.pdf"
                                    className="hover:text-green-500">
                                    Politique qualité
                                </a>
                            </li>
                            <li className="w-max xl:hidden">
                                <Link href="/#contact"
                                    className="hover:text-green-500">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Boutons utiles */}
                <div className="flex items-center gap-4">
                    <a href="/politique-qualite" className="hidden xl:inline text-sm border-2 rounded w-max p-2 border-gray-400 font-bold hover:bg-gray-400 hover:text-white transition-colors duration-300">Politique Qualité</a>
                    <a href="#contact" className="hidden xl:inline scroll-smooth text-sm border rounded w-max p-2 border-green-500 bg-green-500 hover:bg-green-700 hover:border-green-700 text-white font-bold transition-colors duration-300">Contact</a>
                    {/* Bouton hamburger */}
                    <div className="xl:hidden flex items-center">
                        <button onClick={() => { setShowMenu(!showMenu); document.getElementById(pathname.slice(1))?.focus() }}>
                            {showMenu == true ? (<LuX size={48} />) : (<LuMenu size={48} />)}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}