import { SplitSection } from "@/components/SplitSection";
import { IconTitleDescription } from "@/components/IconTitleDescription";
import {
  Calendar,
  CalendarDays,
  CalendarClock,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

export default function Residential() {
  return (
    <div className="w-full">
      {/* Hero */}
       <section className="relative h-screen flex items-center justify-center text-center">
              <Image
                src="/images/residential1.jpeg"
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
      <SplitSection imageSrc="/images/residential2.jpeg" imageAlt="Office cleaning">
        <div className="space-y-4">
          <h2 className="text-base md:text-lg leading-relaxed text-gray-800">
            At Purple Octopus Service, we take a detail-oriented and personalized
            approach to residential cleaning, ensuring every home is left fresh,
            sanitized, and sparkling to our highest standards.
          </h2>
          <h2 className="text-base md:text-lg leading-relaxed text-gray-800">
            From kitchens and bathrooms to bedrooms and living spaces, we focus
            on the areas that matter most to create a clean, healthy, and
            comfortable environment for you and your family.
          </h2>
          <h2 className="text-base md:text-lg leading-relaxed text-gray-800">
            Our friendly, professional team offers flexible scheduling and
            reliable service, giving you peace of mind that your home is always
            in good hands.
          </h2>
        </div>
      </SplitSection>

      {/* Our Services */}
      <section className="py-16 px-6 md:px-12 lg:px-16 bg-gray-50">
        <h2 className="text-4xl font-bold mb-10 text-center">OUR SERVICES</h2>

        <div className="mx-auto mt-10 grid max-w-6xl gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <IconTitleDescription
              icon={<Calendar />}
              title="Weekly"
              description="Our weekly service is perfect for households that want their home to stay consistently fresh and organized. If life is busy and you don’t have time to keep up with dusting, vacuuming, and general upkeep, we take care of it for you."
              description2="This option is ideal for families, homes with pets, or anyone who enjoys having a spotless home week after week without the stress."
              layout="column"
            />
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <IconTitleDescription
              icon={<CalendarDays />}
              title="Bi-Weekly"
              description="Our bi-weekly service is designed for those who want regular support without committing to weekly visits. We handle the deeper cleaning and upkeep so your home stays clean and comfortable between visits."
              description2="This is one of our most popular options because it offers the perfect balance between maintenance, convenience, and affordability."
              layout="column"
            />
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <IconTitleDescription
              icon={<CalendarClock />}
              title="Monthly"
              description="If you already keep your home tidy but need extra help with detailed cleaning, our monthly service is a great solution. We focus on deeper scrubbing, buildup, and areas that need extra attention."
              description2="This option is perfect for homeowners who want professional results while staying within a budget and keeping their space feeling fresh all month long."
              layout="column"
            />
          </div>
        </div>

        <div className="mx-auto mt-8 grid max-w-4xl gap-8 md:grid-cols-2 justify-items-center">
          <div className="w-full rounded-2xl bg-white p-6 shadow-lg">
            <IconTitleDescription
              icon={<CheckCircle2 />}
              title="One-Time Cleaning"
              description="Our one-time cleaning service is perfect when your home needs a fresh start or extra attention. Whether you’re preparing for guests, moving in or out, or just want your space to feel refreshed, we provide a thorough and reliable clean tailored to your needs."
              description2="This option is ideal for special occasions, seasonal cleanups, or anytime you want your home to look and feel its best without committing to a recurring service."
              layout="column"
            />
          </div>

          <div className="w-full rounded-2xl bg-white p-6 shadow-lg">
            <IconTitleDescription
              icon={<Sparkles />}
              title="Deep Cleaning"
              description="Our deep cleaning service is designed to tackle the areas that don’t get cleaned regularly. We focus on built-up dirt, grime, and hidden spots to restore your home to a truly fresh and healthy condition."
              description2="This service is perfect for first-time clients, spring cleaning, or whenever your home needs a more detailed and intensive clean to bring it back to its best."
              layout="column"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
