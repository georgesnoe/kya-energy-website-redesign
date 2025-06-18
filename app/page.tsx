import { LuLeaf, LuCircleCheckBig, LuArrowRight } from "react-icons/lu";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto">
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
    </div>
  );
}
