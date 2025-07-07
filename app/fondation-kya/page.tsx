// /app/page.tsx

"use client";

import React, { useEffect, useRef } from 'react';
import { motion, Variants, useMotionValue, useTransform, animate } from 'framer-motion';
import {
    FaHeart, FaDownload, FaRocket, FaBullseye, FaGraduationCap, FaSolarPanel,
    FaGlobeAfrica, FaPlay, FaEye, FaCalendar, FaMapMarkerAlt,
    FaComment, FaArrowRight, FaUser
} from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';

// --- Framer Motion Animation Variants ---
const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const zoomIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
}

// --- Reusable UI Components ---

const SectionTitle = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
    <motion.h2 variants={fadeInUp} className={`text-3xl md:text-4xl font-bold text-slate-800 tracking-tight ${className}`}>
        {children}
    </motion.h2>
);

const Highlight = ({ children }: { children: React.ReactNode }) => (
    <span className="text-teal-500">{children}</span>
);

const StatCounter = ({ value, label }: { value: number, label: string }) => {
    // 1. Create a motion value, which can be animated without causing re-renders.
    const count = useMotionValue(0);

    // 2. Create a new motion value that transforms the original `count` by rounding it.
    const rounded = useTransform(count, (latest) => Math.round(latest));

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // This effect will run when the component is in view.
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // 3. Animate the `count` motion value from 0 to the target `value`.
                    //    This does NOT trigger component re-renders.
                    const controls = animate(count, value, { duration: 2 });

                    // Cleanup animation on unmount or when out of view
                    return () => controls.stop();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [value, count]); // Add `count` to dependencies

    return (
        // 4. Use a <motion.div> and pass the `rounded` motion value directly as a child.
        //    Framer Motion will update the DOM here automatically and efficiently.
        <div ref={ref} className="text-center">
            <motion.span className="text-4xl font-bold text-teal-500">
                {rounded}
            </motion.span>
            <p className="text-sm text-slate-500 mt-1">{label}</p>
        </div>
    );
};

// --- Main Page Component ---
export default function KyaFoundationPage() {

    // Data for sections
    const meansOfAction = [
        "L'octroi de bourses et subventions de formation",
        "L'organisation des concours d'innovation",
        "L'organisation des cours de formation, conférences, séminaires",
        "L'appui aux entrepreneurs",
        "Le soutien à l'autonomisation des femmes et des jeunes filles",
        "L'appui à l'insertion socio-professionnelle des jeunes diplômés"
    ];

    const objectives = [
        "Accroître l'accès aux services énergétiques durables en milieu rural",
        "Promouvoir la science et la technologie chez les femmes",
        "Promouvoir l'employabilité des jeunes en énergies renouvelables",
        "Contribuer à l'amélioration de la qualité de l'éducation",
        "Contribuer à l'autonomisation économique des femmes",
        "Contribuer à la lutte contre les changements climatiques"
    ];

    const sdgGoals = [
        { odd: "ODD1", text: "Éliminer la pauvreté sous toutes ses formes" },
        { odd: "ODD4", text: "Éducation de qualité pour tous" },
        { odd: "ODD5", text: "Egalité des sexes et autonomisation des femmes" },
        { odd: "ODD7", text: "Énergies durables pour tous" },
        { odd: "ODD8", text: "Croissance économique et emploi pour tous" },
        { odd: "ODD13", text: "Lutte contre les changements climatiques" },
        { odd: "ODD17", text: "Partenariats pour la réalisation des objectifs" },
    ];

    const activities = [
        { img: "/acti1.avif", title: "Formation des jeunes filles en solaire", desc: "Programme de formation technique pour l'autonomisation des femmes.", date: "Mai 2024", location: "Lomé, Togo" },
        { img: "/acti4.avif", title: "Lancement de la fondation KYA", desc: "Un engagement durable pour l’impact social et environnemental.", date: "2015", location: "Lomé, Togo" },
        // { img: "/placeholder.svg?height=300&width=400", title: "Conférence sur l'éducation inclusive", desc: "Sensibilisation sur l'importance de l'éducation des filles.", date: "Mars 2024", location: "Sokodé, Togo" },
        { img: "/acti3.avif", title: "Remise de bourses d'études", desc: "Cérémonie de remise de bourses à 50 jeunes filles méritantes.", date: "Février 2024", location: "Lomé, Togo" },
    ];

    const newsItems = [
        { img: "/2fcfb1_6094c382ee544223a1d5904f89862906~mv2.avif", category: "Formation", date: "7 mai 2024", author: "Fondation KYA", title: "Formation des jeunes filles en solaire : la Fondation KYA", excerpt: "Un programme innovant pour former les jeunes femmes aux technologies solaires et promouvoir leur autonomisation économique.", views: 74, comments: 0, likes: 12 },
        { img: "/3191ca_33235050d9ff4df2a7bb29133111eda6~mv2.avif", category: "Gouvernance", date: "24 mai 2024", author: "Conseil d'administration", title: "Fondation KYA : Réunion du Conseil d'administration", excerpt: "Le conseil d'administration se réunit pour définir les orientations stratégiques et approuver les nouveaux projets.", views: 53, comments: 2, likes: 8 },
        { img: "/3191ca_6ad0f10b94204d6e98884d78e6fe026a~mv2.avif", category: "Éducation", date: "24 mai 2024", author: "Équipe terrain", title: "Un soutien renouvelé pour l'éducation des filles", excerpt: "Extension du programme de bourses pour permettre à plus de jeunes filles d'accéder à l'enseignement supérieur.", views: 44, comments: 1, likes: 15 },
    ];

    const sponsors = [
        { src: "/asecna.png", alt: "ASECNA" },
        { src: "/CETEF.avif", alt: "CETEF" },
        { src: "/onono.avif", alt: "ONOMO" },
        { src: "/MOOV.avif", alt: "MOOV" },
    ];

    // Change title
    useEffect(() => {
        document.title = "Fondation KYA - KYA Energy Group";
    }, []);

    return (
        // Wrap everything in a React.Fragment as we are not providing a single root element like <main>
        <>
            {/* 1. Hero Section */}
            <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <video className="w-full h-full object-cover" autoPlay muted loop playsInline src="/file.mp4">
                        <img src="/dio.jpg" alt="Paysage de panneaux solaires" className="w-full h-full object-cover" />
                    </video>
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
                <motion.div
                    className="relative z-10 container mx-auto px-4 text-center md:text-left max-w-4xl"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeInUp} className="inline-block bg-teal-500/20 border border-teal-500 text-teal-300 py-1 px-4 rounded-full text-sm mb-4">
                        FONDATION KYA
                    </motion.div>
                    <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold uppercase tracking-wider">
                        Nos <span className="text-teal-400">Initiatives</span>
                    </motion.h1>
                    <motion.div variants={fadeInUp} className="mt-6 max-w-2xl mx-auto md:mx-0 text-slate-200 text-lg leading-relaxed space-y-4">
                        <p>
                            La Fondation KYA est créée en <span className="font-bold text-orange-400">octobre 2022</span>.
                            Elle a pour but de contribuer au développement socio-économique des populations africaines,
                            issues des groupes les plus vulnérables par des interventions en faveur du développement
                            en matière d&apos;<span className="font-bold text-green-400">énergie, d&apos;agriculture, de médecine, d&apos;éducation</span> et de l&apos;environnement.
                        </p>
                        <p className="flex items-center justify-center md:justify-start gap-2 font-semibold italic">
                            <FaHeart className="text-red-500 animate-pulse" />
                            <span>Fondation KYA, pour un monde meilleur.</span>
                        </p>
                    </motion.div>
                    <motion.div variants={fadeInUp} className="mt-8">
                        <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center gap-3 mx-auto md:mx-0 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            <FaDownload />
                            <span>Télécharger la lettre d&apos;engagement</span>
                        </button>
                    </motion.div>
                </motion.div>
            </section>

            {/* 2. Actions & Goals Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                    >
                        {/* Means of Action Card */}
                        <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-teal-100 text-teal-600 p-4 rounded-full">
                                    <FaRocket size={24} />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-800">Nos moyens d&apos;actions</h2>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                {meansOfAction.map((action, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <FiChevronRight className="text-teal-500 mt-1 flex-shrink-0" />
                                        <span>{action}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Goals Card */}
                        <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-orange-100 text-orange-600 p-4 rounded-full">
                                    <FaBullseye size={24} />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-800">Nos objectifs</h2>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                {objectives.map((goal, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <FiChevronRight className="text-orange-500 mt-1 flex-shrink-0" />
                                        <span>{goal}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 3. Director Video Section (Placeholder - Add video logic if needed) */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center max-w-3xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={staggerContainer}
                    >
                        <SectionTitle>
                            Les domaines <Highlight>d&apos;intervention</Highlight>
                        </SectionTitle>
                        <motion.p variants={fadeInUp} className="mt-4 text-lg text-slate-500">
                            Découvrez notre approche et notre vision à travers cette présentation vidéo.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        variants={zoomIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="mt-12 max-w-4xl mx-auto"
                    >
                        <div className="aspect-video bg-slate-900 rounded-xl shadow-2xl overflow-hidden relative group">
                            <video
                                className="w-full h-full object-cover"
                                poster="/fond.png.jpg"
                                src="/video_kya.mp4"
                                controls
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all pointer-events-none"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-100 group-hover:opacity-0 transition-opacity pointer-events-none">
                                <FaPlay size={60} className="bg-black/50 rounded-full p-3" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 4. Intervention Domains */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                    >
                        {/* Education Card */}
                        <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-lg flex flex-col">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-blue-100 text-blue-600 p-4 rounded-full"><FaGraduationCap size={28} /></div>
                                <h3 className="text-xl font-bold text-slate-800">Éducation et formation</h3>
                            </div>
                            <p className="text-slate-600 flex-grow">L&apos;éducation est un droit fondamental... La fondation encourage la poursuite des études chez les filles talentueuses et octroie également des bourses d’études à celles qui sont vulnérables.</p>
                            <div className="mt-6 pt-6 border-t border-slate-200">
                                <StatCounter value={150} label="Bourses accordées" />
                            </div>
                        </motion.div>

                        {/* Renewable Energy Card */}
                        <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-lg flex flex-col">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-green-100 text-green-600 p-4 rounded-full"><FaSolarPanel size={28} /></div>
                                <h3 className="text-xl font-bold text-slate-800">Énergies renouvelables</h3>
                            </div>
                            <p className="text-slate-600 flex-grow">L’énergie est importante pour le développement... Des formations gratuites sont également offertes aux filles en installation et maintenance des systèmes solaires photovoltaïques chaque année.</p>
                            <div className="mt-6 pt-6 border-t border-slate-200">
                                <StatCounter value={75} label="Installations solaires" />
                            </div>
                        </motion.div>

                        {/* Sustainable Development Card */}
                        <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-lg md:col-span-2">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-yellow-100 text-yellow-600 p-4 rounded-full"><FaGlobeAfrica size={28} /></div>
                                <h3 className="text-xl font-bold text-slate-800">Développement durable</h3>
                            </div>
                            <p className="text-slate-600 mb-6 max-w-4xl">Alignée sur les 17 Objectifs de Développement Durable de l&apos;ONU, la Fondation KYA se concentre sur 7 objectifs prioritaires pour transformer les communautés africaines.</p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                                {sdgGoals.map(goal => (
                                    <div key={goal.odd} className="bg-slate-100 p-3 rounded-lg text-center hover:bg-slate-200 transition-colors">
                                        <div className="font-bold text-teal-600">{goal.odd}</div>
                                        <p className="text-xs text-slate-600 mt-1">{goal.text}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 5. Activities Section (Grid instead of Carousel) */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto">
                        <SectionTitle>Quelques images <Highlight>de nos activités</Highlight></SectionTitle>
                    </div>
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerContainer}
                    >
                        {activities.map((activity, i) => (
                            <motion.div key={i} variants={fadeInUp} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                                <div className="relative">
                                    <img src={activity.img} alt={activity.title} className="w-full h-48 object-cover" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 flex items-center justify-center transition-all">
                                        <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm transform scale-0 group-hover:scale-100 transition-transform">
                                            <FaPlay className="text-white" size={24} />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-slate-800 mb-2">{activity.title}</h3>
                                    <p className="text-sm text-slate-600 mb-4">{activity.desc}</p>
                                    <div className="text-xs text-slate-500 flex items-center justify-between">
                                        <span className="flex items-center gap-1.5"><FaCalendar /> {activity.date}</span>
                                        <span className="flex items-center gap-1.5"><FaMapMarkerAlt /> {activity.location}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 6. Support CTA */}
            <section className="py-20 bg-slate-800 text-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={staggerContainer}
                    >
                        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold">Rejoignez notre mission</motion.h2>
                        <motion.p variants={fadeInUp} className="mt-3 text-lg text-slate-300">Ensemble, construisons un avenir durable pour l&apos;Afrique</motion.p>
                        <motion.div variants={fadeInUp} className="mt-8">
                            <button className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center gap-3 mx-auto shadow-lg hover:shadow-teal-500/40 transform hover:scale-105">
                                <FaHeart />
                                <span>Soutenir les actions de la Fondation KYA</span>
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 7. Sponsors Section */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto">
                        <SectionTitle>Nos <Highlight>Sponsors OR</Highlight></SectionTitle>
                    </div>
                    <motion.div
                        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={staggerContainer}
                    >
                        {sponsors.map((sponsor, i) => (
                            <motion.div key={i} variants={fadeInUp} className="flex justify-center">
                                <img src={sponsor.src} alt={sponsor.alt} className="h-16 object-contain opacity-60 hover:opacity-100 transition-all duration-300" />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 8. News Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto">
                        <SectionTitle>Nos dernières <Highlight>Actualités</Highlight></SectionTitle>
                    </div>
                    <motion.div
                        className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerContainer}
                    >
                        {newsItems.map((item, i) => (
                            <motion.article key={i} variants={fadeInUp} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col">
                                <div className="relative">
                                    <img src={item.img} alt={item.title} className="w-full h-56 object-cover" />
                                    <span className="absolute top-4 left-4 bg-teal-500 text-white text-xs font-bold py-1 px-3 rounded-full">{item.category}</span>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="text-xs text-slate-500 mb-3 flex items-center gap-4">
                                        <span className="flex items-center gap-1.5"><FaCalendar /> {item.date}</span>
                                        <span className="flex items-center gap-1.5"><FaUser /> {item.author}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-800 mb-2 flex-grow">{item.title}</h3>
                                    <p className="text-sm text-slate-600 mb-4">{item.excerpt}</p>
                                    <div className="mt-auto pt-4 border-t border-slate-200 flex justify-between items-center">
                                        <div className="flex items-center gap-4 text-sm text-slate-500">
                                            <span className="flex items-center gap-1"><FaEye /> {item.views}</span>
                                            <span className="flex items-center gap-1"><FaComment /> {item.comments}</span>
                                            <span className="flex items-center gap-1"><FaHeart /> {item.likes}</span>
                                        </div>
                                        <a href="#" className="font-semibold text-teal-600 hover:text-teal-700 text-sm flex items-center gap-1 group">
                                            Lire la suite
                                            <FaArrowRight className="transform transition-transform group-hover:translate-x-1" />
                                        </a>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
}