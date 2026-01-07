import Image from "next/image";
import Cor from "../../components/cor";
import { SplitSection } from "../../components/SplitSection";
import { BookNowCTA } from "@/components/BookNowCTA";
export default function Office() {
  return (
    <div className="w-full">

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <Image
          src="/images/office1.jpg"
          alt="Office background"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-50"
        />
        <h1 className="relative z-10 px-6 text-4xl md:text-5xl font-bold text-white">
          OFFICE CLEANING
        </h1>
      </section>

      {/* Question */}
      <SplitSection imageSrc="/images/office2.jpeg" imageAlt="Office cleaning">
        <div className="space-y-4">
          <h2 className="text-base md:text-lg leading-relaxed text-gray-800">Are you concerned about who has access to your building after hours? Do you worry about reliability, proper training, and the security of your workplace?</h2>
          <h2 className="text-base md:text-lg leading-relaxed text-gray-800">Are you currently paying for commercial cleaning that does not meet the standards your business deserves?</h2>
          <h2 className="text-base md:text-lg leading-relaxed text-gray-800">At Purple Octopus Service, we take these concerns seriously. That’s why we provide a dependable, professional, and hassle-free cleaning service designed to give you peace of mind and consistently high-quality results.</h2>
          <h2 className="text-base md:text-lg leading-relaxed text-gray-800">Our trained and trustworthy team follows clear procedures and pays close attention to detail, ensuring your office is clean, safe, and ready for your staff and clients every day. From workstations and common areas to restrooms and floors, we take care of every space so you can focus on running your business.</h2>
        </div>
      </SplitSection>

      {/* Reasons */}
      <section className="py-16 px-6 md:px-12 lg:px-16">
        <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl text-purple-600 font-bold mb-10 text-center">
          WHY CHOOSE PURPLE OCTOPUS SERVICE?
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center ">
         <ul className="space-y-6 border-2 border-purple-500 p-6 rounded-2xl shadow-lg">
            <li className="grid gap-2 md:grid-cols-[220px_1fr] md:gap-x-6">
              <p className="font-semibold text-gray-900">Eco-friendly & safe products</p>
              <p className="text-gray-800">We use environmentally responsible cleaning products that are safe for your staff, clients, and the planet, without compromising on cleanliness or effectiveness.</p>
            </li>
            <li className="grid gap-2 md:grid-cols-[220px_1fr] md:gap-x-6">
              <p className="font-semibold text-gray-900">Reliable and trustworthy team</p>
              <p className="text-gray-800">Our cleaners are carefully selected, trained, and professional, giving you peace of mind about who is in your workplace.</p>
            </li>
            <li className="grid gap-2 md:grid-cols-[220px_1fr] md:gap-x-6">
              <p className="font-semibold text-gray-900">Consistent, high-quality results</p>
              <p className="text-gray-800">We follow clear systems and checklists to ensure your office looks great after every visit, not just the first one.</p>
            </li>
            <li className="grid gap-2 md:grid-cols-[220px_1fr] md:gap-x-6">
              <p className="font-semibold text-gray-900">Flexible schedules</p>
              <p className="text-gray-800">Daytime, evening, or weekend cleanings to fit your business hours without disrupting your operations.</p>
            </li>
            <li className="grid gap-2 md:grid-cols-[220px_1fr] md:gap-x-6">
              <p className="font-semibold text-gray-900">Local, personalized service</p>
              <p className="text-gray-800">As a Victoria-based company, we offer hands-on management and customized cleaning plans for every client.</p>
            </li>
         </ul>
          <div className="flex justify-center">
            <Image
              src="/images/office3.jpeg"
              alt="Office Cleaning"
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