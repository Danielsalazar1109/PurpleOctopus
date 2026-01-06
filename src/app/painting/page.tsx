import Image from 'next/image'
import { SplitSection } from '../../components/SplitSection'
import { IconTitleDescription } from '@/components/IconTitleDescription'
import {
  Brush,
  Droplets,
  Home,
  Layers,
  Leaf,
  Package,
  ShieldCheck,
  Sparkles,
  Trash2,
  ClipboardCheck,
  CheckCircle2,
} from 'lucide-react'



export default function Painting() {
  const iconRowProps = {
    className: 'items-center',
    iconWrapperClassName: 'h-10 w-10 [&>svg]:h-10 [&>svg]:w-10',
    titleClassName: 'text-2xl md:text-2xl text-center mt-4',
  }

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <Image
          src="/images/painting2.jpeg"
          alt="Painting background"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-50"
        />
        <h1 className="relative z-10 mx-auto max-w-5xl px-6 text-center text-4xl md:text-5xl font-bold text-white">
          PAINTING
        </h1>
      </section>

      {/* Question */}
      <SplitSection imageSrc="/images/painting1.jpeg" imageAlt="Painting cleaning">
        <div className="space-y-4">
          <h2 className="text-base md:text-lg leading-relaxed text-gray-800">
            At Purple Octopus Service, we understand how important it is to get the job done right the first time. From a single room to full residential and commercial properties, we focus on quality, precision, and long-lasting results.
          </h2>
          <h2 className="text-base md:text-lg leading-relaxed text-gray-800">
          We offer interior and exterior painting, including walls, trim, decks, and fences, as well as surface preparation and finishing work. Whether you are refreshing your home or upgrading a business space, our professional team delivers clean, detailed, and durable results you can be proud of.
          </h2>
        </div>
      </SplitSection>
      <section className="py-16 px-6 md:px-12 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold mb-10 text-center text-purple-500">🖌 DURING PAINTING – CLEAN & PROFESSIONAL PROCCESS</h2>

          <div className="grid gap-4 mt-8">
            <IconTitleDescription
              {...iconRowProps}
              title="Floors, furniture, and surfaces are carefully protected before work begins."
              icon={<Layers />}
              description=""
            />
            <IconTitleDescription
              {...iconRowProps}
              title="Work areas are kept clean and organized throughout the project."
              icon={<Sparkles />}
              description=''
            />
            <IconTitleDescription
              {...iconRowProps}
              title="Paint drips and splatters are immediately wiped away."
              icon={<Droplets />}
              description=""
            />
            <IconTitleDescription
              {...iconRowProps}
              title="Tools and materials are handled to avoid dust and debris."
              icon={<Package />}
              description=""
            />
            <IconTitleDescription
              {...iconRowProps}
              title="Ventilation is maintained to keep the space fresh and safe."
              icon={<Leaf />}
              description=""
            />
            <IconTitleDescription
              {...iconRowProps}
              title="Walls and surfaces are continuously checked for smooth, even coverage."
              icon={<ClipboardCheck />}
              description=""
            />
            <IconTitleDescription
              {...iconRowProps}
              title="Trash and used materials are removed daily."
              icon={<Trash2 />}
              description=""
            />
            <IconTitleDescription
              {...iconRowProps}
              title="High-traffic areas are kept safe and accessible."
              icon={<ShieldCheck />}
              description=""
            />
            <IconTitleDescription
              {...iconRowProps}
              title="Special care is taken around fixtures, doors, and trim."
              icon={<Brush />}
              description=""
            />
          </div>
        </div>
      </section>
      <section className="py-16 px-6 md:px-12 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold mb-10 text-center text-purple-500">✨ AFTER PAINTING – FINAL CLEANING & PERFECTION</h2>
          <h2 className="text-base md:text-lg leading-relaxed text-gray-800"> Our team follows a structured cleaning system to ensure every part of your property is ready for the next guest:</h2>
          <div className="grid gap-4 mt-8">
            <IconTitleDescription
              {...iconRowProps}
              title="All protective coverings are carefully removed."
              icon={<Layers />}
              description=""
            />
            <IconTitleDescription
              {...iconRowProps}
              title="Floors, windowsills, and surrounding areas are cleaned."
              icon={<Brush />}
              description=''
            />
            <IconTitleDescription
              {...iconRowProps}
              title="Any paint marks or residue are wiped away."
              icon={<Droplets />}
              description=""
            />
            <IconTitleDescription
              {...iconRowProps}
              title="Fixtures, switches, and trim are detailed."
              icon={<Sparkles />}
              description=""
            />
            <IconTitleDescription
              {...iconRowProps}
              title="Surfaces are inspected for a flawless finish"
              icon={<CheckCircle2 />}
              description=""
            />
            <IconTitleDescription
              {...iconRowProps}
              title="Leftover materials and debris are removed"
              icon={<Trash2 />}
              description=""
            />
             <IconTitleDescription
              {...iconRowProps}
              title="The space is left clean, fresh, and ready to use."
              icon={<Sparkles />}
              description=""
            />
             <IconTitleDescription
              {...iconRowProps}
              title="No dust, no mess — just beautiful results."
              icon={<Sparkles />}
              description=""
            />
          </div>
        </div>
      </section>
    </div>
  )
}
