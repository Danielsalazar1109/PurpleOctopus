import Image from "next/image";
import Services from "./services/page";

export default function Home() {
  return (
    <div className="w-full">
      <div className="relative w-full h-screen">
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
        <h1 className="text-5xl font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          IMPROVING HOMES.
        </h1>
        <p className="text-2xl text-white absolute top-[60%] left-1/2 transform -translate-x-1/2">
          INTERIOR/EXTERIOR CLEANING
        </p>
      </div>
      <Services />
    </div>
  );
}
