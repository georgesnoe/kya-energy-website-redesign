"use client";

import Link from "next/link";
import { useState } from "react";
import { FaGlobeAfrica, FaLeaf, FaSolarPanel } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { LuAward, LuCrown, LuGlobe, LuGroup, LuLeaf, LuLightbulb, LuRocket, LuScale, LuSchool, LuShield, LuTabletSmartphone, LuTrophy } from "react-icons/lu";
import { RiArrowLeftLine, RiArrowRightLine, RiOrganizationChart, RiShakeHandsLine } from "react-icons/ri";

export default function Page() {
    const imageUrls = [
        "/groupe1.png",
        "/groupe2.png",
        "/groupe3.png"
    ];
    const [index, setIndex] = useState(0);
    const [image, setImage] = useState(imageUrls[index]);

    function getTimeout() {
        return setTimeout(() => {
            if (index >= 2) {
                setIndex(0);
            } else {
                setIndex(index + 1);
            }
            setImage(imageUrls[index]);
        }, 5000);
    }

    let timeout = getTimeout();

    return (
        <>
            <div>
                {/* Carousel */}
                <div className="relative h-[calc(100vh-6rem)]">
                    {/* Image */}
                    <div className="w-full h-full overflow-hidden">
                        <img src={image} alt="" className="w-full h-full object-cover transition-all" />
                    </div>
                    {/* Texte */}
                    <div className="absolute top-0 left-0 z-30 w-full h-full bg-gradient-to-r from-[#05df72a0] to-[#fffa] flex flex-col items-center justify-center">
                        <div className="text-white w-[90%] md:w-[70%] lg:w-1/2 space-y-8">
                            <h1 className="text-2xl md:text-4xl lg:text-6xl">Notre Équipe<br />d&apos;Excellence</h1>
                            <p className="text-lg md:text-xl lg:text-2xl">Découvrez les experts qui façonnent l&apos;avenir énergétique de l&apos;Afrique avec passion, innovation et professionnalisme.</p>
                        </div>
                        <div className="flex justify-between items-center w-[90%] md:w-[70%] lg:w-1/2 mt-4 md:mt-16 lg:mt-32">
                            {/* Indicateurs */}
                            <div className="flex items-center justify-center w-max gap-4 *:transition-all *:duration-300">
                                <div className={`w-4 h-4 ${index == 0 ? "bg-white scale-150" : "bg-green-300"} rounded-full`}></div>
                                <div className={`w-4 h-4 ${index == 1 ? "bg-white scale-150" : "bg-green-300"} rounded-full`}></div>
                                <div className={`w-4 h-4 ${index == 2 ? "bg-white scale-150" : "bg-green-300"} rounded-full`}></div>
                            </div>
                            {/* Boutons */}
                            <div className="text-4xl text-green-700 *:p-4 *:bg-[#7bf1a8a0] *:hover:bg-green-300 *:rounded-full flex items-center justify-center w-max gap-4">
                                <button onClick={() => {
                                    clearTimeout(timeout);
                                    if (index <= 0) {
                                        setIndex(2);
                                    } else {
                                        setIndex(index - 1);
                                    }
                                    setImage(imageUrls[index]);
                                    timeout = getTimeout();
                                }}><RiArrowLeftLine /></button>
                                <button onClick={() => {
                                    clearTimeout(timeout);
                                    if (index >= 2) {
                                        setIndex(0);
                                    } else {
                                        setIndex(index + 1);
                                    }
                                    setImage(imageUrls[index]);
                                    timeout = getTimeout();
                                }}><RiArrowRightLine /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Notre vision */}
            <div className="container mx-auto px-4 my-32">
                <div className="px-4 lg:px-48">
                    <div className="flex items-center justify-center my-4">
                        <p className="w-max rounded-full px-4 py-2 bg-green-700 text-white font-bold text-sm">Notre vision</p>
                    </div>
                    <h1 className="text-center text-4xl font-bold w-full">Transformer l&apos;Afrique par l&apos;Énergie Solaire</h1>
                    <div className="flex justify-center items-center my-4">
                        <div className="h-1 w-32 bg-green-300"></div>
                    </div>
                    <p className="text-center text-xl">KYA-Energy Group s&apos;engage dans la révolution énergétique africaine avec une ambition claire : devenir un leader incontournable des énergies renouvelables sur le continent.</p>
                </div>
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {
                        [
                            [<LuGlobe key={0} />, "Leadership Continental", "Ambition de figurer parmi les 10 leaders de l'industrie énergétique en Afrique"],
                            [<LuTabletSmartphone key={1} />, "Innovation Technologique", "Développement de solutions solaires de pointe adaptées au contexte africain"],
                            [<LuTrophy key={2} />, "Impact Durable", "Extension de notre influence pour un avenir énergétique durable en Afrique"]
                        ].map((value, index) => (
                            <div key={index} className="grid grid-rows-3 flex-col gap-1 p-8 bg-white rounded-xl shadow hover:shadow-xl hover:scale-105 transition-all duration-300">
                                <div className="flex items-center justify-center">
                                    <p className="w-max p-4 bg-green-200 text-green-700 rounded-full text-2xl">{value[0]}</p>
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className="text-center font-bold text-2xl">{value[1]}</p>
                                </div>
                                <div className="">
                                    <p className="text-center text-xl text-gray-500">{value[2]}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* Fondateur */}
            <div>
                <div className="container mx-auto px-4 my-32 flex flex-col lg:flex-row gap-8 items-center">
                    {/* Image */}
                    <div className="w-max relative">
                        <div className="w-max rounded-xl overflow-hidden">
                            <img src="/prof_yao.png" alt="" className="object-cover" />
                        </div>
                        <div className="flex items-center justify-center gap-2 absolute -top-4 right-3 px-4 py-2 rounded-full font-bold text-white bg-orange-400">
                            <p className="text-xl"><LuCrown /></p>
                            <p>Fondateur et CEO</p>
                        </div>
                    </div>
                    {/* Description */}
                    <div className="flex flex-col gap-8">
                        <h1 className="font-bold text-4xl text-center lg:text-left">Prof. Yao K. AZOUMAH</h1>
                        <p className="text-green-600 text-2xl text-center lg:text-left">Fondateur et Directeur Général</p>
                        <p className="text-xl">Visionnaire et pionnier de l&apos;énergie renouvelable en Afrique, le Professeur Yao K. AZOUMAH combine expertise académique et vision entrepreneuriale pour révolutionner le secteur énergétique africain.</p>
                        <div className="space-y-8">
                            {
                                [
                                    [<LuSchool key={0} />, "Professeur d'université", "Expert reconnu en énergies renouvelables"],
                                    [<LuLightbulb key={1} />, "Innovateur", "Pionnier des solutions solaires africaines"],
                                    [<LuAward key={2} />, "Leader Visionnaire", "Architecte de l'avenir énergétique"]
                                ].map((value, index) => (
                                    <div key={index}>
                                        <div className="flex items-center gap-4 p-8 bg-white shadow hover:shadow-xl transition-all duration-300 rounded-xl">
                                            <div className="text-2xl text-green-700 w-max p-4 bg-green-300 rounded-full">
                                                {value[0]}
                                            </div>
                                            <div className="space-y-4">
                                                <h1 className="font-bold text-2xl">{value[1]}</h1>
                                                <p className="text-xl">{value[2]}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* Equipe */}
            <div className="bg-gradient-to-tr from-orange-200 to-green-200 py-32" id="equipe">
                <div className="container mx-auto px-4">
                    <div className="px-4 lg:px-48">
                        <div className="flex items-center justify-center my-4">
                            <p className="w-max rounded-full px-4 py-2 bg-green-700 text-white font-bold text-sm">Leadership</p>
                        </div>
                        <h1 className="text-center text-4xl font-bold w-full">Comité de Direction</h1>
                        <div className="flex justify-center items-center my-4">
                            <div className="h-1 w-32 bg-green-300"></div>
                        </div>
                        <p className="text-center text-xl">Une équipe d&apos;experts chevronnés avec plus de 15 ans d&apos;expérience collective, unis par une vision commune d&apos;excellence et d&apos;innovation.</p>
                    </div>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            [
                                ["/yao.png", "Prof. Yao K. AZOUMAH", "Directeur Général"],
                                ["/yves.png", "M. Yves LAWSON", "Directeur Général Adjoint"],
                                ["/tchassama.png", "M. TCHASSAMA", "Directeur Technique et des Opérations"],
                                ["/sylvie.png", "Mme Sylvie SHIKPE", "Directrice Commerciale & Marketing"],
                                ["/eklou.jpg", "M. Yaovi V. EKLOU", "Directeur des Ressources Humaines"],
                                ["/fousseni.png", "M. Mohamed FOUSSENI", "Directeur Financier & Comptable"],
                                ["/massan.png", "Mme Massan AGBEHADJI", "Assistante de Direction"]
                            ].map((value, index) => (
                                <div key={index} className="overflow-hidden grid grid-rows-[1fr_auto] flex-col bg-white rounded-xl shadow hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-center justify-center">
                                        <img src={value[0]} alt="" className="object-cover" />
                                    </div>
                                    <div className="grid grid-rows-2 gap-2 py-4 bg-green-50">
                                        <div className="flex items-center justify-center">
                                            <p className="text-center font-bold text-2xl">{value[1]}</p>
                                        </div>
                                        <div>
                                            <p className="text-center text-lg">{value[2]}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* Nos valeurs */}
            <div className="container mx-auto px-4 my-32">
                <div className="px-4 lg:px-48">
                    <div className="flex items-center justify-center my-4">
                        <p className="w-max rounded-full px-4 py-2 bg-green-700 text-white font-bold text-sm">Nos valeurs</p>
                    </div>
                    <h1 className="text-center text-4xl font-bold w-full">Les Piliers de notre Excellence</h1>
                    <div className="flex justify-center items-center my-4">
                        <div className="h-1 w-32 bg-green-300"></div>
                    </div>
                    <p className="text-center text-xl">Des principes fondamentaux qui guident chacune de nos actions et décisions.</p>
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        [
                            [<LuAward key={0} />, "Excellence", "Professionnalisme et rigueur dans chaque projet"],
                            [<LuShield key={1} />, "Intégrité", "Transparence et honnêteté en toutes circonstances"],
                            [<LuRocket key={2} />, "Innovation", "Créativité et solutions avant-gardistes"],
                            [<LuGroup key={3} />, "Collaboration", "Esprit d'équipe et synergie collective"],
                            [<LuLeaf key={4} />, "Durabilité", "Responsabilité environnementale et sociale"],
                            [<LuScale key={5} />, "Équité", "Justice et fairness dans toutes nos relations"]
                        ].map((value, index) => (
                            <div key={index} className="grid grid-rows-3 flex-col gap-1 p-8 bg-white rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="flex items-center justify-center">
                                    <p className="w-max p-4 bg-green-200 text-green-700 rounded-full text-2xl">{value[0]}</p>
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className="text-center font-bold text-2xl">{value[1]}</p>
                                </div>
                                <div className="">
                                    <p className="text-center text-xl text-gray-500">{value[2]}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>


            <div className="bg-gray-200 py-32">
                {/* Notre impact */}
                <div className="container mx-auto px-4">
                    <div className="px-4 lg:px-48">
                        <div className="flex items-center justify-center my-4">
                            <p className="w-max rounded-full px-4 py-2 bg-green-700 text-white font-bold text-sm">Notre impact</p>
                        </div>
                        <h1 className="text-center text-4xl font-bold w-full">Résultats Concrets</h1>
                        <div className="flex justify-center items-center my-4">
                            <div className="h-1 w-32 bg-green-300"></div>
                        </div>
                        <p className="text-center text-xl">Des chiffres qui témoignent de notre engagement et de notre impact positif.</p>
                    </div>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {
                            [
                                [<FaSolarPanel key={0} />, "1,000+", "Installations Solaires", "Systèmes déployés avec succès"],
                                [<FaHouse key={1} />, "50,000+", "Foyers Alimentés", "Familles bénéficiant d'énergie propre"],
                                [<FaLeaf key={2} />, "25,000T", "CO₂ Évitées", "Impact environnemental positif"],
                                [<FaGlobeAfrica key={3} />, "15", "Pays d'Intervention", "Présence continentale active"],
                            ].map((value, index) => (
                                <div key={index} className="grid grid-rows-[repeat(4,auto)] flex-col gap-2 p-8 bg-white rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <div className="flex items-center justify-center">
                                        <p className="w-max p-4 bg-green-200 text-green-700 rounded-full text-2xl">{value[0]}</p>
                                    </div>
                                    <div className="flex items-center justify-center py-4">
                                        <p className="text-center font-bold text-4xl">{value[1]}</p>
                                    </div>
                                    <div className="">
                                        <p className="text-center text-lg">{value[2]}</p>
                                    </div>
                                    <div className="">
                                        <p className="text-center text-sm text-gray-500">{value[3]}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 py-32">
                {/* Notre impact */}
                <div className="container mx-auto px-4">
                    <div className="px-4 lg:px-48">
                        <h1 className="text-center text-4xl font-bold w-full">Rejoignez l&apos;Aventure KYA-Energy</h1>
                        <div className="flex justify-center items-center my-8">
                            <div className="h-1 text-center text-xl">Découvrez nos opportunités et participez à la révolution énergétique africaine</div>
                        </div>
                        <div className="my-16">
                            <div className="flex items-center justify-center gap-8 my-8">
                                <Link href="#equipe">
                                    <div className="w-max px-4 py-4 gap-2 flex items-center justify-center rounded-full bg-orange-400 hover:bg-orange-500 transition-colors duration-300">
                                        <p className="text-2xl"><RiOrganizationChart /></p>
                                        <p>Voir l&apos;organigramme</p>
                                    </div>
                                </Link>
                                <Link href="">
                                    <div className="w-max px-4 py-4 gap-2 flex items-center justify-center rounded-full bg-green-400 hover:bg-green-500 transition-colors duration-300">
                                        <p className="text-2xl"><RiShakeHandsLine /></p>
                                        <p>Nous rejoindre</p>
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