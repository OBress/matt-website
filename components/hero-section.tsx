"use client";

import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShrunk(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      initial={{ height: "100vh" }}
      animate={{
        height: isShrunk ? "30vh" : "100vh",
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      className="flex items-center bg-gradient-to-b from-[#041E42] to-[#1E407C] text-white relative pt-16"
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: isShrunk ? 0.8 : 1,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="container mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-[-2rem]"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Matt Fravel
          </h1>
          <p className="text-xl md:text-2xl mb-8">Multimedia Producer</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
