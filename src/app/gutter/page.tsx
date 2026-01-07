import Image from 'next/image'
import { SplitSection } from '../../components/SplitSection'
import { FaqSection, type FaqItem } from '../../components/FaqSection'
import { IconTitleDescription } from '@/components/IconTitleDescription'
import { BookNowCTA } from '@/components/BookNowCTA'
import { Calendar, MessageCircle, Shield, ShieldCheck, User } from 'lucide-react'

const faqs: FaqItem[] = [
  {
    q: 'Why is gutter cleaning important?',
    a: 'Clean gutters allow rainwater to flow safely away from your home. When gutters are clogged, water can overflow and cause damage to your roof, siding, foundation, and landscaping.',
  },
  {
    q: 'How often should gutters be cleaned?',
    a: 'On Vancouver Island, we recommend gutter cleaning at least once or twice a year, especially in the fall and spring due to leaves, moss, and heavy rainfall.',
  },
  {
    q: 'What happens if I don’t clean my gutters?',
    a: 'Clogged gutters can lead to water overflow, roof leaks, wood rot, mold, and even foundation problems. Regular cleaning prevents costly repairs.',
  },
  {
    q: 'Do you flush the gutters and downspouts?',
    a: 'Yes. We remove debris and flush the entire system to ensure water flows freely through the gutters and downspouts.',
  },
  {
    q: 'Is gutter cleaning safe for my home?',
    a: 'Absolutely. At Purple Octopus Service, we use safe, professional methods that protect your roof, gutters, and property while delivering effective results.',
  },
 {
    q: 'Can clogged gutters cause ice damage in winter?',
    a: 'Yes. Blocked gutters can trap water, which may freeze and create ice buildup that damages gutters and roofing materials.',
  },
  {
    q: 'Do you check for gutter damage?',
    a: 'Yes. While cleaning, we also inspect your gutters for leaks, sagging, or loose sections and let you know if we notice any issues.',
  },
  {
    q: 'How long does gutter cleaning take?',
    a: 'Most homes can be completed within 1–2 hours, depending on the size of the property and the amount of buildup.',
  },
  {
    q: 'Is gutter cleaning messy?',
    a: 'No — we clean up all debris and leave your property neat and tidy after the service.',
  },

]

export default function Gutter() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <Image
          src="/images/gutter2.jpeg"
          alt="Removal background"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-50"
        />
        <h1 className="relative z-10 px-6 text-4xl md:text-5xl font-bold text-white">
          GUTTER CLEANING
        </h1>
      </section>

      {/* Question */}
      <SplitSection imageSrc="/images/gutter1.jpeg" imageAlt="Removal cleaning">
        <div className="space-y-4">
          <h2 className="text-base md:text-lg font-semibold leading-relaxed text-gray-800">
            DOING THE DIRTY WORK SO YOU DO NOT HAVE TO.
          </h2>
          <h2 className="text-base md:text-lg leading-relaxed text-gray-800">
            At Purple Octopus Service, we specialize in keeping gutter systems clean, clear, and working properly for homes and businesses across Victoria and the surrounding areas. With Vancouver Island’s coastal climate bringing frequent rain, wind, and falling debris, well-maintained gutters are essential to controlling water flow and protecting your property from costly water damage.
          </h2>
          <h2 className="text-base md:text-lg leading-relaxed text-gray-800">
           Our professional gutter cleaning and flushing services are designed to keep your system performing at its best year-round. By removing leaves, moss, and buildup, we help prevent blockages, overflow, and foundation damage, ensuring rainwater is directed safely away from your home or building. With Purple Octopus Service, your gutters stay clean, efficient, and ready for every season.
          </h2>
        </div>
      </SplitSection>

      <FaqSection title="WHAT YOU SHOULD KNOW" items={faqs} />
          <BookNowCTA />
      <section className="py-16 px-6 md:px-12 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold mb-10 text-center text-purple-600">PEACE OF MIND</h2>

          <div className="grid gap-4">
            <IconTitleDescription
              title="Quality Guarantee"
              icon={<ShieldCheck />}
              description="We stand behind our work and make sure every service meets our high standards."
            />
            <IconTitleDescription
              title="No Long-Term Contracts"
              icon={<Calendar />}
              description="Our flexible service plans allow you to cancel anytime if you’re not satisfied."
            />
            <IconTitleDescription
              title="Fully Insured Covered"
              icon={<Shield />}
              description="Your home and business are protected at all times."
            />
            <IconTitleDescription
              title="Trusted & Professional Team"
              icon={<User />}
              description="Our staff is trained, reliable, and respectful of your space."
            />
            <IconTitleDescription
              title="Responsive Customer Support"
              icon={<MessageCircle />}
              description="We’re always available to answer questions and address your needs."
            />
          </div>
        </div>
      </section>

    </div>
  )
}
