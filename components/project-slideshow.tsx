"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/content/projects";

export default function ProjectSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isPlaying && !isHovered) {
      timerRef.current = setTimeout(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentIndex, isPlaying, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="max-w-7xl mx-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="relative w-full lg:w-3/5 aspect-video">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
              >
                {projects[currentIndex].isVideo &&
                projects[currentIndex].videoUrl ? (
                  <iframe
                    src={projects[currentIndex].videoUrl}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={projects[currentIndex].title}
                  />
                ) : (
                  <Image
                    src={projects[currentIndex].image || "/placeholder.svg"}
                    alt={projects[currentIndex].title}
                    fill
                    className="object-cover"
                  />
                )}
                {projects[currentIndex].isVideo &&
                  !projects[currentIndex].videoUrl && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-white/80 flex items-center justify-center">
                        <Play size={36} className="text-[#041E42] ml-1" />
                      </div>
                    </div>
                  )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 flex items-center justify-center shadow-md hover:bg-white transition-colors z-10 cursor-pointer"
              aria-label="Previous project"
            >
              <ChevronLeft size={24} className="text-[#041E42]" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 flex items-center justify-center shadow-md hover:bg-white transition-colors z-10 cursor-pointer"
              aria-label="Next project"
            >
              <ChevronRight size={24} className="text-[#041E42]" />
            </button>
          </div>

          <div className="w-full lg:w-2/5 p-8 lg:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="h-full flex flex-col"
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-[#041E42] mb-2">
                  {projects[currentIndex].title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {projects[currentIndex].location}
                </p>
                <p className="text-gray-700 mb-8 flex-grow text-base lg:text-lg">
                  {projects[currentIndex].description}
                </p>
                <a
                  href={projects[currentIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#041E42] text-white px-6 py-3 rounded-md hover:bg-[#1E407C] transition-colors text-lg cursor-pointer"
                >
                  <span>View Project</span>
                  <ExternalLink size={18} />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots navigation */}
        <div className="absolute bottom-6 left-0 right-0">
          <div className="flex justify-center space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full cursor-pointer ${
                  index === currentIndex ? "bg-[#041E42]" : "bg-gray-300"
                } transition-colors`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
