"use client";

import { useState } from "react";
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
                                <div className={`w-4 h-4 ${index == 0 ? "bg-white scale-125" : "bg-green-300"} rounded-full`}></div>
                                <div className={`w-4 h-4 ${index == 1 ? "bg-white scale-125" : "bg-green-300"} rounded-full`}></div>
                                <div className={`w-4 h-4 ${index == 2 ? "bg-white scale-125" : "bg-green-300"} rounded-full`}></div>
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
        </>
    );
}