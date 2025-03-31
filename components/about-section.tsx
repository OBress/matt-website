"use client";

import Image from "next/image";
import { Mail, Phone, Linkedin, Instagram, Twitter } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { aboutMe } from "@/content/about-me";

const iconMap = {
  Mail,
  Phone,
  Linkedin,
  Instagram,
  Twitter,
};

export default function AboutSection() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const aboutControls = useAnimation();
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (aboutInView) {
      aboutControls.start("visible");
    }
  }, [aboutControls, aboutInView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-16" ref={aboutRef}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={aboutControls}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
            About Me
          </h1>
          <div className="w-20 h-1 bg-[#1E407C] mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.6 },
              },
            }}
            initial="hidden"
            animate={aboutControls}
            className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-[#041E42] shadow-xl"
          >
            <Image
              src="/profile.jpeg"
              alt="Profile"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={aboutControls}
            className="max-w-2xl"
          >
            <p className="text-lg mb-6 text-black">{aboutMe.description}</p>

            <div className="flex flex-col gap-4">
              <div className="flex justify-around max-w-[800px]">
                {aboutMe.socialLinks
                  .filter(
                    (link) => link.name === "Email" || link.name === "Call"
                  )
                  .map((link) => {
                    const Icon = iconMap[link.icon as keyof typeof iconMap];
                    return (
                      <div
                        key={link.name}
                        className="flex items-center gap-2 bg-[#041E42] text-white px-4 py-2 rounded-full w-[250px] justify-center"
                      >
                        <Icon size={18} />
                        <span>
                          {link.url.replace("mailto:", "").replace("tel:", "")}
                        </span>
                      </div>
                    );
                  })}
              </div>

              <div className="flex justify-around gap-4 max-w-[800px]">
                {aboutMe.socialLinks
                  .filter(
                    (link) => link.name !== "Email" && link.name !== "Call"
                  )
                  .map((link) => {
                    const Icon = iconMap[link.icon as keyof typeof iconMap];
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[#041E42] text-white px-4 py-2 rounded-full hover:bg-[#1E407C] transition-colors w-[250px] justify-center"
                      >
                        <Icon size={18} />
                        <span>{link.name}</span>
                      </a>
                    );
                  })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
