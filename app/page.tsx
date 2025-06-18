import { LuLeaf, LuCircleCheckBig, LuArrowRight } from "react-icons/lu";
import { HiUserGroup, HiGlobeAlt } from "react-icons/hi2";
import { RiLeafLine, RiAwardLine, RiFlashlightLine, RiShieldLine, RiGroupLine, RiGlobeLine } from "react-icons/ri";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="flex flex-col lg:flex-row py-8 gap-8">
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="flex gap-2 px-4 py-2 rounded-full bg-green-200 w-max items-center justify-center">
              <p><LuLeaf /></p>
              <p>Solutions énergétiques durables</p>
            </div>
            <div className="space-y-8">
              <p className="font-bold text-6xl">Avec nos Groupes Électrosolaires <br /> <span className="text-green-700">KYA-Sol</span></p>
              <p className="text-2xl text-gray-600">Devenez propriétaires d&apos;une énergie verte et durable</p>
            </div>
            <div className="flex items-center justify-start gap-2 text-xl">
              <p><LuCircleCheckBig color="green" fontWeight={900} /></p>
              <p><span className="font-bold text-green-700">Notre vision</span>: démocratiser l&apos;accès à l&apos;énergie durable</p>
            </div>
            <div>
              <Link href="">
                <div className="flex items-center justify-start w-max gap-2 bg-green-600 p-4 rounded text-gray-100 transition-all duration-300 hover:gap-3 hover:bg-green-700">
                  <p>Découvrir nos solutions</p>
                  <p><LuArrowRight /></p>
                </div>
              </Link>
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


        {/* Mission et valeurs */}
        <div className="my-8">
          <div>
            <h1 className="text-center text-4xl font-bold w-full">Mission et valeurs</h1>
            <div className="flex justify-center items-center mt-4">
              <div className="h-1 w-32 bg-green-300"></div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 py-8 gap-8 h-max text-[18px]">
              {/* Mission */}
              <div className="w-full space-y-8">
                <div className="bg-white shadow-lg p-8 rounded-lg">
                  <h1 className="flex items-center gap-2 font-bold text-xl text-green-600 mb-4">
                    <p className="bg-green-300 p-4 rounded-full"><HiGlobeAlt color="green" /></p>
                    <p className="text-2xl">Notre mission</p>
                  </h1>
                  <div>
                    <p>Transformer les ressources énergétiques renouvelables de manière innovante pour produire une énergie propre, fiable et abordable pour tous. Nous nous engageons à créer un avenir énergétique durable qui profite aux communautés et préserve notre planète.</p>
                  </div>
                </div>
              </div>
              {/* Valeurs */}
              <div className="h-full space-y-8">
                <div className="bg-white shadow-lg p-8 rounded-lg h-full">
                  <h1 className="flex items-center gap-2 font-bold text-xl text-green-600 mb-4">
                    <p className="bg-green-300 p-4 rounded-full"><HiUserGroup color="green" /></p>
                    <p className="text-2xl">Nos valeurs</p>
                  </h1>
                  <div>
                    <ul className="grid grid-cols-2 space-y-2">
                      {
                        ["Professionnalisme", "Rigueur", "Esprit d'équipe", "Ecoute du client", "Intégrité", "Transparence", "Equité", "Innovation"].map((value, index) => (
                          <li key={index}>
                            <div className="flex items-center gap-2">
                              <p><LuCircleCheckBig color="green" /></p>
                              <p>{value}</p>
                            </div>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow">
              {/* Vidéo Youtube */}
              <iframe className="w-full" width="670" height="499" src="https://www.youtube.com/embed/ayX_GLi40K8?list=TLGGgUtPL6h5MB8xODA2MjAyNQ" title="Video institutionnelle KYA Energy Group" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
        </div>

        {/* Pourquoi choisir Kya ? */}
        <div className="flex flex-col gap-8 my-8">
          <div>
            <h1 className="text-center text-4xl font-bold w-full">Pourquoi choisir KYA-Energy Group ?</h1>
            <div className="flex justify-center items-center mt-4">
              <div className="h-1 w-32 bg-green-300"></div>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {
              [
                [<RiAwardLine color="green" />, "Certification ISO 9001:2015", "Qualité garantie selon les standards internationaux les plus exigeants."],
                [<RiFlashlightLine color="green" />, "Solutions Innovantes", "Technologies de pointe pour une efficacité énergétique maximale."],
                [<RiLeafLine color="green" />, "Impact environnemental", "Réduction significative de votre empreinte carbone."],
                [<RiShieldLine color="green" />, "Fiabilité Prouvée", "Équipements durables avec garanties étendues."],
                [<RiGroupLine color="green" />, "Accompagnement Complet", "De l'étude à la maintenance, nous vous accompagnons."],
                [<RiGlobeLine color="green" />, "Vision Globale", "Contribution à un avenir énergétique durable pour tous."]

              ].map((value, index) => (
                <div key={index} className="space-y-4 bg-white p-8 rounded-xl shadow">
                  <div>
                    <p className="p-4 bg-green-300 rounded-full w-max text-xl">
                      {value[0]}
                    </p>
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


      <div className="bg-green-700 text-white py-32 my-16">
        <div className="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-16">
          {
            [
              ["500+", "Installations réalisées"],
              ["10", "Années d'expérience"],
              ["98%", "Satisfaction client"],
              ["24/7", "Support technique"]
            ].map((value, index) => (
              <div key={index}>
                <p className="text-center font-bold text-4xl">{value[0]}</p>
                <p className="text-center mt-2">{value[1]}</p>
              </div>
            ))
          }
        </div>
      </div>


      <div>

      </div>
    </>
  );
}
