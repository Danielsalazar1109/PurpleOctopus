"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  
  const imageInView = useInView(imageRef, { once: false, amount: 0.3 });
  const textInView = useInView(textRef, { once: false, amount: 0.3 });
  
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center justify-center p-8 min-h-screen bg-gray-100">

      <div> 
      <motion.div
        ref={imageRef}
        initial={{ opacity: 0, x: -50 }}
        animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/images/about.jpeg"
          alt="About page"
          width={500}
          height={500}
          className="rounded-xl shadow-lg object-cover"
        />
      </motion.div>
      <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mt-4 text-center"> WHY CHOOSE US? </h2>
      <p>WorkSafe BC Insured, $1 Million Liability Coverage, and Competitive Costs.</p>
      <Image
          src="/images/zensurance.png"
          alt="About page"
          width={500}
          height={500}
          className="rounded-xl shadow-lg object-cover"
        />
        <Image
          src="/images/worksafe.jpeg"
          alt="About page"
          width={500}
          height={500}
          className="rounded-xl shadow-lg object-cover"
        />

      </div>

      <motion.div
        className="max-w-lg text-center md:text-left"
        ref={textRef}
        initial={{ opacity: 0, x: 50 }}
        animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">
          PURPLE OCTOPUS SERVICE
        </h1>
        <div className="space-y-4">
        <p className="text-gray-700 text-lg leading-relaxed">
          Hello everyone! We are Fabian and Natalia, an entrepreneurial couple living on the beautiful Vancouver Island. We are both Industrial Engineers with a background in Business Administration, and our passion for business, service, and hard work inspired us to create several ventures — one of them being Purple Octopus Service.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">Our Business was founded in 2022, after the pandemic, during a time when many people were facing major changes in their lives. We noticed that families, seniors, and busy professionals often needed extra support to keep their homes clean, safe, and comfortable. That’s when we decided to create a service that would offer not just cleaning, but peace of mind and genuine care.</p>
        <p className="text-gray-700 text-lg leading-relaxed">Purple Octopus Service was created with the goal of helping people enjoy clean, organized, and healthy spaces. From the very beginning, we focused on providing honest, reliable, and high-quality service, always paying close attention to detail and treating every home as if it were our own.</p>
        </div>
      </motion.div>
    </div>
  );
}