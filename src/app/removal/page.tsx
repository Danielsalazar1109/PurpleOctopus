import Image from 'next/image'
import { SplitSection } from '../../components/SplitSection'
import { FaqSection, type FaqItem } from '../../components/FaqSection'

const faqs: FaqItem[] = [
  {
    q: 'Why is moss bad for my roof?',
    a: 'Moss traps moisture against your shingles, which can cause them to lift, crack, and deteriorate. Over time, this can lead to leaks, rot, and expensive roof repairs or replacement.',
  },
  {
    q: 'How often should moss be removed?',
    a: 'In Victoria’s damp climate, most homes benefit from routine removal and preventative maintenance every 12–24 months depending on shade and moisture.',
  },
  {
    q: 'Does moss removal damage my roof?',
    a: 'When done properly, moss removal is completely safe. At Purple Octopus Service, we use gentle, non-damaging methods that protect your shingles and extend the life of your roof.',
  },
  {
    q: 'What happens if I don’t remove moss?',
    a: 'If moss is left untreated, it will continue to grow, hold moisture, and slowly damage your roof. This can cause shingles to lift, water to seep in, and costly structural issues over time.',
  },
  {
    q: 'Is moss removal cheaper than replacing a roof?',
    a: 'Yes — moss removal is a small investment compared to the high cost of roof repairs or full replacement. It helps extend the life of your roof and saves money long-term.',
  },
]

export default function Removal() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <Image
          src="/images/removal1.jpeg"
          alt="Removal background"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-50"
        />
        <h1 className="relative z-10 px-6 text-4xl md:text-5xl font-bold text-white">
          Moss Removal
        </h1>
      </section>

      {/* Question */}
      <SplitSection imageSrc="/images/removal2.jpeg" imageAlt="Removal cleaning">
        <div className="space-y-4">
          <h2 className="text-base md:text-lg leading-relaxed text-gray-800">
            Moss growth on roofs, walkways, and exterior surfaces is more than just an aesthetic issue — it can cause serious damage if left untreated. In Victoria’s damp coastal climate, moss grows quickly and traps moisture, which can lead to premature wear, leaks, and costly repairs. At Purple Octopus Service, we provide safe and effective moss removal to protect your property and keep it looking its best.
          </h2>
          <h2 className="text-base md:text-lg leading-relaxed text-gray-800">
            If moss is not removed, it will continue to spread, retain moisture, and weaken roofing materials. Over time, this can lead to roof deterioration, leaks, and the need for early replacement. Routine moss removal is a simple, affordable way to protect your investment, maintain your home’s appearance, and avoid unnecessary repairs.
          </h2>
        </div>
      </SplitSection>

      <FaqSection title="What You Should Know" items={faqs} />
    </div>
  )
}
