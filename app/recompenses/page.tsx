"use client";

import Link from "next/link";
import { useState } from "react";
import { FaCalendarAlt, FaDownload, FaGlobeAfrica, FaHandshake, FaLeaf, FaLightbulb, FaPlay, FaRocket, FaTrophy } from "react-icons/fa";
import { FaEarthAfrica, FaPeopleGroup } from "react-icons/fa6";

export default function Page() {
    const [prix, setPrix] = useState(16);
    const [annee, setAnnee] = useState(new Date().getFullYear() - 2015);
    const [pays, setPays] = useState(4);
    const [satisfaction, setSatisfaction] = useState(100);

    return (
        <>
            <div>
                <div className="relative h-[calc(100vh-6rem)]">
                    {/* Image */}
                    <div className="w-full h-full overflow-hidden">
                        <img src="/fondation_kya.avif" alt="" className="w-full h-full object-cover transition-all" />
                    </div>
                    {/* Texte */}
                    <div className="absolute top-0 left-0 z-30 w-full h-full bg-[#000a] flex flex-col items-center justify-center">
                        <div className="text-white w-[90%] md:w-[70%] lg:w-1/2 space-y-8">
                            <div className="flex justify-center items-center">
                                <div className="w-max py-4 px-8 flex items-center gap-2 bg-[#ffa60075] rounded-full">
                                    <p className="text-2xl"><FaTrophy /></p>
                                    <p>Excellence reconnue</p>
                                </div>
                            </div>
                            <h1 className="text-4xl md:text-6xl lg:text-8xl text-center font-bold">Nos <span className="bg-linear-to-r from-green-800 to-green-400 bg-clip-text text-transparent">prix</span> et <span className="bg-linear-to-r from-orange-800 to-orange-400 bg-clip-text text-transparent">distinctions</span></h1>
                            <p className="text-lg md:text-xl lg:text-2xl text-center">Que ce soit par la reconnaissance de nos employés, de nos clients ou par les prix internationaux qui nous ont été remis, nous sommes fiers de notre travail et des distinctions par lesquelles nous avons été reconnus.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Grand texte */}
            <div className="py-16 bg-conic from-orange-300 to-orange-300">
                <p className="text-center text:2xl md:text-4xl lg:text-6xl bg-linear-to-b from-green-600 to-green-700 bg-clip-text text-transparent">NOS PRIX ET DISTINCTIONS</p>
            </div>


            {/* Nos prix et distinctions */}
            <div className="container mx-auto px-4 my-32">
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {
                        [
                            ["/ecreee.png", "2024", "Prix de l'installation des mini-centrales les plus propres de l'année 2024", "KYA-Energy GROUP grâce à ses installations reçoit le prix des mini-centrales les plus propres de l'année 2024", "Innovation Environnementale"],
                            ["/foire.png", "2024", "Prix de l'idée lumineuse", "KYA-Energy GROUP a reçu le prix de l'idée lumineuse pour ses innovations dans le domaine de l'énergie solaire lors de la foire Togo 2000", "Innovation Technologique"],
                            ["/hitech.png", "2023", "Prix du meilleur partenaire avec HITECH", "KYA-Energy GROUP a reçu ce prix en 2023 des mains de HITECH pour sa bonne collaboration", "Partenariat Excellence"],
                            ["/entrepreneur.png", "2024", "Prix du Global entrepreneur awards", "Le professeur Yao AZOUMAH a été nominé au global entrepreneur awards", "Entrepreneuriat Global"],
                            ["/batisseurs.png", "2023", "Prix des bâtisseurs de l'économie africaine", "Pour sa capacité entrepreneuriale et sa contribution au KYA-Energy Group à faire partie des bâtisseurs de l'économie du Togo et de africaine en 2023", "Impact Économique"],
                            ["/kerekou.png", "2023", "Grand Prix Général Mathieu Kérékou", "Le DG de KYA-Energy Group, a reçu de la part de l’ONG ETOILE D’AFRIK le Grand Prix Général Mathieu KÉRÉKOU de Meilleur Acteur de développement eu égard à son amour du travail bien fait et à ses actions qui concourent au développement", "Leadership Développement"],
                            ["/innovation.png", "2022", "Prix de la valorisation de la recherche et de l'innovation TOGO TOP IMPACT", "KYA-Energy GROUP a été nominé à TOGO TOP IMPACT 2022", "Recherche & Innovation"],
                            ["/padev.png", "2022", "Prix PADEV", "Trophée du Prix Africain du Mérite et de l'Excellence dans le domaine des énergies renouvelables", "Excellence Africaine"],
                            ["/palme.png", "2021", "Palme internationale de l'innovation énergétique", "Lauréat de 100 Entreprises les plus Dynamiques du TOGO: Palme Internationale de l'innovation énergétique", "Innovation Internationale"],
                            ["/transition.png", "2020", "Prix de la transition énergétique au Togo", "KYA-Energy Group nominé Emerging Leader 2020", "Transition Énergétique"],
                            ["/start-up.png", "2018", "Prix BOAD du concours \"StartUp\"", "KYA-Energy GROUP lauréat du concours \"StartUp\" BOAD 2018", "Startup Excellence"],
                            ["/usaid.png", "2023", "Lauréat de l'USAID pour l'électrification solaire des centres de santé", "KYA-Energy Group, la seule entreprise francophone parmi les 9 pays lauréats de l'USAID pour l'électrification solaire des centres de santé", "Impact Social Santé"]
                        ].map((value, index) => (
                            <div key={index} className="relative flex flex-col bg-white shadow rounded-b-xl hover:shadow-xl hover:border-2 border-green-400">
                                <div className="bg-gray-50 p-4">
                                    <img src={value[0]} alt="" height={300} className="object-contain" />
                                </div>
                                <div className="p-4 h-full space-y-4">
                                    <div className="grid grid-cols-[1fr_auto] gap-2 h-max">
                                        <p className="text-bold text-xl">{value[2]}</p>
                                        <p className="w-max h-max font-bold px-2 text-sm py-1 bg-orange-400 rounded-full">{value[1]}</p>
                                    </div>
                                    <div className="">
                                        <p className="text-gray-500 text-sm text-wrap">{value[3]}</p>
                                    </div>
                                </div>
                                <div className="absolute -top-4 left-0">
                                    <p className="w-max h-max bg-green-300 rounded-full px-4 py-2 text-[12px] font-bold">{value[4]}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* Notre impact */}
            <div className="bg-gradient-to-tr from-orange-200 to-green-200 py-32" id="equipe">
                <div className="container mx-auto px-4">
                    <div className="px-4 lg:px-48">
                        <div className="flex items-center justify-center my-4">
                            <p className="w-max rounded-full px-4 py-2 bg-green-700 text-white font-bold text-sm">Notre impact</p>
                        </div>
                        <h1 className="text-center text-4xl font-bold w-full">Des chiffres qui parlent</h1>
                        <div className="flex justify-center items-center my-4">
                            <div className="h-1 w-32 bg-green-300"></div>
                        </div>
                        <p className="text-center text-xl">Nos récompenses témoignent de notre engagement constant vers l'excellence et l'innovation.</p>
                    </div>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-8 rounded-xl shadow hover:shadow-xl hover:bg-blue-50 bg-red-50 grid grid-cols-1 gap-4">
                            <div className="flex items-center justify-center">
                                <p className="text-2xl text-center w-max bg-green-600 p-4 rounded-full text-white"><FaTrophy /></p>
                            </div>
                            <div>
                                <p className="text-center text-6xl font-bold text-green-600">{prix}</p>
                            </div>
                            <div>
                                <p className="text-center text-2xl font-bold">Prix et distinctions</p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-center">Reconnaissances nationales et internationales</p>
                            </div>
                        </div>
                        <div className="p-8 rounded-xl shadow hover:shadow-xl hover:bg-blue-50 bg-red-50 grid grid-cols-1 gap-4">
                            <div className="flex items-center justify-center">
                                <p className="text-2xl text-center w-max bg-green-600 p-4 rounded-full text-white"><FaCalendarAlt /></p>
                            </div>
                            <div>
                                <p className="text-center text-6xl font-bold text-green-600">{annee}</p>
                            </div>
                            <div>
                                <p className="text-center text-2xl font-bold">Années d'Excellence</p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-center">Depuis 2015, une croissance constante</p>
                            </div>
                        </div>
                        <div className="p-8 rounded-xl shadow hover:shadow-xl hover:bg-blue-50 bg-red-50 grid grid-cols-1 gap-4">
                            <div className="flex items-center justify-center">
                                <p className="text-2xl text-center w-max bg-green-600 p-4 rounded-full text-white"><FaEarthAfrica /></p>
                            </div>
                            <div>
                                <p className="text-center text-6xl font-bold text-green-600">{pays}</p>
                            </div>
                            <div>
                                <p className="text-center text-2xl font-bold">Pays Reconnaissants</p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-center">Impact régional en Afrique de l'Ouest</p>
                            </div>
                        </div>
                        <div className="p-8 rounded-xl shadow hover:shadow-xl hover:bg-blue-50 bg-red-50 grid grid-cols-1 gap-4">
                            <div className="flex items-center justify-center">
                                <p className="text-2xl text-center w-max bg-green-600 p-4 rounded-full text-white"><FaPeopleGroup /></p>
                            </div>
                            <div>
                                <p className="text-center text-6xl font-bold text-green-600">{satisfaction}</p>
                            </div>
                            <div>
                                <p className="text-center text-2xl font-bold">% Satisfaction</p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-center">Clients et partenaires satisfaits</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Nos valeurs */}
            <div className="container mx-auto px-4 my-32">
                <div className="px-4 lg:px-48">
                    <div className="flex items-center justify-center my-4">
                        <p className="w-max rounded-full px-4 py-2 bg-green-700 text-white font-bold text-sm">Domaines d'Excellence</p>
                    </div>
                    <h1 className="text-center text-4xl font-bold w-full">Nos Catégories de Récompenses</h1>
                    <div className="flex justify-center items-center my-4">
                        <div className="h-1 w-32 bg-green-300"></div>
                    </div>
                    <p className="text-center text-xl">Nos prix couvrent tous les aspects de notre activité, de l'innovation technologique à l'impact social. </p>
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {
                        [
                            { 0: <FaLightbulb key={0} />, 1: "Innovation Technologique", 2: "4", 3: ["Prix de l'idée lumineuse 2024", "Palme internationale innovation 2022", "Prix valorisation recherche 2022", "Prix transition énergétique 2020"] },
                            { 0: <FaLeaf key={1} />, 1: "Impact Environnemental", 2: "3", 3: ["Mini-centrales propres 2024", "Prix PADEV Excellence 2022", "Électrification solaire USAID 2019"] },
                            { 0: <FaHandshake key={2} />, 1: "Partenariats & Collaboration", 2: "2", 3: ["Meilleur partenaire HITECH 2024", "Prix BOAD StartUp 2019"] },
                            { 0: <FaGlobeAfrica key={3} />, 1: "Leadership Africain", 2: "3", 3: ["Global entrepreneur awards 2024", "Bâtisseurs économie africaine 2023", "Grand Prix Mathieu Kérékou 2023"] }
                        ].map((value, index) => (
                            <div key={index} className="group bg-white rounded-xl overflow-hidden shadow hover:shadow-xl">
                                <div className="w-full flex justify-center items-center">
                                    <div className="h-1 bg-green-700 w-0 group-hover:w-full"></div>
                                </div>
                                <div className="space-y-8 p-8">
                                    <div>
                                        <p className="text-2xl p-4 rounded-full bg-green-700 w-max text-white">{value[0]}</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-2xl">{value[1]}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm px-4 py-2 rounded-full bg-orange-200 w-max text-orange-700 font-bold">{value[2]} Prix</p>
                                    </div>
                                    <div>
                                        <ul className="list-disc text-green-700 px-4 space-y-4">
                                            {
                                                value[3].map((_value, _index) => (
                                                    <li key={_index}>
                                                        <span className="text-gray-700">{_value}</span>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>


            <div className="bg-gradient-to-bl from-zinc-900 to-zinc-700 py-32 text-gray-100">
                {/* Notre impact */}
                <div className="container mx-auto px-4">
                    <div className="px-4 lg:px-48">
                        <div className="my-8 flex items-center justify-center">
                            <p className="text-2xl p-8 rounded-full bg-green-700"><FaRocket /></p>
                        </div>
                        <h1 className="text-center text-4xl font-bold w-full">Rejoignez l'Excellence</h1>
                        <div className="flex justify-center items-center my-8">
                            <div className="h-1 text-center text-xl">Découvrez comment nos solutions primées peuvent transformer vos projets énergétiques et contribuer à un avenir plus durable.</div>
                        </div>
                        <div className="py-16">
                            <div className="flex items-center justify-center gap-8 my-8">
                                <Link href="#equipe">
                                    <div className="w-max px-8 py-4 gap-2 flex items-center justify-center rounded-xl bg-orange-400 hover:bg-orange-500 transition-colors duration-300 font-bold hover:-translate-y-1">
                                        <p className="text-2xl"><FaPlay /></p>
                                        <p>Démarrer un projet</p>
                                    </div>
                                </Link>
                                <Link href="">
                                    <div className="w-max px-8 py-4 gap-2 flex items-center justify-center rounded-xl bg-transparent transition-colors duration-300 font-bold border-2 border-white text-white hover:bg-white hover:text-gray-900 hover:-translate-y-1">
                                        <p className="text-2xl"><FaDownload /></p>
                                        <p>Télécharger notre portfolio</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}