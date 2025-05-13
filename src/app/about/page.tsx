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
        
      <motion.div
        ref={imageRef}
        initial={{ opacity: 0, x: -50 }}
        animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1489370603040-dc6c28a1d37a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=1500&w=2000&fit=clip&fm=jpg"
          alt="About page"
          width={500}
          height={500}
          className="rounded-xl shadow-lg object-cover"
        />
      </motion.div>

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
        <p className="text-gray-700 text-lg leading-relaxed">
          We are a company dedicated to improving homes both internally and externally.
          We are committed to quality and responsibility to our customers.
          We are located in the large area of Victory.
        </p>
      </motion.div>
    </div>
  );
}