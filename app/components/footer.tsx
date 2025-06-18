import { LuShield } from "react-icons/lu";
import { RiFacebookLine, RiLinkedinLine, RiInstagramLine, RiTwitterLine, RiYoutubeLine, RiTiktokLine } from "react-icons/ri";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8">
            <div className="container mx-auto px-4 w-full flex flex-col md:flex-row justify-between gap-4 py-8 border-b-2 border-b-gray-600">
                {/* Logo */}
                <div className="flex flex-col items-start gap-4 w-full lg:w-max">
                    <div className="flex items-center justify-center w-max">
                        <img src="/logo.avif" className="w-16 h-16 object-cover" />
                        {/* Faire ressembler le texte aux couleurs du logo */}
                        <p className="font-bold text-sm text-green-600 text-right">Kya-Energy<br /><span className="text-orange-400">GROUP</span></p>
                    </div>
                    <div>
                        <p>Votre partenaire pour <br /> une transition énergétique <br /> durable et responsable.</p>
                    </div>
                    <div className="flex items-center gap-4 font-bold text-green-400">
                        <p><LuShield /></p>
                        <p>Certifié ISO 9001:2015</p>
                    </div>
                </div>

                {/* Liens utiles */}
                <div className="w-max flex flex-col gap-8 lg:gap-32 md:flex-row">
                    {/* Solutions */}
                    <div className="flex flex-col items-start gap-2">
                        <h1 className="font-bold text-xl text-gray-100">Solutions</h1>
                        <div>
                            <ul className="space-y-1">
                                {
                                    [
                                        ["Groupes électrosolaires", "#"],
                                        ["Installation", "#"],
                                        ["Maintenance", "#"],
                                        ["Conseil", "#"]
                                    ].map((value, index) => (
                                        <li key={index}>
                                            <Link href={value[1]} className="hover:text-green-400">{value[0]}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    {/* Entreprise */}
                    <div className="flex flex-col items-start gap-2">
                        <h1 className="font-bold text-xl text-gray-100">Entreprise</h1>
                        <div>
                            <ul className="space-y-1">
                                {
                                    [
                                        ["A propos", "#"],
                                        ["Notre équipe", "#"],
                                        ["Certifications", "#"],
                                        ["Fondation KYA", "#"]
                                    ].map((value, index) => (
                                        <li key={index}>
                                            <Link href={value[1]} className="hover:text-green-400">{value[0]}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col items-start gap-2">
                        <h1 className="font-bold text-xl text-gray-100">Contact</h1>
                        <div>
                            <ul className="space-y-1">
                                {
                                    [
                                        ["Nous contacter", "#"],
                                        ["Support", "#"],
                                        ["Actualités", "#"],
                                        ["Politique qualité", "#"]
                                    ].map((value, index) => (
                                        <li key={index}>
                                            <Link href={value[1]} className="hover:text-green-400">{value[0]}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 py-8 flex items-center justify-between gap-8">
                <div className="flex items-center gap-4 justify-end w-max flex-wrap">
                    <Link href="http://www.fb.com/kya-energy">
                        <div className="font-bold text-2xl p-2 rounded-full bg-blue-900">
                            <RiFacebookLine color="skyblue" />
                        </div>
                    </Link>
                    <Link href="https://www.linkedin.com/company/kya-energy">
                        <div className="font-bold text-2xl p-2 rounded-full bg-blue-900">
                            <RiLinkedinLine color="skyblue" />
                        </div>
                    </Link>
                    <Link href="https://www.instagram.com/kya_energy/">
                        <div className="font-bold text-2xl p-2 rounded-full bg-pink-900">
                            <RiInstagramLine color="pink" />
                        </div>
                    </Link>
                    <Link href="https://twitter.com/kya_energy">
                        <div className="font-bold text-2xl p-2 rounded-full bg-blue-900">
                            <RiTwitterLine color="skyblue" />
                        </div>
                    </Link>
                    <Link href="https://twitter.com/kya_energy">
                        <div className="font-bold text-2xl p-2 rounded-full bg-red-900">
                            <RiYoutubeLine color="red" />
                        </div>
                    </Link>
                    <Link href="http://www.tiktok.com/@kyaenergy">
                        <div className="font-bold text-2xl p-2 rounded-full bg-gray-900">
                            <RiTiktokLine color="black" />
                        </div>
                    </Link>
                </div>
                <p>&copy; {new Date().getFullYear()} KYA-Energy Group. Tous droits réservés.</p>
            </div>
        </footer>
    );
}