"use client";

import { useState } from "react";
import { LuAward, LuCrown, LuGlobe, LuLightbulb, LuSchool, LuTable, LuTable2, LuTablet, LuTabletSmartphone, LuTrophy } from "react-icons/lu";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

export default function Page() {
    const imageUrls = [
        "/groupe1.png",
        "/groupe2.png",
        "/groupe3.png"
    ];
    const [index, setIndex] = useState(0);
    const [image, setImage] = useState(imageUrls[index]);

    setTimeout(() => {
        if (index >= 2) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
        setImage(imageUrls[index]);
    }, 5000);

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
                            <h1 className="text-2xl md:text-4xl lg:text-6xl">Notre Équipe<br />d'Excellence</h1>
                            <p className="text-lg md:text-xl lg:text-2xl">Découvrez les experts qui façonnent l'avenir énergétique de l'Afrique avec passion, innovation et professionnalisme.</p>
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
                                    if (index <= 0) {
                                        setIndex(2);
                                    } else {
                                        setIndex(index - 1);
                                    }
                                    setImage(imageUrls[index]);
                                }}><RiArrowLeftLine /></button>
                                <button onClick={() => {
                                    if (index >= 2) {
                                        setIndex(0);
                                    } else {
                                        setIndex(index + 1);
                                    }
                                    setImage(imageUrls[index]);
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
                    <h1 className="text-center text-4xl font-bold w-full">Transformer l'Afrique par l'Énergie Solaire</h1>
                    <div className="flex justify-center items-center my-4">
                        <div className="h-1 w-32 bg-green-300"></div>
                    </div>
                    <p className="text-center text-xl">KYA-Energy Group s'engage dans la révolution énergétique africaine avec une ambition claire : devenir un leader incontournable des énergies renouvelables sur le continent.</p>
                </div>
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {
                        [
                            [<LuGlobe />, "Leadership Continental", "Ambition de figurer parmi les 10 leaders de l'industrie énergétique en Afrique"],
                            [<LuTabletSmartphone />, "Innovation Technologique", "Développement de solutions solaires de pointe adaptées au contexte africain"],
                            [<LuTrophy />, "Impact Durable", "Extension de notre influence pour un avenir énergétique durable en Afrique"]
                        ].map((value, index) => (
                            <div key={index} className="grid grid-rows-3 flex-col gap-1 p-8 bg-white rounded-xl shadow hover:shadow-xl transition-all duration-300">
                                <div className="flex items-center justify-center">
                                    <p className="w-max p-4 bg-green-200 text-green-700 rounded-full text-2xl">{value[0]}</p>
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className="text-center font-bold text-2xl">{value[1]}</p>
                                </div>
                                <div className="">
                                    <p className="text-center text-xl">{value[2]}</p>
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
                            <img src="/prof_yao.png" alt="" />
                        </div>
                        <div className="flex items-center justify-center gap-2 absolute -top-4 right-3 px-4 py-2 rounded-full font-bold text-white bg-orange-300">
                            <p className="text-xl"><LuCrown /></p>
                            <p>Fondateur et CEO</p>
                        </div>
                    </div>
                    {/* Description */}
                    <div className="flex flex-col gap-8">
                        <h1 className="font-bold text-4xl text-center lg:text-left">Prof. Yao K. AZOUMAH</h1>
                        <p className="text-green-600 text-2xl text-center lg:text-left">Fondateur et Directeur Général</p>
                        <p className="text-xl">Visionnaire et pionnier de l'énergie renouvelable en Afrique, le Professeur Yao K. AZOUMAH combine expertise académique et vision entrepreneuriale pour révolutionner le secteur énergétique africain.</p>
                        <div className="space-y-8">
                            {
                                [
                                    [<LuSchool />, "Professeur d'université", "Expert reconnu en énergies renouvelables"],
                                    [<LuLightbulb />, "Innovateur", "Pionnier des solutions solaires africaines"],
                                    [<LuAward />, "Leader Visionnaire", "Architecte de l'avenir énergétique"]
                                ].map((value, index) => (
                                    <div key={index}>
                                        <div className="flex items-center gap-4 p-8 bg-white shadow hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-xl">
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
        </>
    );
}