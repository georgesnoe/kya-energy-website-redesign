// /app/your-page-directory/page.tsx

"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useAnimate, useInView, stagger } from "motion/react";

// Icons
import { LuArrowRight, LuCircleCheckBig, LuClock, LuInbox } from "react-icons/lu";
import {
    Ri24HoursLine, RiBankCardLine, RiBuildingFill, RiCalculatorLine,
    RiCoinsLine, RiFlashlightLine, RiGroupLine, RiHome3Line,
    RiPhoneLine, RiShieldLine, RiStarFill
} from "react-icons/ri";

export default function Page() {
    // --- Animation Hooks ---
    const [heroScope, animateHero] = useAnimate();
    const [productsScope, animateProducts] = useAnimate();
    const [servicesScope, animateServices] = useAnimate();
    const [financingScope, animateFinancing] = useAnimate();

    const isProductsInView = useInView(productsScope, { once: true, amount: 0.1 });
    const isServicesInView = useInView(servicesScope, { once: true, amount: 0.2 });
    const isFinancingInView = useInView(financingScope, { once: true, amount: 0.2 });

    // Change title
    useEffect(() => {
        document.title = "Produits et Services - KYA Energy Group";
    }, []);

    // --- Animation Effects ---

    // Animate Hero section on initial page load
    useEffect(() => {
        animateHero([
            [".hero-content", { opacity: [0, 1], x: [-30, 0] }, { duration: 0.7, delay: stagger(0.1) }],
            [".hero-image", { opacity: [0, 1], x: [30, 0] }, { duration: 0.7, at: "-0.5" }]
        ]);
    }, [animateHero]);

    // Animate Products section when it comes into view
    useEffect(() => {
        if (isProductsInView) {
            animateProducts([
                [".section-title", { opacity: [0, 1], y: [20, 0] }, { duration: 0.6 }],
                [".product-card", { opacity: [0, 1], y: [30, 0] }, { duration: 0.5, delay: stagger(0.15), at: "-0.2" }]
            ]);
        }
    }, [isProductsInView, animateProducts]);

    // Animate Services section when it comes into view
    useEffect(() => {
        if (isServicesInView) {
            animateServices([
                [".section-title", { opacity: [0, 1], y: [20, 0] }, { duration: 0.6 }],
                [".service-card", { opacity: [0, 1], y: [30, 0] }, { duration: 0.5, delay: stagger(0.15), at: "-0.2" }]
            ]);
        }
    }, [isServicesInView, animateServices]);

    // Animate Financing section when it comes into view
    useEffect(() => {
        if (isFinancingInView) {
            animateFinancing([
                [".section-title", { opacity: [0, 1], y: [20, 0] }, { duration: 0.6 }],
                [".financing-card", { opacity: [0, 1], scale: [0.9, 1] }, { duration: 0.5, delay: stagger(0.15), at: "-0.2" }]
            ]);
        }
    }, [isFinancingInView, animateFinancing]);

    return (
        <>
            <div className="container mx-auto px-4 mt-8">
                {/* Offre spéciale */}
                <div ref={heroScope} className="flex flex-col-reverse lg:flex-row py-8 gap-8 overflow-hidden">
                    <div className="w-full lg:w-1/2">
                        <div className="hero-content opacity-0 w-max px-4 py-2 rounded-full bg-green-200 text-green-700 flex items-center justify-center">
                            <p>OFFRE SPECIALE</p>
                        </div>
                        <div className="hero-content opacity-0">
                            <h1 className="font-bold text-4xl md:text-6xl leading-tight"><span className="text-orange-400">Location-Vente</span><br />des groupes électrosolaires<br /><span className="text-green-700">KYA-SOP</span> pour les <span className="text-orange-400">Entreprises</span></h1>
                        </div>
                        <div className="hero-content opacity-0 my-8 text-xl">
                            <p>Solutions énergétiques pour entreprises avec financement flexible</p>
                        </div>
                        <div className="hero-content opacity-0 my-8">
                            <div className="bg-white p-8 rounded-xl border-orange-200 border-2">
                                <div className="flex items-center gap-4">
                                    <div>
                                        <p className="text-2xl text-orange-700 p-4 bg-orange-200 rounded-full w-max"><RiBankCardLine /></p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-xl">Financement avantageux</p>
                                        <p className="text-lg font-normal">Payez seulement 15% à la commande</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    {
                                        ["Acompte : 15% seulement", "Paiement mensuel flexible", "Durée : 10 ans maximum", "Installation incluse"].map((value, index) => (
                                            <div key={index} className="flex items-center gap-2">
                                                <p><LuCircleCheckBig color="green" /></p>
                                                <p>{value}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="hero-content opacity-0 my-8">
                                <a href="tel:90000000">
                                    <div className="flex items-center gap-2 w-max px-4 py-4 rounded-xl bg-orange-400 hover:bg-orange-500 transition-colors duration-300 font-bold text-white">
                                        <p className="text-xl"><RiPhoneLine /></p>
                                        <p>Nous appeler</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="hero-image opacity-0 w-full lg:w-1/2">
                        <div className="p-4 bg-green-300 rounded-xl relative">
                            <div className="overflow-hidden rounded-xl">
                                <img src="/kya-sop.avif" alt="" className="w-full h-96 object-cover" />
                            </div>
                            <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-green-400/50 animate-ping"></div>
                        </div>
                    </div>
                </div>

                {/* Produits */}
                <div ref={productsScope} className="container mx-auto px-4 mt-32">
                    <div className="section-title opacity-0 px-4 lg:px-48">
                        <h2 className="text-center text-4xl font-bold w-full">Nos gammes de produits</h2>
                        <div className="flex justify-center items-center my-4">
                            <div className="h-1 w-32 bg-green-300"></div>
                        </div>
                        <p className="text-center text-xl">Solutions énergétiques adaptées à tous vos besoins, du résidentiel au communautaire</p>
                    </div>
                    <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {
                            [
                                { img: "/kya-sop-residentiel.avif", title: "KYA-Sol Résidentiel", desc: "Solutions adaptées aux maisons individuelles et petits bâtiments.", features: ["Installation rapide", "Maintenance simplifiée", "Garantie 5 ans"], link: "#", icon: <RiHome3Line key={0} />, tag: "Populaire", tagBg: "bg-blue-300", price: "A partir de 500 000 FCFA" },
                                { img: "/kya-sop-commercial.avif", title: "KYA-Sol Commercial", desc: "Systèmes haute performance pour entreprises et industries.", features: ["Haute capacité", "Monitoring avancé", "ROI optimisé"], link: "#", icon: <RiBuildingFill key={1} />, tag: "Recommandé", tagBg: "bg-green-300", price: "Location-vente disponible" },
                                { img: "/kya-sop-communautaire.avif", title: "KYA-Sol Communautaire", desc: "Projets d'envergure pour collectivités et institutions.", features: ["Solutions sur mesure", "Financement flexible", "Impact social"], link: "#", icon: <RiGroupLine key={2} />, tag: "Sur mesure", tagBg: "bg-orange-300", price: "Devis personnalisé" }
                            ].map((value, index) => (
                                <div key={index} className="product-card opacity-0 relative p-4 rounded-xl bg-white space-y-8 flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow">
                                    <div className={`absolute -top-3 right-3 py-1 font-bold text-sm rounded-full px-4 ${value.tagBg}`}>
                                        {value.tag}
                                    </div>
                                    <div className="h-64">
                                        <img className="w-full h-64 object-contain" src={value.img} alt="" />
                                    </div>
                                    <div className="font-bold text-xl flex gap-2 items-center">
                                        <p className="p-4 bg-green-200 rounded-full text-green-700 text-2xl">{value.icon}</p>
                                        <p>{value.title}</p>
                                    </div>
                                    <p>{value.desc}</p>
                                    <div className="space-y-4">
                                        {value.features.map((_value, _index) => (
                                            <div key={_index} className="flex items-center gap-2">
                                                <p><LuCircleCheckBig color="green" /></p>
                                                <p>{_value}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="h-[1px] bg-gray-300 rounded-full"></div>
                                    <div className="flex flex-col">
                                        <p className="text-green-700 font-bold text-xl">{value.price}</p>
                                        <p className="flex space-x-1 w-max">
                                            <RiStarFill color="gold" /><RiStarFill color="gold" /><RiStarFill color="gold" /><RiStarFill color="gold" /><RiStarFill color="gold" />
                                        </p>
                                    </div>
                                    <Link href={value.link}>
                                        <p className="flex items-center gap-2 justify-center text-center font-bold bg-green-600 hover:bg-green-700 transition-all hover:gap-4 duration-300 p-4 rounded-xl text-gray-100">
                                            <span>Demander un devis</span>
                                            <span><LuArrowRight color="white" /></span>
                                        </p>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>


                <div ref={servicesScope} className="container mx-auto px-4 mt-32">
                    <div className="section-title opacity-0 px-4 lg:px-48">
                        <h2 className="text-center text-4xl font-bold w-full">Nos services</h2>
                        <div className="flex justify-center items-center my-4">
                            <div className="h-1 w-32 bg-green-300"></div>
                        </div>
                        <p className="text-center text-xl">Un accompagnement complet de l&apos;étude à la maintenance de vos installations</p>
                    </div>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                        {
                            [
                                { icon: <RiCalculatorLine key={0} />, title: "Etude & Dimensionnement", desc: "Analyse de vos besoins énergétiques et dimensionnement optimal" },
                                { icon: <RiFlashlightLine key={1} />, title: "Installation", desc: "Installation professionnelle par nos équipes certifiées" },
                                { icon: <RiShieldLine key={2} />, title: "Maintenance", desc: "Maintenance préventive et curative pour optimiser les performances" },
                                { icon: <Ri24HoursLine key={3} />, title: "Support 24/7", desc: "Assistance technique disponible 24h/24 et 7j/7" }
                            ].map((value, index) => (
                                <div key={index} className="service-card opacity-0 text-center flex flex-col items-center gap-4 p-8 bg-white rounded-xl shadow hover:shadow-xl transition-all duration-300">
                                    <div className="w-max p-4 bg-green-200 text-green-700 rounded-full text-3xl">
                                        {value.icon}
                                    </div>
                                    <h3 className="font-bold text-2xl">{value.title}</h3>
                                    <p className="text-lg">{value.desc}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-tr from-orange-100 to-green-100 py-32 mt-16">
                {/* Financement location vente */}
                <div ref={financingScope} className="container mx-auto px-4">
                    <div className="section-title opacity-0 px-4 lg:px-48">
                        <h2 className="text-center text-4xl font-bold w-full">Financement Location-Vente KYA-SoP</h2>
                        <div className="flex justify-center items-center my-4">
                            <div className="h-1 w-32 bg-green-300"></div>
                        </div>
                        <p className="text-center text-xl">Accédez à l&apos;énergie solaire sans investissement initial important</p>
                    </div>
                    <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {
                            [
                                { icon: <RiCoinsLine key={0} />, title: "15 %", desc: "Acompte initial seulement", bg: "bg-orange-200", text: "text-orange-700" },
                                { icon: <LuClock key={1} />, title: "10 ans", desc: "Durée de remboursement maximum", bg: "bg-green-200", text: "text-green-700" },
                                { icon: <LuInbox key={2} />, title: "100 %", desc: "Installation et maintenance incluses", bg: "bg-blue-200", text: "text-blue-700" }
                            ].map((value, index) => (
                                <div key={index} className="financing-card opacity-0 text-center flex flex-col items-center gap-4 p-8 bg-white rounded-xl shadow hover:shadow-xl transition-all duration-300">
                                    <div className={`w-max p-4 ${value.bg} ${value.text} rounded-full text-3xl`}>
                                        {value.icon}
                                    </div>
                                    <h3 className="font-bold text-2xl">{value.title}</h3>
                                    <p className="text-lg">{value.desc}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
