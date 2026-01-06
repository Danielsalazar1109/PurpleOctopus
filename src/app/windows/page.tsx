import Image from 'next/image'
import { SplitSection } from '../../components/SplitSection'
import { FaqSection, type FaqItem } from '../../components/FaqSection'

const faqs: FaqItem[] = [
  {
    q: 'How often should windows be cleaned?',
    a: 'In Victoria’s coastal climate, we recommend professional window cleaning 2–4 times per year to remove salt, rain spots, and buildup.',
  },
  {
    q: 'Does regular window cleaning really make a difference?',
    a: 'Yes. Clean windows allow more natural light into your home, improve your view, and prevent long-term glass damage caused by dirt and mineral deposits.',
  },
  {
    q: 'Do you clean both interior and exterior windows?',
    a: 'Yes, we offer interior and exterior window cleaning, including frames, tracks, and sills when requested.',
  },
  {
    q: 'Are your cleaning methods safe for my windows?',
    a: 'Absolutely. We use professional tools and safe, non-abrasive products to protect your glass and window frames.',
  },
  {
    q: 'Can you remove hard water stains?',
    a: 'Yes, we use specialized solutions to reduce or remove mineral buildup and restore clarity to your windows.',
  },
  {
    q: 'Do I need to be home during the service?',
    a: 'Not necessarily. As long as we have access, our trained and trusted team can complete the service while you are away.',
  },

]

export default function Windows() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <Image
          src="/images/windows1.jpeg"
          alt="Treatment background"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-50"
        />
        <h1 className="relative z-10 px-6 text-4xl md:text-5xl font-bold text-white">
          WINDOWS CLEANING
        </h1>
      </section>

      {/* Question */}
      <SplitSection imageSrc="/images/windows2.jpeg" imageAlt="Treatment cleaning">
        <div className="space-y-4">
          <h2 className="text-base md:text-lg leading-relaxed text-gray-800">
            Clean windows do more than improve the look of your home — they transform how your entire space feels. At Purple Octopus Service, we believe that professionally cleaned windows allow more natural light to enter, brighten your rooms, and create a clearer, more inviting environment. Over time, dirt, salt, pollen, and hard water stains build up on glass, especially in Victoria’s coastal climate, making windows appear cloudy and dull.
          </h2>
          <h2 className="text-base md:text-lg leading-relaxed text-gray-800">
            Our professional window cleaning service removes streaks, buildup, and debris safely and effectively, leaving your windows crystal clear. With Purple Octopus Service, you’ll enjoy brighter interiors, better views, and a cleaner, more polished look for your home or business all year round.
          </h2>
        </div>
      </SplitSection>

      <FaqSection title="What You Should Know" items={faqs} />
    </div>
  )
}
