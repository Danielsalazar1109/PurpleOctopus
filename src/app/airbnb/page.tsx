import Image from 'next/image'
import { SplitSection } from '../../components/SplitSection'
import { IconTitleDescription } from '@/components/IconTitleDescription'
import {
  Bath,
  BedDouble,
  Brush,
  Clock,
  Droplets,
  Home,
  Package,
  ShieldCheck,
  Sparkles,
  SprayCan,
  Trash2,
} from 'lucide-react'



export default function Airbnb() {
  const iconRowProps = {
    className: 'items-center',
    iconWrapperClassName: 'h-16 w-16 [&>svg]:h-10 [&>svg]:w-10',
    titleClassName: 'text-2xl md:text-2xl text-center mt-4',
  }

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <Image
          src="/images/airbnb1.jpeg"
          alt="Airbnb background"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-50"
        />
        <h1 className="relative z-10 mx-auto max-w-5xl px-6 text-center text-4xl md:text-5xl font-bold text-white">
          AIRBNB CLEANING
        </h1>
      </section>

      {/* Question */}
      <SplitSection imageSrc="/images/airbnb2.jpeg" imageAlt="Airbnb cleaning">
        <div className="space-y-4">
          <h2 className="text-base md:text-lg leading-relaxed text-gray-800">
            Keep your short-term rental guest-ready with Purple Octopus Service’s professional Airbnb and vacation rental cleaning services in Victoria, BC. We specialize in fast, reliable, and detail-focused cleanings designed specifically for short-term rentals, ensuring every guest walks into a fresh, welcoming, and spotless space.
          </h2>
          <h2 className="text-base md:text-lg leading-relaxed text-gray-800">
           Our experienced team understands the importance of quick turnovers, consistency, and high standards in the hospitality industry. From bedrooms and bathrooms to kitchens and common areas, we take care of every detail so your property always makes a great first impression. With Purple Octopus Service, you can enjoy peace of mind knowing your rental is always ready for your next guest.
          </h2>
        </div>
      </SplitSection>
      <section className="py-16 px-6 md:px-12 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold mb-10 text-center text-purple-500">WHY CHOOSE PURPLE OCTOPUS SERVICE FOR YOUR VACATION RENTAL CLEANING</h2>
          <h2 className="text-base md:text-lg leading-relaxed text-gray-800"> At Purple Octopus Service, we understand the fast-paced nature of short-term rentals and the high expectations of today’s guests. That’s why we provide reliable, detail-focused cleaning that keeps your Airbnb or vacation home looking fresh, comfortable, and ready for every arrival.</h2>

          <div className="grid gap-4 mt-8">
            <IconTitleDescription
              {...iconRowProps}
              title="Complete cleaning of all living areas, bedrooms, and bathrooms"
              icon={<Home />}
              description=""
            />
            <IconTitleDescription
              {...iconRowProps}
              title="Flexible scheduling to match guest check-outs and check-ins."
              icon={<Clock />}
              description=''
            />
            <IconTitleDescription
              {...iconRowProps}
              title="Careful attention to high-touch surfaces for a cleaner, healthier stay"
              icon={<Droplets />}
              description=""
            />
            <IconTitleDescription
              {...iconRowProps}
              title="Restocking of basic supplies such as paper products, soaps, and linens (if provided)"
              icon={<Package />}
              description=""
            />
            <IconTitleDescription
              {...iconRowProps}
              title="Professional sanitizing practices to help maintain a safe and welcoming environment"
              icon={<ShieldCheck />}
              description=""
            />
          </div>
        </div>
      </section>
      <section className="py-16 px-6 md:px-12 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold mb-10 text-center text-purple-500">OUR AIRBNB & VACATION RENTAL CLEANING PROCESS</h2>
          <h2 className="text-base md:text-lg leading-relaxed text-gray-800"> Our team follows a structured cleaning system to ensure every part of your property is ready for the next guest:</h2>
          <div className="grid gap-4 mt-8">
            <IconTitleDescription
              {...iconRowProps}
              title="Cleaning and sanitizing kitchen surfaces and appliances."
              icon={<SprayCan />}
              description=""
            />
            <IconTitleDescription
              {...iconRowProps}
              title="Vacuuming and mopping all floors."
              icon={<Brush />}
              description=''
            />
            <IconTitleDescription
              {...iconRowProps}
              title="Wiping down furniture, counters, and frequently used surfaces."
              icon={<Sparkles />}
              description=""
            />
            <IconTitleDescription
              {...iconRowProps}
              title="Thoroughly cleaning and disinfecting bathrooms"
              icon={<Bath />}
              description=""
            />
            <IconTitleDescription
              {...iconRowProps}
              title="Making beds with fresh linens"
              icon={<BedDouble />}
              description=""
            />
            <IconTitleDescription
              {...iconRowProps}
              title="Emptying trash and replacing liners"
              icon={<Trash2 />}
              description=""
            />
          </div>
        </div>
      </section>
    </div>
  )
}
