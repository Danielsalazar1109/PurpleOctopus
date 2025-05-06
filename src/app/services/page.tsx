'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

export default function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: false })

  const slides = [
    {
      type: "image",
      src: "/images/moss.jpg",
      title: "MOSS REMOVAL",
      subtitle: "Excess moss allows moisture to remain on the roof, causing irreparable damage.",
      description: "Reduces long-term roof renovation costs. Improves the overall appearance of your home. Prevents fungal or bacterial growth that can be harmful to health."
    },
    {
      type: "video",
      src: "/videos/mossTreatment.mp4",
      title: "MOSS TREATMENT",
      subtitle: "Keeping your roofs in perfect condition.",
      description: "Annual treatments help prevent moss growth. Controls fungi and bacteria caused by moss. Extends the lifespan of your roof."
    },
    {
      type: "image",
      src: "/images/squeegee.jpg",
      title: "WINDOWS CLEANING",
      subtitle: "Don't let dirt block your view. Squeegee cleaning services.",
      description: "Enhances visibility and natural light. Maintains the glass quality by preventing deterioration. Includes interior and exterior window cleaning."
    },
    {
      type: "video",
      src: "/videos/cleaning.mp4",
      title: "HOUSE CLEANING",
      subtitle: "Keep your home away from dirt.",
      description: "Deep cleaning for all household areas. Post-construction cleaning service. Vacuuming, wet and dry mopping."
    },
    {
      type: "image",
      src: "/images/gutter.jpg",
      title: "GUTTER CLEANING",
      subtitle: "Proper gutter function ensures water flow.",
      description: "Removes debris and stagnant waste. Prevents leaks and wall damage. Helps avoid rodent infestations."
    },
    {
      type: "video",
      src: "/videos/painting.mp4",
      title: "PAINTING",
      subtitle: "Keep your home looking brand new.",
      description: "Refreshes your home’s appearance. Enhances lighting and atmosphere. Prevents fungi and dampness."
    }
  ];

  const goToNext = () => {
    if (emblaApi) emblaApi.scrollNext()
  }

  const goToPrevious = () => {
    if (emblaApi) emblaApi.scrollPrev()
  }

  return (
    <div className="flex justify-center items-center py-12">
      <div className="relative w-full max-w-7xl overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_30%] mx-4 p-6 bg-white text-black rounded-lg text-center">
              {slide.type === "image" ? (
                <Image src={slide.src} alt={slide.title} width={800} height={450} className="rounded-md mb-4" />
              ) : (
                <video src={slide.src} autoPlay loop muted className="w-full rounded-md mb-4" style={{ maxHeight: '400px' }} />
              )}
              <h2 className="text-2xl font-bold text-purple-700">{slide.title}</h2>
              <h3 className="text-lg font-semibold text-gray-700">{slide.subtitle}</h3>
              <ul className="text-gray-600 mt-2 list-disc list-inside text-left">
                {slide.description.split('.').filter(item => item.trim() !== '').map((item, i) => (
                  <li key={i}>{item.trim()}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Controles de navegación */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
        >
          &gt;
        </button>
      </div>
    </div>
  )
}
