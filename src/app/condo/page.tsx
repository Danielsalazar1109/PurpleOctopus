import Image from "next/image";
import Cor from "../../components/cor";
import { SplitSection } from "../../components/SplitSection";
import { BookNowCTA } from "@/components/BookNowCTA";
export default function Condo() {
  return (
    <div className="w-full">

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <Image
          src="/images/condo1.jpeg"
          alt="Condo background"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-50"
        />
        <h1 className="relative z-10 px-6 text-4xl md:text-5xl font-bold text-white">
          CONDO CLEANING
        </h1>
      </section>

      {/* Question */}
      <SplitSection imageSrc="/images/condo2.jpeg" imageAlt="Condo cleaning">
        <div className="space-y-4">
          <h2 className="text-base md:text-lg leading-relaxed text-gray-800">Untidy corridors, entrance areas, shared lounges, and staircases create a poor first impression as soon as people enter the building?</h2>
          <h2 className="text-base md:text-lg leading-relaxed text-gray-800">Strong chemical products often leave lingering smells and residues that can be uncomfortable for residents, pets, and on-site staff?</h2>
          <h2 className="text-base md:text-lg leading-relaxed text-gray-800">When cleaning services lack consistency or are carried out by untrained teams, the result is patchy cleanliness, increased complaints, and added stress for the strata committee?</h2>
          <h2 className="text-base md:text-lg leading-relaxed text-gray-800">You shouldn’t need to constantly follow up or deal with preventable issues — a dependable, safe cleaning service should work seamlessly and deliver results you can trust.</h2>
        </div>
      </SplitSection>

      {/* Reasons */}
      <section className="py-16 px-6 md:px-12 lg:px-16">
        <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-10 text-center text-purple-600">
          WHY CHOOSE PURPLE OCTOPUS SERVICE
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center ">
         <ul className="space-y-6 border-2 border-purple-500 p-6 rounded-2xl shadow-lg">
            <li className="grid gap-2 md:grid-cols-[220px_1fr] md:gap-x-6">
              <p className="font-semibold text-gray-900">Safe & non-toxic cleaning</p>
              <p className="text-gray-800">We rely on locally produced, natural cleaning solutions, along with a fragrance-free, hospital-grade disinfectant that safely breaks down into water and oxygen. There are no harmful residues, so residents, families, pets, and staff can enjoy a healthier indoor environment.</p>
            </li>
            <li className="grid gap-2 md:grid-cols-[220px_1fr] md:gap-x-6">
              <p className="font-semibold text-gray-900">Reliable,stress-free service</p>
              <p className="text-gray-800">Our structured cleaning approach takes care of every detail — carefully screened team members, thorough training, routine quality inspections, and straightforward billing. Once services begin, everything runs smoothly without added effort from you.</p>
            </li>
            <li className="grid gap-2 md:grid-cols-[220px_1fr] md:gap-x-6">
              <p className="font-semibold text-gray-900">Flexible & no-risk agreements</p>
              <p className="text-gray-800">No contracts tying you down and no complicated cancellation terms. You’re free to adjust or end services with just one day’s notice.</p>
            </li>
            <li className="grid gap-2 md:grid-cols-[220px_1fr] md:gap-x-6">
              <p className="font-semibold text-gray-900">Locally owned and operated in Victoria, BC.</p>
              <p className="text-gray-800">A dedicated account manager gives you one reliable point of contact, backed by our out-of-hours phone line whenever you need support.</p>
            </li>
         </ul>
          <div className="flex justify-center">
            <Image
              src="/images/condo3.jpeg"
              alt="Condo Cleaning"
              width={500}
              height={500}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
        </div>
      </section>

           <BookNowCTA />

      {/* Peace of mind */}
      <Cor />

    </div>
  );
}