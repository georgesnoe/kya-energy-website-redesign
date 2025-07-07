// /app/page.tsx or your relevant page file

// "use client";

import { useEffect } from "react";
import Link from "next/link";
// We'll use these powerful hooks and functions from Motion One
import { useAnimate, useInView, stagger } from "motion/react";

// Icons
import { LuLeaf, LuCircleCheckBig, LuArrowRight } from "react-icons/lu";
import { HiUserGroup, HiGlobeAlt } from "react-icons/hi2";
import { RiLeafLine, RiAwardLine, RiFlashlightLine, RiShieldLine, RiGroupLine, RiGlobeLine } from "react-icons/ri";
import { Metadata } from "next";


export default function Home() {
  // --- Animation Hooks ---
  // We'll create separate animation scopes for each section for clarity.

  // Hook for Hero Section
  const [heroScope, animateHero] = useAnimate();

  // Hook for Mission Section
  const [missionScope, animateMission] = useAnimate();
  const isMissionInView = useInView(missionScope, { once: true, amount: 0.2 });

  // Hook for 'Why Us' Section
  const [whyUsScope, animateWhyUs] = useAnimate();
  const isWhyUsInView = useInView(whyUsScope, { once: true, amount: 0.2 });

  // Hook for Stats Section
  const [statsScope, animateStats] = useAnimate();
  const isStatsInView = useInView(statsScope, { once: true, amount: 0.4 });

  // Hook for Solutions Section
  const [solutionsScope, animateSolutions] = useAnimate();
  const isSolutionsInView = useInView(solutionsScope, { once: true, amount: 0.1 });

  // Hook for Contact Section
  const [contactScope, animateContact] = useAnimate();
  const isContactInView = useInView(contactScope, { once: true, amount: 0.2 });

  // --- Animation Effects ---

  // Animate Hero section on initial load
  useEffect(() => {
    animateHero([
      [".hero-badge", { opacity: [0, 1], scale: [0.8, 1] }, { duration: 0.5 }],
      [".hero-title", { opacity: [0, 1], y: [20, 0] }, { duration: 0.6, at: "-0.2" }],
      [".hero-subtitle", { opacity: [0, 1], y: [20, 0] }, { duration: 0.6, at: "-0.3" }],
      [".hero-vision", { opacity: [0, 1], y: [20, 0] }, { duration: 0.6, at: "-0.4" }],
      [".hero-button", { opacity: [0, 1], scale: [0.9, 1] }, { duration: 0.5, at: "-0.4" }],
      [".hero-image", { opacity: [0, 1], x: [50, 0] }, { duration: 0.8, at: "-0.6" }],
    ]);
  }, [animateHero]);

  // Animate Mission section when it comes into view
  useEffect(() => {
    if (isMissionInView) {
      animateMission("h1, .mission-card, .values-card, .youtube-video", { opacity: [0, 1], y: [30, 0] }, { duration: 0.6, delay: stagger(0.2) });
    }
  }, [isMissionInView, animateMission]);

  // Animate 'Why Us' section when it comes into view
  useEffect(() => {
    if (isWhyUsInView) {
      animateWhyUs("h1, .why-us-card", { opacity: [0, 1], y: [30, 0] }, { duration: 0.5, delay: stagger(0.1) });
    }
  }, [isWhyUsInView, animateWhyUs]);

  // Animate Stats section when it comes into view
  useEffect(() => {
    if (isStatsInView) {
      animateStats(".stat-item", { opacity: [0, 1], y: [30, 0] }, { duration: 0.5, delay: stagger(0.15) });
    }
  }, [isStatsInView, animateStats]);

  // Animate Solutions section when it comes into view
  useEffect(() => {
    if (isSolutionsInView) {
      animateSolutions("h1, .solution-subtitle, .solution-card", { opacity: [0, 1], y: [30, 0] }, { duration: 0.5, delay: stagger(0.1) });
    }
  }, [isSolutionsInView, animateSolutions]);

  // Animate Contact section when it comes into view
  useEffect(() => {
    if (isContactInView) {
      animateContact([
        [".contact-title", { opacity: [0, 1], y: [20, 0] }, { duration: 0.6 }],
        [".contact-info", { opacity: [0, 1], x: [-30, 0] }, { duration: 0.7, at: "-0.3" }],
        [".contact-map", { opacity: [0, 1], x: [30, 0] }, { duration: 0.7, at: "<" }], // at: "<" means at the same time as the previous animation
      ]);
    }
  }, [isContactInView, animateContact]);


  // --- JSX ---
  // The root div is now a standard div, not a motion.div
  return (
    <div>
      <div className="container mx-auto px-4 mt-8">
        {/* Hero */}
        <div ref={heroScope} className="flex flex-col lg:flex-row py-8 gap-8 overflow-hidden">
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="hero-badge flex gap-2 px-4 py-2 rounded-full bg-green-200 w-max items-center justify-center opacity-0">
              <p><LuLeaf /></p>
              <p>Solutions énergétiques durables</p>
            </div>
            <div className="space-y-8">
              <p className="hero-title font-bold text-4xl md:text-6xl opacity-0">Avec nos Groupes Électrosolaires <br /> <span className="text-green-700">KYA-Sol</span></p>
              <p className="hero-subtitle text-2xl text-gray-600 opacity-0">Devenez propriétaires d&apos;une énergie verte et durable</p>
            </div>
            <div className="hero-vision flex items-center justify-start gap-2 text-xl opacity-0">
              <p><LuCircleCheckBig color="green" fontWeight={900} /></p>
              <p><span className="font-bold text-green-700">Notre vision</span>: démocratiser l&apos;accès à l&apos;énergie durable</p>
            </div>
            <div>
              <Link href="" className="hero-button opacity-0 inline-block">
                <div className="flex items-center justify-start w-max gap-2 bg-green-600 p-4 rounded text-gray-100 transition-all duration-300 hover:gap-3 hover:bg-green-700">
                  <p>Découvrir nos solutions</p>
                  <p><LuArrowRight /></p>
                </div>
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="hero-image p-4 bg-green-300 rounded-xl relative opacity-0">
              <div className="overflow-hidden rounded-xl">
                <img src="/kya-sop.avif" alt="" className="w-full h-96 object-cover" />
              </div>
              <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-green-400/50 animate-ping"></div>
            </div>
          </div>
        </div>


        {/* Mission et valeurs */}
        <div ref={missionScope} className="my-32">
          <div>
            <h1 className="text-center text-4xl font-bold w-full opacity-0">Mission et valeurs</h1>
            <div className="flex justify-center items-center mt-4">
              <div className="h-1 w-32 bg-green-300"></div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 py-8 gap-8 h-max text-[18px]">
              {/* Mission */}
              <div className="mission-card w-full space-y-8 opacity-0">
                <div className="bg-white shadow-lg p-8 rounded-lg">
                  <h2 className="flex items-center gap-2 font-bold text-xl text-green-600 mb-4">
                    <span className="bg-green-300 p-4 rounded-full"><HiGlobeAlt color="green" /></span>
                    <span className="text-2xl">Notre mission</span>
                  </h2>
                  <div>
                    <p>Transformer les ressources énergétiques renouvelables de manière innovante pour produire une énergie propre, fiable et abordable pour tous. Nous nous engageons à créer un avenir énergétique durable qui profite aux communautés et préserve notre planète.</p>
                  </div>
                </div>
              </div>
              {/* Valeurs */}
              <div className="values-card h-full space-y-8 opacity-0">
                <div className="bg-white shadow-lg p-8 rounded-lg h-full">
                  <h2 className="flex items-center gap-2 font-bold text-xl text-green-600 mb-4">
                    <span className="bg-green-300 p-4 rounded-full"><HiUserGroup color="green" /></span>
                    <span className="text-2xl">Nos valeurs</span>
                  </h2>
                  <div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
                      {
                        ["Professionnalisme", "Rigueur", "Esprit d'équipe", "Ecoute du client", "Intégrité", "Transparence", "Equité", "Innovation"].map((value, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <LuCircleCheckBig color="green" />
                            <span>{value}</span>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="youtube-video rounded-xl overflow-hidden shadow opacity-0">
              {/* Vidéo Youtube */}
              <iframe className="w-full" width="670" height="499" src="https://www.youtube.com/embed/ayX_GLi40K8" title="Video institutionnelle KYA Energy Group" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
        </div>

        {/* Pourquoi choisir Kya ? */}
        <div ref={whyUsScope} className="flex flex-col gap-8 my-32">
          <div>
            <h1 className="text-center text-4xl font-bold w-full opacity-0">Pourquoi choisir KYA-Energy Group ?</h1>
            <div className="flex justify-center items-center mt-4">
              <div className="h-1 w-32 bg-green-300"></div>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {
              [
                [<RiAwardLine color="green" key={0} />, "Certification ISO 9001:2015", "Qualité garantie selon les standards internationaux les plus exigeants."],
                [<RiFlashlightLine color="green" key={1} />, "Solutions Innovantes", "Technologies de pointe pour une efficacité énergétique maximale."],
                [<RiLeafLine color="green" key={2} />, "Impact environnemental", "Réduction significative de votre empreinte carbone."],
                [<RiShieldLine color="green" key={3} />, "Fiabilité Prouvée", "Équipements durables avec garanties étendues."],
                [<RiGroupLine color="green" key={4} />, "Accompagnement Complet", "De l'étude à la maintenance, nous vous accompagnons."],
                [<RiGlobeLine color="green" key={5} />, "Vision Globale", "Contribution à un avenir énergétique durable pour tous."]
              ].map((value, index) => (
                <div key={index} className="why-us-card space-y-4 bg-white p-8 rounded-xl shadow opacity-0">
                  <div>
                    <p className="p-4 bg-green-300 rounded-full w-max text-xl">{value[0]}</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold">{value[1]}</p>
                  </div>
                  <div>
                    <p>{value[2]}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>


      <div className="bg-green-700 text-white py-32 my-32">
        <div ref={statsScope} className="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-16">
          {
            [
              ["500+", "Installations réalisées"],
              ["10", "Années d'expérience"],
              ["98%", "Satisfaction client"],
              ["24/7", "Support technique"]
            ].map((value, index) => (
              <div key={index} className="stat-item opacity-0">
                <p className="text-center font-bold text-4xl">{value[0]}</p>
                <p className="text-center mt-2">{value[1]}</p>
              </div>
            ))
          }
        </div>
      </div>


      <div className="mb-32">
        <div ref={solutionsScope} className="container mx-auto px-4">
          <div className="px-4 lg:px-48">
            <h1 className="text-center text-4xl font-bold w-full opacity-0">Nos solutions KYA-Sol</h1>
            <div className="flex justify-center items-center my-4">
              <div className="h-1 w-32 bg-green-300"></div>
            </div>
            <p className="solution-subtitle text-center text-xl opacity-0">Découvrez notre gamme complète de groupes électrosolaires adaptés à tous vos besoins énergetiques.</p>
          </div>
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {
              [
                ["/kya-sop-residentiel.avif", "KYA-Sol Résidentiel", "Solutions adaptées aux maisons individuelles et petits bâtiments.", ["Installation rapide", "Maintenance simplifiée", "Garantie 5 ans"], "#"],
                ["/kya-sop-commercial.avif", "KYA-Sol Commercial", "Systèmes haute performance pour entreprises et industries.", ["Haute capacité", "Monitoring avancé", "ROI optimisé"], "#"],
                ["/kya-sop-communautaire.avif", "KYA-Sol Communautaire", "Projets d'envergure pour collectivités et institutions.", ["Solutions sur mesure", "Financement flexible", "Impact social"], "#"]
              ].map((value, index) => (
                <div key={index} className="solution-card p-4 rounded-xl bg-white space-y-8 flex flex-col justify-between opacity-0">
                  <div className="h-64">
                    <img className="w-full h-64 object-contain" src={`${value[0]}`} alt="" />
                  </div>
                  <p className="font-bold text-xl">{value[1]}</p>
                  <p>{value[2]}</p>
                  <div className="space-y-4">
                    {(value[3] as string[]).map((_value, _index) => (
                      <div key={_index} className="flex items-center gap-2">
                        <p><LuCircleCheckBig color="green" /></p>
                        <p>{_value}</p>
                      </div>
                    ))}
                  </div>
                  <Link href={`${value[4]}`}>
                    <p className="flex items-center gap-2 justify-center text-center font-bold bg-green-600 hover:bg-green-700 transition-all hover:gap-4 duration-300 p-4 rounded-xl text-gray-100">
                      <span>En savoir plus</span>
                      <span><LuArrowRight color="white" /></span>
                    </p>
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <div className="mb-8" id="contact">
        <div ref={contactScope} className="container mx-auto px-4">
          <h1 className="contact-title text-center text-4xl font-bold w-full opacity-0">Contactez-nous</h1>
          <div className="flex justify-center items-center my-4">
            <div className="h-1 w-32 bg-green-300"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="contact-info space-y-4 opacity-0">
              {/* Contact Info */}
              <div>
                <h2 className="font-bold text-green-700 underline text-2xl">Adresse</h2>
                <p>300m, rue en face du Centre Culturel Loyola (CCL),<br />Route Mission Tové, Agoè Logopé</p>
                <p>08 BP 81101, Lomé - Togo</p>
              </div>
              <div>
                <h2 className="font-bold text-green-700 underline text-2xl">Horaires</h2>
                <p>Lundi - Vendredi</p>
                <p>07h30–12h00 | 14h00–17h30</p>
              </div>
              <div>
                <h2 className="font-bold text-green-700 underline text-2xl">Téléphone</h2>
                <p>+228 <a href="tel:70453481" className="text-green-600">70 45 34 81</a> / <a href="tel:99999380" className="text-green-600">99 99 93 80</a></p>
              </div>
              <div>
                <h2 className="font-bold text-green-700 underline text-2xl">E-mail</h2>
                <p><a href="mailto:info@kya-energy.com" className="text-green-600">info@kya-energy.com</a></p>
              </div>
            </div>
            {/* Google maps */}
            <div className="contact-map opacity-0">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.3053730089578!2d1.1820179740441474!3d6.241404426379205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10215783b880a173%3A0xe90f181e8b59c8fc!2sKYA-%C3%89nergy%20GROUP!5e1!3m2!1sfr!2stg!4v1750260157989!5m2!1sfr!2stg" className="w-full h-[300px]" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Acceuil - Kya Energy Group"
}