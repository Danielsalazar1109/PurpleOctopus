import Image from 'next/image'
import React from 'react'

type SplitSectionProps = {
  children: React.ReactNode
  imageSrc: string
  imageAlt: string
  imagePosition?: 'left' | 'right'
  sectionClassName?: string
  imageSizes?: string
}

export function SplitSection({
  children,
  imageSrc,
  imageAlt,
  imagePosition = 'right',
  sectionClassName = 'py-16 px-6 md:px-12 lg:px-16',
  imageSizes = '(min-width: 768px) 50vw, 100vw',
}: SplitSectionProps) {
  const contentOrder = imagePosition === 'left' ? 'md:order-2' : 'md:order-1'
  const imageOrder = imagePosition === 'left' ? 'md:order-1' : 'md:order-2'

  return (
    <section className={sectionClassName}>
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div className={contentOrder}>{children}</div>
        <div className={"relative h-64 md:h-[420px] rounded-xl overflow-hidden shadow-lg " + imageOrder}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes={imageSizes}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
