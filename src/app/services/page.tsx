'use client'
import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'center', 
    loop: true,
    dragFree: true,
    containScroll: 'trimSnaps'
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const slides = [
    {
      type: "image",
      src: "/images/moss.jpg",
      link: "/removal",
      title: "MOSS REMOVAL",
      subtitle: "Excess moss allows moisture to remain on the roof, causing irreparable damage.",
      description: "Reduces long-term roof renovation costs. Improves the overall appearance of your home. Prevents fungal or bacterial growth that can be harmful to health."
    },
    {
      type: "video",
      src: "/videos/mossTreatment.mp4",
      link: "/treatment",
      title: "MOSS TREATMENT",
      subtitle: "Keeping your roofs in perfect condition.",
      description: "Annual treatments help prevent moss growth. Controls fungi and bacteria caused by moss. Extends the lifespan of your roof."
    },
    {
      type: "image",
      src: "/images/squeegee.jpg",
      link: "/windows",
      title: "WINDOWS CLEANING",
      subtitle: "Don't let dirt block your view. Squeegee cleaning services.",
      description: "Enhances visibility and natural light. Maintains the glass quality by preventing deterioration. Includes interior and exterior window cleaning."
    },
    {
      type: "video",
      src: "/videos/cleaning.mp4",
      link: "/office",
      title: "OFFICE CLEANING",
      subtitle: "Keep your home away from dirt.",
      description: "Deep cleaning for all household areas. Post-construction cleaning service. Vacuuming, wet and dry mopping."
    },
    {
      type: "image",
      src: "/images/gutter.jpg",
      link: "/gutter",
      title: "GUTTER CLEANING",
      subtitle: "Proper gutter function ensures water flow.",
      description: "Removes debris and stagnant waste. Prevents leaks and wall damage. Helps avoid rodent infestations."
    },
    {
      type: "video",
      src: "/videos/painting.mp4",
      link: "/painting",
      title: "PAINTING",
      subtitle: "Keep your home looking brand new.",
      description: "Refreshes your home’s appearance. Enhances lighting and atmosphere. Prevents fungi and dampness."
    }
  ];

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  useEffect(() => {
    if (!emblaApi) return

    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  const goToNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const goToPrevious = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  return (
    <div className="flex flex-col justify-center items-center py-16 bg-gradient-to-b from-gray-100 to-white">
      <h1 className="text-3xl md:text-4xl font-bold text-purple-700 mb-8 text-center">OUR SERVICES</h1>
      
      <div className="relative w-full max-w-7xl overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className="flex-[0_0_100%] sm:flex-[0_0_33%] md:flex-[0_0_33%] lg:flex-[0_0_33%] mx-2 sm:mx-3 md:mx-4 p-4 sm:p-5 md:p-6 bg-white text-black rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center transform hover:-translate-y-1 transition-transform"
            >
              <Link href={slide.link ?? '#'} className="block h-full">
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-video">
                  {slide.type === "image" ? (
                    <Image 
                      src={slide.src} 
                      alt={slide.title} 
                      width={800} 
                      height={450} 
                      className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-105" 
                    />
                  ) : (
                    <video 
                      src={slide.src} 
                      autoPlay 
                      loop 
                      muted 
                      className="w-full h-full object-cover rounded-lg" 
                    />
                  )}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-purple-700 mb-2">{slide.title}</h2>
                <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-3">{slide.subtitle}</h3>
                <ul className="text-sm sm:text-base text-gray-600 mt-2 list-disc list-outside pl-5 text-left space-y-2">
                  {slide.description.split('.').filter(item => item.trim() !== '').map((item, i) => (
                    <li key={i} className="leading-snug">{item.trim()}</li>
                  ))}
                </ul>
              </Link>
            </div>
          ))}
        </div>
        
        {/* Navigation controls */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 md:p-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center text-sm sm:text-base md:text-lg shadow-md transition-all duration-300 hover:scale-110 z-10"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 md:p-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center text-sm sm:text-base md:text-lg shadow-md transition-all duration-300 hover:scale-110 z-10"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Pagination dots */}
      <div className="flex justify-center mt-6">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`mx-1 w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex 
                ? 'bg-purple-600 w-6' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
