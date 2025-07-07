// /app/your-page-directory/page.tsx

"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useAnimate, useInView, stagger } from "motion/react";

// Icons
import { FaAward, FaChartLine, FaDownload, FaHandshake, FaLeaf } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { HiAcademicCap } from "react-icons/hi2";

export default function Page() {
    // --- Animation Hooks ---
    const [heroScope, animateHero] = useAnimate();
    const [isoSectionScope, animateIsoSection] = useAnimate();
    const [whyCertScope, animateWhyCert] = useAnimate();
    const [qhseScope, animateQhse] = useAnimate();
    const [thanksScope, animateThanks] = useAnimate();
    const [detailsScope, animateDetails] = useAnimate();
    const [ctaScope, animateCta] = useAnimate();

    // inView hooks for scroll-triggered animations
    const isIsoInView = useInView(isoSectionScope, { once: true, amount: 0.2 });
    const isWhyCertInView = useInView(whyCertScope, { once: true, amount: 0.2 });
    const isQhseInView = useInView(qhseScope, { once: true, amount: 0.3 });
    const isThanksInView = useInView(thanksScope, { once: true, amount: 0.4 });
    const isDetailsInView = useInView(detailsScope, { once: true, amount: 0.2 });
    const isCtaInView = useInView(ctaScope, { once: true, amount: 0.4 });

    // Change title
    useEffect(() => {
        document.title = "Certifications - KYA Energy Group";
    }, []);

    // --- Animation Effects ---
    useEffect(() => {
        animateHero([
            [".hero-left", { opacity: [0, 1], x: [-50, 0] }, { duration: 0.8, ease: "easeOut" }],
            [".hero-right", { opacity: [0, 1], x: [50, 0] }, { duration: 0.8, at: "<", ease: "easeOut" }],
        ]);
    }, [animateHero]);

    useEffect(() => { if (isIsoInView) animateIsoSection("div", { opacity: [0, 1], y: [30, 0] }, { duration: 0.7, delay: stagger(0.2) }) }, [isIsoInView, animateIsoSection]);
    useEffect(() => { if (isWhyCertInView) animateWhyCert("div", { opacity: [0, 1], y: [30, 0] }, { duration: 0.6, delay: stagger(0.1) }) }, [isWhyCertInView, animateWhyCert]);
    useEffect(() => { if (isQhseInView) animateQhse("div", { opacity: [0, 1], y: [30, 0] }, { duration: 0.7, delay: stagger(0.2) }) }, [isQhseInView, animateQhse]);
    useEffect(() => { if (isThanksInView) animateThanks("p", { opacity: [0, 1], y: [30, 0] }, { duration: 0.6, delay: stagger(0.15) }) }, [isThanksInView, animateThanks]);
    useEffect(() => { if (isDetailsInView) animateDetails("div", { opacity: [0, 1], y: [30, 0] }, { duration: 0.6, delay: stagger(0.1) }) }, [isDetailsInView, animateDetails]);
    useEffect(() => { if (isCtaInView) animateCta("div", { opacity: [0, 1], y: [30, 0] }, { duration: 0.6, delay: stagger(0.15) }) }, [isCtaInView, animateCta]);

    return (
        <>
            <div>
                {/* Hero */}
                <div className="relative h-[calc(100vh-6rem)]">
                    <div className="w-full h-full overflow-hidden">
                        <img src="/panneau.jpg" alt="Solar panels" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-black/30">
                        <div ref={heroScope} className="container h-full mx-auto px-4 flex flex-col items-center justify-center md:flex-row gap-8">
                            <div className="hero-left opacity-0 w-[95%] md:w-1/2 h-full font-bold text-4xl lg:text-6xl space-y-8 flex flex-col justify-center text-white">
                                <p className="text-slate-200">PREMIERE ENTREPRISE EN</p>
                                <p className="text-green-400">ÉNERGIE SOLAIRE AU TOGO</p>
                            </div>
                            <div className="hero-right opacity-0 w-[95%] md:w-1/2 h-full flex justify-center items-center text-xl">
                                <p className="w-full p-8 bg-green-500/80 backdrop-blur-sm text-white rounded-xl shadow-lg">KYA-Energy Group est la première entreprise certifiée ISO 9001 : 2015 dans la conception, l&apos;assemblage et la commercialisation de produits et systèmes énergétiques à base d&apos;énergies renouvelables.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ISO 9001:2015 */}
            <div ref={isoSectionScope}>
                <div className="container mx-auto px-4 py-32">
                    <div className="opacity-0">
                        <div className="text-center text-4xl font-bold">
                            <h2>KYA-Energy GROUP certifié ISO 9001:2015</h2>
                            <p className="text-orange-500">Une reconnaissance de notre engagement envers la qualité</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16 text-gray-700">
                            <div className="opacity-0 relative px-8 py-16 rounded-xl shadow-xl bg-white">
                                <div><img src="/certification.avif" alt="Certification document" className="object-cover" /></div>
                                <div className="text-white font-bold flex items-center w-max gap-2 p-4 rounded-full bg-orange-500 absolute top-12 right-12">
                                    <p className="text-xl"><FaAward /></p>
                                    <p className="text-sm">Certifié ISO 9001:2015</p>
                                </div>
                            </div>
                            <div className="opacity-0 text-xl space-y-16">
                                <div><p>Nous sommes fiers d&apos;annoncer que KYA-Energy GROUP a obtenu la certification ISO 9001 : 2015 en 2024, délivrée par TÜV Rheinland. Cette certification témoigne de notre engagement indéfectible envers l&apos;excellence, l&apos;amélioration continue et la satisfaction de nos clients et partenaires.</p></div>
                                <div className="space-y-8">
                                    <h3 className="text-3xl font-bold text-orange-500">Une reconnaissance de notre démarche qualité</h3>
                                    <p>Depuis sa création, KYA-Energy GROUP s&apos;est engagé à fournir des solutions innovantes et durables... nous garantissons que nos services répondent aux exigences les plus strictes en matière de performance, de fiabilité et d&apos;amélioration continue.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pourquoi */}
            <div ref={whyCertScope} className="bg-gray-100">
                <div className="container mx-auto px-4 py-32 space-y-16">
                    <div className="opacity-0 space-y-8">
                        <h2 className="text-4xl text-orange-500 text-center">Pourquoi cette certification est essentielle ?</h2>
                        <p className="text-xl text-center px-4 md:px-8 lg:px-16 xl:px-32">L&apos;obtention de cette certification est le fruit d&apos;un travail collectif et d&apos;une volonté constante de renforcer nos pratiques internes. Elle nous permet de :</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                        {[
                            { icon: <FaUserGroup />, text: "Assurer une satisfaction optimale de nos clients en répondant efficacement à leurs besoins et attentes." },
                            { icon: <FaChartLine />, text: "Améliorer en continu nos processus pour garantir des prestations de haute qualité." },
                            { icon: <HiAcademicCap />, text: "Renforcer la cohésion et la qualification de nos équipes à travers des formations et des méthodes de travail structurées." },
                            { icon: <FaLeaf />, text: "Garantir un environnement de travail sain et performant, en adéquation avec nos valeurs." }
                        ].map((value, index) => (
                            <div key={index} className="opacity-0 rounded-xl shadow hover:shadow-xl group bg-white flex overflow-hidden">
                                <div className="w-2 bg-green-700 h-full transition-all duration-300 transform scale-y-0 group-hover:scale-y-100 origin-bottom"></div>
                                <div className="w-full flex items-center gap-4 px-4 py-8">
                                    <div className="text-3xl p-4 rounded-xl bg-green-700 text-white w-max transition-transform duration-300 group-hover:rotate-12">{value.icon}</div>
                                    <p>{value.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* QSHE */}
            <div ref={qhseScope} className="bg-white">
                <div className="container mx-auto px-4 md:px-16 lg:px-32 py-32 flex flex-col md:flex-row items-center gap-8">
                    <div className="opacity-0 w-full md:w-2/3 font-bold text-4xl space-y-8">
                        <h2>Notre engagement QHSE :</h2>
                        <p className="text-orange-500">Un avenir durable et responsable</p>
                        <p className="text-xl font-medium text-gray-700">Au-delà de la qualité, notre engagement intègre également les aspects Hygiène, Sécurité et Environnement (HSE). Nous œuvrons chaque jour pour améliorer nos performances environnementales et sécuritaires...</p>
                    </div>
                    <div className="opacity-0 w-full md:w-1/3">
                        <img src="/engagement.png" alt="QHSE Commitment" />
                    </div>
                </div>
            </div>

            {/* Merci */}
            <div ref={thanksScope} className="bg-gray-100">
                <div className="container mx-auto px-4 md:px-16 lg:px-32 space-y-8 py-32 text-center">
                    <p className="opacity-0 font-bold text-4xl text-orange-500">Un grand merci à nos équipes et partenaires !</p>
                    <p className="opacity-0 text-xl text-gray-700">Cette certification est avant tout une réussite collective. Nous remercions chaleureusement tous nos collaborateurs... Nous remercions également nos clients et partenaires pour leur confiance et leur soutien indéfectible.</p>
                    <p className="opacity-0 text-xl font-bold">Chez KYA-Energy GROUP, nous continuons à viser l&apos;excellence et à repousser les limites de l&apos;innovation pour un avenir énergétique durable.</p>
                </div>
            </div>

            {/* Détails */}
            <div ref={detailsScope} className="bg-gray-200">
                <div className="container mx-auto px-4 py-32 space-y-16">
                    <div className="opacity-0 space-y-8">
                        <h2 className="text-4xl text-orange-500 text-center">Détails de notre certification</h2>
                        <p className="text-xl text-center px-4 md:px-8 lg:px-16 xl:px-32">Informations complètes sur notre certification ISO 9001:2015</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                        {[
                            { icon: <FaUserGroup />, title: "Organisme Certificateur", text: "TÜV Rheinland" },
                            { icon: <FaChartLine />, title: "Date d'obtention", text: "2024" },
                            { icon: <HiAcademicCap />, title: "Domaine d'application", text: "Conception, assemblage et commercialisation de systèmes énergétiques renouvelables" },
                            { icon: <FaLeaf />, title: "Validité", text: "3 ans avec audits de surveillance annuels" }
                        ].map((value, index) => (
                            <div key={index} className="opacity-0 rounded-xl shadow-md hover:shadow-xl group bg-white overflow-hidden">
                                <div className="w-full space-y-4 text-lg text-center px-4 py-8">
                                    <div className="flex items-center justify-center">
                                        <div className="text-3xl p-4 rounded-xl bg-orange-700 text-white w-max transition-transform duration-300 group-hover:scale-110">{value.icon}</div>
                                    </div>
                                    <h3 className="font-bold text-xl">{value.title}</h3>
                                    <p>{value.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Confiance */}
            <div ref={ctaScope} className="bg-gradient-to-bl from-green-800 to-green-700">
                <div className="container mx-auto px-4 md:px-16 lg:px-32 py-32 text-center text-white space-y-8">
                    <div className="opacity-0">
                        <h2 className="font-bold text-4xl xl:px-64">Faites Confiance à l&apos;Excellence Certifiée</h2>
                    </div>
                    <div className="opacity-0">
                        <p className="text-xl">Choisissez KYA Energy Group pour vos projets d&apos;énergie solaire et bénéficiez de notre expertise certifiée ISO 9001:2015.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center items-center w-full space-y-4 sm:space-y-0 sm:space-x-8">
                        <Link href="#" className="opacity-0 w-full sm:w-auto">
                            <div className="w-full sm:w-72 p-4 rounded-xl flex items-center justify-center gap-2 text-orange-500 bg-white font-semibold transition-transform duration-300 hover:-translate-y-1">
                                <FaDownload /><p>Télécharger notre certificat</p>
                            </div>
                        </Link>
                        <Link href="#" className="opacity-0 w-full sm:w-auto">
                            <div className="w-full sm:w-72 p-4 rounded-xl flex items-center justify-center gap-2 border-white border-2 font-semibold transition-all duration-300 hover:-translate-y-1 hover:text-orange-500 hover:bg-white">
                                <FaHandshake /><p>Démarrer un projet</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
