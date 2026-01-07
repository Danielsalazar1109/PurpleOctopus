import Image from 'next/image'
import { SplitSection } from '../../components/SplitSection'
import { FaqSection, type FaqItem } from '../../components/FaqSection'
import { BookNowCTA } from '@/components/BookNowCTA'

const faqs: FaqItem[] = [
  {
    q: 'Do you use chemicals? Are they safe?',
    a: 'We use eco-friendly treatments that are safe for your roof, pets, plants, and the environment while still being highly effective at stopping moss regrowth.',
  },
  {
    q: 'How long does moss removal last?',
    a: 'After treatment, most roofs stay moss-free for 12–24 months, depending on conditions. Regular maintenance helps keep your roof protected long-term.',
  },
  {
    q: 'Can moss grow back?',
    a: 'Yes, moss can return over time, especially in shaded or damp areas. That’s why we apply treatments designed to slow regrowth and recommend routine maintenance.',
  },
  {
    q: 'Does moss removal improve the look of my home?',
    a: 'Absolutely. Removing moss instantly improves your roof’s appearance, making your home look cleaner, newer, and better maintained.',
  },
]


export default function Treatment() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <Image
          src="/images/treatment2.jpeg"
          alt="Treatment background"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-50"
        />
        <h1 className="relative z-10 px-6 text-4xl md:text-5xl font-bold text-white">
          MOSS TREATMENT
        </h1>
      </section>

      {/* Question */}
      <SplitSection imageSrc="/images/treatment1.jpeg" imageAlt="Treatment cleaning">
        <div className="space-y-4">
          <h2 className="text-base md:text-lg leading-relaxed text-gray-800">
            In a coastal environment like Vancouver Island, roofs are constantly exposed to moisture, shade, and mild temperatures — the perfect conditions for moss to grow. Moss may look harmless at first, but it traps moisture and slowly breaks down roofing materials. This leads to lifted shingles, poor drainage, and eventually leaks and structural damage. That’s why moss control and treatment are just as important as removing the visible growth.
          </h2>
          <h2 className="text-base md:text-lg leading-relaxed text-gray-800">
            Without regular treatment, moss will continue to spread and weaken your roof, leading to costly repairs or premature replacement. Routine moss control is a simple, affordable way to protect your home, improve curb appeal, and avoid unnecessary damage in our unique coastal climate.
          </h2>
          <h2 className="text-base md:text-lg leading-relaxed text-gray-800">
            We recommend applying moss treatment every 12 to 18 months to keep roofs protected year-round and to extend their lifespan.
          </h2>
        </div>
      </SplitSection>
          <BookNowCTA />

      {/* FAQ */}
      <FaqSection title="WHAT YOU SHOULD KNOW" items={faqs} />

    </div>
  )
}
