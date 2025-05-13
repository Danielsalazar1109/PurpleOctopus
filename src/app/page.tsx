import Image from "next/image";
import Services from "./services/page";
import About from "./about/page";
import Form from "./form/page";

export default function Home() {
  return (
    <div className="w-full">
      <div id="home" className="relative w-full h-screen">
        <Image
          src="/images/mossSweeping.jpg"
          alt="Moss Removal"
          fill
          sizes="100vw"
          className="opacity-80 brightness-50"
          style={{
            objectFit: 'cover',
            zIndex: -1
          }}
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            IMPROVING HOMES.
          </h1>
          <p className="text-xl md:text-2xl text-white">
            INTERIOR/EXTERIOR CLEANING
          </p>
        </div>
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="form">
        <Form />
      </div>
    </div>
  );
}