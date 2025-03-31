"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import ProjectSlideshow from "@/components/project-slideshow";

export default function ProjectsSection() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const projectsControls = useAnimation();
  const projectsInView = useInView(projectsRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (projectsInView) {
      projectsControls.start("visible");
    }
  }, [projectsControls, projectsInView]);

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
    <section
      id="projects"
      className="py-16 md:py-20 bg-gray-50"
      ref={projectsRef}
    >
      <div className="container mx-auto px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={projectsControls}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#041E42] mb-3">
            Projects
          </h2>
          <div className="w-24 h-1 bg-[#1E407C] mx-auto"></div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={projectsControls}
        >
          <ProjectSlideshow />
        </motion.div>
      </div>
    </section>
  );
}
