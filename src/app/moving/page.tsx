import Image from 'next/image'
import { SplitSection } from '../../components/SplitSection'
import { CheckCircle2, DollarSign, Home, Smile, Sparkles } from 'lucide-react'

export default function Moving() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <Image
          src="/images/moving1.jpeg"
          alt="Treatment background"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-50"
        />
        <h1 className="relative z-10 px-6 text-4xl md:text-5xl font-bold text-white">
          MOVE-IN/MOVE-OUT CLEANING
        </h1>
      </section>

      {/* Question */}
      <SplitSection imageSrc="/images/moving2.jpeg" imageAlt="Treatment cleaning">
        <div className="space-y-4">
          <h2 className="text-base md:text-lg leading-relaxed text-gray-800">
            Moving is stressful — cleaning doesn’t have to be. At Purple Octopus Service, we provide detailed move-in and move-out cleaning services in Victoria and surrounding areas, helping you leave your old space spotless and your new home fresh, clean, and ready to enjoy.
          </h2>
          <h2 className="text-base md:text-lg leading-relaxed text-gray-800">
            In addition to professional cleaning, we also offer Contents Pack-Up and Contents Reset services to make your move even easier. Our team can carefully pack your belongings into boxes, including fragile items, and clean them before they are placed in your new home. Once you arrive, we can also help unpack and reset your contents so everything is organized, clean, and ready to use. This allows you to focus on your move without the stress of cleaning, packing, and setting up your home.
          </h2>
          <h2 className="text-base md:text-lg leading-relaxed text-gray-800">
            With Purple Octopus Service, you get a complete, worry-free moving solution — from packing and cleaning to setting up your new space — all handled with care, professionalism, and attention to detail.
          </h2>
        </div>
      </SplitSection>

        <section className="py-16 px-6 md:px-12 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold mb-10 text-center">WHY CHOOSE US FOR MOVE-IN / MOVE-OUT CLEANING IN VICTORIA?</h2>
          <h2 className="text-xl text-center">Choosing Purple Octopus Service for your move-in or move-out cleaning means saving time, reducing stress, and ensuring professional results when it matters most. Moving can be overwhelming, and our experienced team is here to take the cleaning off your plate so you can focus on your transition.</h2>

          <div className="grid gap-4 mt-10">
            <div className="flex items-start gap-3 rounded-xl bg-white p-4">
              <Smile className="mt-1 h-6 w-6 shrink-0 text-purple-700" />
              <p className="text-lg font-semibold text-gray-900">Minimize stress and stay focused on your move</p>
            </div>

            <div className="flex items-start gap-3 rounded-xl bg-white p-4">
              <DollarSign className="mt-1 h-6 w-6 shrink-0 text-purple-700" />
              <p className="text-lg font-semibold text-gray-900">Increase your chances of getting your security deposit back</p>
            </div>

            <div className="flex items-start gap-3 rounded-xl bg-white p-4">
              <Home className="mt-1 h-6 w-6 shrink-0 text-purple-700" />
              <p className="text-lg font-semibold text-gray-900">Present your home at its best for buyers, landlords, and property managers</p>
            </div>

            <div className="flex items-start gap-3 rounded-xl bg-white p-4">
              <Sparkles className="mt-1 h-6 w-6 shrink-0 text-purple-700" />
              <p className="text-lg font-semibold text-gray-900">Start fresh in a clean, sanitized, and welcoming new space</p>
            </div>

            <div className="flex items-start gap-3 rounded-xl bg-white p-4 ">
              <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-purple-700" />
              <p className="text-lg font-semibold text-gray-900">Rely on trained, professional cleaners who follow consistent quality standards</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
