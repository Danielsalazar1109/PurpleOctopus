'use client'
import { useState } from "react";
import Image from "next/image";
import { useEffect } from "react";

export default function Gallery() {

    const [imagesPerPage, setImagesPerPage] = useState(9);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);


useEffect(() => {
  const update = () => {
    setImagesPerPage(window.innerWidth < 768 ? 8 : 9);
  };

  update();
  window.addEventListener("resize", update);
  return () => window.removeEventListener("resize", update);
}, []);

    const IMAGES_PER_PAGE = imagesPerPage;

const [page, setPage] = useState(0);

  const galleryImages: Record<string, string[]> = {
    "GUTTER CLEANING": [
      "/images/guttergallery1.jpeg",
      "/images/guttergallery2.jpeg",
      "/images/guttergallery3.jpeg",
      "/images/guttergallery4.jpeg",
      "/images/guttergallery5.jpeg",
      "/images/guttergallery6.jpeg",
      "/images/guttergallery7.jpeg",
      "/images/guttergallery9.jpeg",
      "/images/guttergallery10.jpeg",
      "/images/guttergallery11.jpeg",
      "/images/guttergallery12.jpeg",
      "/images/guttergallery13.jpeg",
      "/images/guttergallery14.jpeg",
      "/images/guttergallery15.jpeg",
      "/images/guttergallery16.jpeg",
      "/images/guttergallery17.jpeg",
      "/images/guttergallery18.jpeg",
      "/images/guttergallery19.jpeg",
    ],
    "PAINTING": [
      "/images/paintinggallery1.jpeg",
      "/images/paintinggallery2.jpeg",
      "/images/paintinggallery3.jpeg",
      "/images/paintinggallery4.jpeg",
      "/images/paintinggallery5.jpeg",
      "/images/paintinggallery6.jpeg",
      "/images/paintinggallery7.jpeg",
      "/images/paintinggallery8.jpeg",
      "/images/paintinggallery9.jpeg",
      "/images/paintinggallery10.jpeg",
      "/images/paintinggallery11.jpeg",
      "/images/paintinggallery12.jpeg",
      "/images/paintinggallery13.jpeg",
      "/images/paintinggallery14.jpeg",
    ],
    "MOSS REMOVAL": [
      "/images/removalgallery1.jpeg",
      "/images/removalgallery2.jpeg",
      "/images/removalgallery3.jpeg",
      "/images/removalgallery4.jpeg",
      "/images/removalgallery5.jpeg",
      "/images/removalgallery6.jpeg",
      "/images/removalgallery7.jpeg",
      "/images/removalgallery8.jpeg",
      "/images/removalgallery9.jpeg",
      "/images/removalgallery10.jpeg",
      "/images/removalgallery11.jpeg",
      "/images/removalgallery12.jpeg",
      "/images/removalgallery13.jpeg",
      "/images/removalgallery14.jpeg",
      "/images/removalgallery15.jpeg",
      "/images/removalgallery16.jpeg",
      "/images/removalgallery17.jpeg",
      "/images/removalgallery18.jpeg",
      "/images/removalgallery19.jpeg",
      "/images/removalgallery20.jpeg",
      "/images/removalgallery21.jpeg",
      "/images/removalgallery22.jpeg",
      "/images/removalgallery23.jpeg",
      "/images/removalgallery24.jpeg",
      "/images/removalgallery25.jpeg",
    ],

    "WINDOWS CLEANING": [
      "/images/windowsgallery1.jpeg",
    ],
    "MOSS TREATMENT": [
      "/images/treatmentgallery1.jpeg",
      "/images/treatmentgallery2.jpeg",
      "/images/treatmentgallery3.jpeg",
      "/images/treatmentgallery4.jpeg",
      "/images/treatmentgallery5.jpeg",
      "/images/treatmentgallery6.jpeg",
    ],
    "RESIDENTIAL CLEANING": [
      "/images/residentialgallery1.jpeg",
      "/images/residentialgallery2.jpeg",
      "/images/residentialgallery3.jpeg",
    ],
  };

  const services = [
    "MOSS REMOVAL",
    "MOSS TREATMENT",
    "WINDOWS CLEANING",
    "OFFICE CLEANING",
    "GUTTER CLEANING",
    "PAINTING",
    "CONDO CLEANING",
    "MOVE IN / MOVE OUT CLEANING",
    "AIRBNB CLEANING",
    "RESIDENTIAL CLEANING",
  ];

  const [activeService, setActiveService] = useState("GUTTER CLEANING");

  const images = galleryImages[activeService] || [];

const totalPages = Math.ceil(images.length / IMAGES_PER_PAGE);

const visibleImages = images.slice(
  page * IMAGES_PER_PAGE,
  page * IMAGES_PER_PAGE + IMAGES_PER_PAGE
);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-3 gap-10 items-start">

        {/* LEFT */}
        <div className="flex flex-nowrap lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 pt-9 no-scrollbar ">
          {services.map((s) => (
            <ServiceButton
              key={s}
              label={s}
              active={s === activeService}
              onClick={() => {setActiveService(s);
                setPage(0);
              }}
            />
          ))}
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold text-white mb-6">
            {activeService}
          </h2>

          {galleryImages[activeService] ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {visibleImages.map((src, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedIndex(page * IMAGES_PER_PAGE + i)}
                  className="relative h-40 rounded-2xl overflow-hidden
                             border border-purple-400/30"
                >
                  <Image
                    src={src}
                    alt={`${activeService} ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-purple-500 py-64 text-center">
              PHOTOS COMING SOON...
            </div>
          )}
          {totalPages > 1 && (
  <div className="flex items-center justify-center gap-4 mt-10">
    <button
      onClick={() => setPage(p => Math.max(p - 1, 0))}
      disabled={page === 0}
      className="px-4 py-2 rounded-lg bg-purple-600/60 text-white disabled:opacity-40"
    >
      Prev
    </button>

    <span className="text-white/70 text-sm">
      Page {page + 1} of {totalPages}
    </span>

    <button
      onClick={() => setPage(p => Math.min(p + 1, totalPages - 1))}
      disabled={page === totalPages - 1}
      className="px-4 py-2 rounded-lg bg-purple-600/60 text-white disabled:opacity-40"
    >
      Next
    </button>
  </div>
)}

        </div>

      </div>
      {selectedIndex !== null && (
  <div
    className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm
               flex items-center justify-center px-4"
    onClick={() => setSelectedIndex(null)}
  >
    <div
      className="relative max-w-6xl w-full h-[80vh] flex items-center"
      onClick={(e) => e.stopPropagation()}
    >
      {/* LEFT ARROW */}
      <button
        onClick={() =>
          setSelectedIndex(i => (i! > 0 ? i! - 1 : i))
        }
        disabled={selectedIndex === 0}
        className="absolute left-0 md:-left-14 text-white text-4xl
                   disabled:opacity-30"
      >
        ‹
      </button>

      {/* IMAGE */}
      <div className="relative w-full h-full">
        <Image
          src={images[selectedIndex]}
          alt="Gallery image"
          fill
          className="object-contain rounded-2xl"
        />
      </div>

      {/* RIGHT ARROW */}
      <button
        onClick={() =>
          setSelectedIndex(i =>
            i! < images.length - 1 ? i! + 1 : i
          )
        }
        disabled={selectedIndex === images.length - 1}
        className="absolute right-0 md:-right-14 text-white text-4xl
                   disabled:opacity-30"
      >
        ›
      </button>

      {/* CLOSE */}
      <button
        onClick={() => setSelectedIndex(null)}
        className="absolute -top-10 right-0 text-white text-2xl"
      >
        ✕
      </button>
    </div>
  </div>
)}

    </section>
  );
};

function ServiceButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        py-3 px-4 rounded-xl text-sm font-semibold text-center
        border transition lg:w-full md:w-full sm:w-full lg:max-w-[12rem] md:max-w-[10rem] sm:max-w-[1rem] sm:text-sm shrink-0
        ${active
          ? "bg-purple-500 border-purple-300 text-white"
          : "bg-purple-600/70 border-purple-400/40 text-white/80 hover:bg-purple-500"}
      `}
    >
      {label}
    </button>
  );
}
