"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import ResumeViewer from "@/components/resume-viewer";

export default function ResumeSection() {
  const resumeRef = useRef<HTMLDivElement>(null);
  const resumeControls = useAnimation();
  const resumeInView = useInView(resumeRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (resumeInView) {
      resumeControls.start("visible");
    }
  }, [resumeControls, resumeInView]);

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
    <section id="resume" className="py-16" ref={resumeRef}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={resumeControls}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#041E42] mb-2">
            Resume
          </h2>
          <div className="w-20 h-1 bg-[#1E407C] mx-auto"></div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={resumeControls}
          className="max-w-4xl mx-auto"
        >
          <ResumeViewer />
        </motion.div>
      </div>
    </section>
  );
}
