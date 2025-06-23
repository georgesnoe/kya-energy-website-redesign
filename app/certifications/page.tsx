import Link from "next/link";
import { FaAward, FaChartLine, FaDownload, FaHandshake, FaLeaf } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { HiAcademicCap } from "react-icons/hi2";

export default function Page() {
    return (
        <>
            <div>
                {/* Carousel */}
                <div className="relative h-[calc(100vh-6rem)]">
                    {/* Image */}
                    <div className="w-full h-full overflow-hidden">
                        <img src="/panneau.jpg" alt="" className="w-full h-full object-cover transition-all" />
                    </div>
                    {/* Texte */}
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="container h-full mx-auto px-4 flex flex-col items-center justify-center md:flex-row">
                            <div className="w-[95%] md:w-1/2 h-full font-bold text-4xl lg:text-6xl space-y-8 flex flex-col justify-center">
                                <p className="text-gray-400">PREMIERE ENTREPRISE EN</p>
                                <p className="text-green-700">ÉNERGIE SOLAIRE AU TOGO</p>
                            </div>
                            <div className="w-[95%] md:w-1/2 h-full flex justify-center items-center text-xl m-8">
                                <p className="w-full p-8 bg-green-400 rounded-xl">KYA-Energy Group est la première entreprise certifiée ISO 9001 : 2015 dans la conception, l&apos;assemblage et la commercialisation de produits et systèmes énergétiques à base d&apos;énergies renouvelables. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ISO 9001:2015 */}
            <div>
                <div className="container mx-auto px-4 py-32">
                    <div>
                        <div className="text-center text-4xl font-bold">
                            <p>KYA-Energy GROUP certifié ISO 9001:2015</p>
                            <p className="text-orange-500">Une reconnaissance de notre engagement envers la qualité</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16 text-gray-700">
                            {/* Image */}
                            <div className="relative px-8 py-16 rounded-xl shadow-xl bg-white">
                                <div>
                                    <img src="/certification.avif" alt="" className="object-cover" />
                                </div>
                                <div className="text-white font-bold flex items-center w-max gap-2 p-4 rounded-full bg-orange-500 absolute top-12 right-12">
                                    <p className="text-xl"><FaAward /></p>
                                    <p className="text-sm">Certifié ISO 9001:2015</p>
                                </div>
                            </div>
                            {/* Texte */}
                            <div className="text-xl space-y-16">
                                <div>
                                    <p>Nous sommes fiers d&apos;annoncer que KYA-Energy GROUP a obtenu la certification ISO 9001 : 2015 en 2024, délivrée par TÜV Rheinland. Cette certification témoigne de notre engagement indéfectible envers l&apos;excellence, l&apos;amélioration continue et la satisfaction de nos clients et partenaires.</p>
                                </div>
                                <div className="space-y-8">
                                    <h1 className="text-3xl font-bold text-orange-500">Une reconnaissance de notre démarche qualité</h1>
                                    <p>Depuis sa création, KYA-Energy GROUP s&apos;est engagé à fournir des solutions innovantes et durables dans le domaine des énergies renouvelables, en particulier l&apos;énergie solaire. En mettant en place un Système de Management de la Qualité (SMQ) conforme à la norme ISO 9001 : 2015, nous garantissons que nos services répondent aux exigences les plus strictes en matière de performance, de fiabilité et d&apos;amélioration continue. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pourquoi */}
            <div className="bg-gray-200">
                <div className="container mx-auto px-4 py-32 space-y-16">
                    <div className="space-y-8">
                        <h1 className="text-4xl text-orange-500 text-center">Pourquoi cette certification est essentielle ?</h1>
                        <p className="text-xl text-center px-4 md:px-8 lg:px-16 xl:px-32">L&apos;obtention de cette certification est le fruit d&apos;un travail collectif et d&apos;une volonté constante de renforcer nos pratiques internes. Elle nous permet de :</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                        {
                            [
                                [<FaUserGroup key={0} />, "Assurer une satisfaction optimale de nos clients en répondant efficacement à leurs besoins et attentes."],
                                [<FaChartLine key={1} />, "Améliorer en continu nos processus pour garantir des prestations de haute qualité."],
                                [<HiAcademicCap key={3} />, "Renforcer la cohésion et la qualification de nos équipes à travers des formations et des méthodes de travail structurées."],
                                [<FaLeaf key={4} />, "Garantir un environnement de travail sain et performant, en adéquation avec nos valeurs de respect de l'environnement et de développement durable."]
                            ].map((value, index) => (
                                <div key={index} className="rounded-xl shadow hover:shadow-xl group bg-white flex overflow-hidden">
                                    <div className="w-2 bg-green-700 h-0 group-hover:h-full"></div>
                                    <div className="w-full flex gap-4 px-4 py-8">
                                        <div>
                                            <p className="group-hover:rotate-12 text-2xl p-4 rounded-xl bg-green-700 text-white w-max">{value[0]}</p>
                                        </div>
                                        <div>
                                            <p>{value[1]}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* QSHE */}
            <div className="bg-white">
                <div className="container mx-auto px-4 md:px-16 lg:px-32 py-32 flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-2/3 font-bold text-4xl space-y-8">
                        <p>Notre engagement QHSE :</p>
                        <p className="text-orange-500">Un avenir durable et responsable</p>
                        <p className="text-xl font-medium">Au-delà de la qualité, notre engagement intègre également les aspects Hygiène, Sécurité et Environnement (HSE). Nous œuvrons chaque jour pour améliorer nos performances environnementales et sécuritaires, garantissant ainsi des conditions de travail optimales pour nos collaborateurs et des solutions énergétiques fiables pour nos clients. </p>
                    </div>
                    <div className="w-full md:w-1/3">
                        <div>
                            <img src="/engagement.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Merci */}
            <div className="bg-gray-100">
                <div className="container mx-auto px-4 md:px-16 lg:px-32 space-y-8 py-32 text-center">
                    <p className="font-bold text-4xl text-orange-500">Un grand merci à nos équipes et partenaires !</p>
                    <p className="text-xl text-gray-700">Cette certification est avant tout une réussite collective. Nous remercions chaleureusement tous nos collaborateurs, dont l&apos;implication et le professionnalisme ont permis d&apos;atteindre cet objectif. Nous remercions également nos clients et partenaires pour leur confiance et leur soutien indéfectible.</p>
                    <p className="text-xl font-bold">Chez KYA-Energy GROUP, nous continuons à viser l&apos;excellence et à repousser les limites de l&apos;innovation pour un avenir énergétique durable. </p>
                </div>
            </div>

            {/* Pourquoi */}
            <div className="bg-gray-200">
                <div className="container mx-auto px-4 py-32 space-y-16">
                    <div className="space-y-8">
                        <h1 className="text-4xl text-orange-500 text-center">Détails de notre certification</h1>
                        <p className="text-xl text-center px-4 md:px-8 lg:px-16 xl:px-32">Informations complètes sur notre certification ISO 9001:2015</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                        {
                            [
                                [<FaUserGroup key={0} />, "Organisme Certificateur", "TÜV Rheinland"],
                                [<FaChartLine key={1} />, "Date d'obtention", "2024"],
                                [<HiAcademicCap key={3} />, "Domaine d'application", "Conception, assemblage et commercialisation de systèmes énergétiques renouvelables"],
                                [<FaLeaf key={4} />, "Validité", "3 ans avec audits de surveillance annuels"]
                            ].map((value, index) => (
                                <div key={index} className="rounded-xl shadow-md hover:shadow-xl group bg-white overflow-hidden">
                                    <div className="w-full space-y-4 text-lg text-center px-4 py-8">
                                        <div className="flex items-center justify-center">
                                            <p className="group-hover:rotate-12 text-2xl p-4 rounded-xl bg-orange-700 text-white w-max">{value[0]}</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-xl">{value[1]}</p>
                                        </div>
                                        <div>
                                            <p>{value[2]}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* Confiance */}
            <div className="bg-linear-to-bl from-green-800 to-green-700">
                <div className="container mx-auto px-4 md:px-16 lg:px-32 py-32 text-center text-white space-y-8">
                    <div>
                        <p className="font-bold text-4xl xl:px-64">Faites Confiance à l&apos;Excellence Certifiée</p>
                    </div>
                    <div>
                        <p className="text-xl">Choisissez KYA Energy Group pour vos projets d&apos;énergie solaire et bénéficiez de notre expertise certifiée ISO 9001:2015. </p>
                    </div>
                    <div className="flex flex-col justify-center items-center w-full space-y-8">
                        <Link href="">
                            <div className="w-72 p-4 rounded-xl flex items-center justify-center gap-2 text-orange-500 bg-white hover:-translate-y-1">
                                <p><FaDownload /></p>
                                <p>Télécharger notre certificat</p>
                            </div>
                        </Link>
                        <Link href="">
                            <div className="w-72 p-4 rounded-xl flex items-center justify-center gap-2 border-white border-2 hover:-translate-y-1 hover:text-orange-500 hover:bg-white">
                                <p><FaHandshake /></p>
                                <p>Démarrer un projet</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}