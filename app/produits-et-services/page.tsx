import Link from "next/link";
import { LuArrowRight, LuCircleCheckBig, LuClock, LuInbox } from "react-icons/lu";
import { Ri24HoursLine, RiBankCardLine, RiBuildingFill, RiCalculatorLine, RiCoinsLine, RiFlashlightLine, RiGroupLine, RiHome3Line, RiPhoneLine, RiShieldLine, RiStarFill } from "react-icons/ri";

export default function Page() {
    return (
        <>
            <div className="container mx-auto px-4 mt-8">
                {/* Offre spéciale */}
                <div className="flex flex-col-reverse lg:flex-row py-8 gap-8">
                    <div className="w-full lg:w-1/2">
                        <div className="w-max px-4 py-2 rounded-full bg-green-200 text-green-700 flex items-center justify-center">
                            <p>OFFRE SPECIALE</p>
                        </div>
                        <div>
                            <p className="font-bold text-4xl md:text-6xl leading-16"><span className="text-orange-400">Location-Vente</span><br />des groupes électrosolaires<br /><span className="text-green-700">KYA-SOP</span> pour les <span className="text-orange-400">Entreprises</span></p>
                        </div>
                        <div className="my-8 text-xl">
                            <p>Solutions énergétiques pour entreprises avec financement flexible</p>
                        </div>
                        <div className="my-8">
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
                            <div>
                                <div className="my-8">
                                    <a href="tel:90000000">
                                        <div className="flex items-center gap-2 w-max px-4 py-4 rounded-xl bg-orange-400 hover:bg-orange-500 transition-colors duration-300 font-bold text-white">
                                            <p className="text-xl"><RiPhoneLine /></p>
                                            <p>Nous appeler</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="p-4 bg-green-300 rounded-xl relative">
                            <div className="overflow-hidden rounded-xl">
                                <img src="/kya-sop.avif" alt="" className="w-full h-96 object-cover" />
                            </div>
                            <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-[#0f05] animate-ping"></div>
                        </div>
                    </div>
                </div>



                {/* Produits */}
                <div className="container mx-auto px-4 mt-32">
                    <div className="px-4 lg:px-48">
                        <h1 className="text-center text-4xl font-bold w-full">Nos gammes de produits</h1>
                        <div className="flex justify-center items-center my-4">
                            <div className="h-1 w-32 bg-green-300"></div>
                        </div>
                        <p className="text-center text-xl">Solutions énergétiques adaptées à tous vos besoins, du résidentiel au communautaire</p>
                    </div>
                    <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {
                            [
                                { 0: "/kya-sop-residentiel.avif", 1: "KYA-Sol Résidentiel", 2: "Solutions adaptées aux maisons individuelles et petits bâtiments.", 3: ["Installation rapide", "Maintenance simplifiée", "Garantie 5 ans"], 4: "#", 5: <RiHome3Line key={0} />, 6: "Populaire", 7: "bg-blue-300", 8: "A partir de 500 000 FCFA" },
                                { 0: "/kya-sop-commercial.avif", 1: "KYA-Sol Commercial", 2: "Systèmes haute performance pour entreprises et industries.", 3: ["Haute capacité", "Monitoring avancé", "ROI optimisé"], 4: "#", 5: <RiBuildingFill key={1} />, 6: "Recommandé", 7: "bg-green-300", 8: "Location-vente disponible" },
                                { 0: "/kya-sop-communautaire.avif", 1: "KYA-Sol Communautaire", 2: "Projets d'envergure pour collectivités et institutions.", 3: ["Solutions sur mesure", "Financement flexible", "Impact social"], 4: "#", 5: <RiGroupLine key={2} />, 6: "Sur mesure", 7: "bg-orange-300", 8: "Devis personnalisé" }
                            ].map((value, index) => (
                                <div key={index} className="relative p-4 rounded-xl bg-white space-y-8 flex flex-col justify-between">
                                    <div className={`absolute -top-3 right-3 py-1 font-bold text-sm rounded-full px-4 ${value[7]}`}>
                                        {value[6]}
                                    </div>
                                    <div className="h-64">
                                        <img className="w-full h-64 object-contain" src={`${value[0]}`} alt="" />
                                    </div>
                                    <div className="font-bold text-xl flex gap-2 items-center">
                                        <p className="p-4 bg-green-200 rounded-full text-green-700 text-2xl">{value[5]}</p>
                                        <p>{value[1]}</p>
                                    </div>
                                    <p>{value[2]}</p>
                                    <div className="space-y-4">
                                        {[...value[3]].map((_value, _index) => (
                                            <div key={_index} className="flex items-center gap-2">
                                                <p><LuCircleCheckBig color="green" /></p>
                                                <p>{_value}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="h-[1px] bg-gray-300 rounded-full"></div>
                                    <div className="flex flex-col">
                                        <p className="text-green-700 font-bold text-xl">{value[8]}</p>
                                        <p className="flex space-x-1 w-max">
                                            <RiStarFill color="gold" />
                                            <RiStarFill color="gold" />
                                            <RiStarFill color="gold" />
                                            <RiStarFill color="gold" />
                                            <RiStarFill color="gold" />
                                        </p>
                                    </div>
                                    <Link href={`${value[4]}`}>
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


                <div className="container mx-auto px-4 mt-32">
                    <div className="px-4 lg:px-48">
                        <h1 className="text-center text-4xl font-bold w-full">Nos services</h1>
                        <div className="flex justify-center items-center my-4">
                            <div className="h-1 w-32 bg-green-300"></div>
                        </div>
                        <p className="text-center text-xl">Un accompagnement complet de l&apos;étude à la maintenance de vos installations</p>
                    </div>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                        {
                            [
                                [<RiCalculatorLine key={0} />, "Etude & Dimensionnement", "Analyse de vos besoins énergétiques et dimensionnement optimal"],
                                [<RiFlashlightLine key={1} />, "Installation", "Installation professionnelle par nos équipes certifiées"],
                                [<RiShieldLine key={2} />, "Maintenance", "Maintenance préventive et curative pour optimiser les performances"],
                                [<Ri24HoursLine key={3} />, "Support 24/7", "Assistance technique disponible 24h/24 et 7j/7"]
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
            </div>

            <div className="bg-gradient-to-tr from-orange-100 to-green-100 py-32 mt-16">
                {/* Financement location vente */}
                <div className="container mx-auto px-4">
                    <div className="px-4 lg:px-48">
                        <h1 className="text-center text-4xl font-bold w-full">Financement Location-Vente KYA-SoP</h1>
                        <div className="flex justify-center items-center my-4">
                            <div className="h-1 w-32 bg-green-300"></div>
                        </div>
                        <p className="text-center text-xl">Accédez à l&apos;énergie solaire sans investissement initial important</p>
                    </div>
                    <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {
                            [
                                [<RiCoinsLine key={0} />, "15 %", "Acompte initial seulement", "bg-orange-200", "text-orange-700"],
                                [<LuClock key={1} />, "10 ans", "Durée de remboursement maximum", "bg-green-200", "text-green-700"],
                                [<LuInbox key={2} />, "100 %", "Installation et maintenance incluses", "bg-blue-200", "text-blue-700"]
                            ].map((value, index) => (
                                <div key={index} className="grid grid-rows-3 flex-col gap-1 p-8 bg-white rounded-xl shadow hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-center justify-center">
                                        <p className={`w-max p-4 ${value[3]} ${value[4]} rounded-full text-2xl`}>{value[0]}</p>
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
            </div>
        </>
    );
}