"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function ResumeViewer() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden w-full max-w-3xl mb-6">
        <div className="relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="w-12 h-12 border-4 border-[#041E42] border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          <iframe
            src={`${
              process.env.NODE_ENV === "production" ? "/matt-website" : ""
            }/resume.pdf`}
            className="w-full h-[800px]"
            onLoad={() => setIsLoading(false)}
            title="Resume"
          />
        </div>
      </div>

      <motion.a
        href="#"
        download="resume.pdf"
        className="flex items-center gap-2 bg-[#041E42] text-white px-6 py-3 rounded-full font-medium hover:bg-[#1E407C] transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Download size={18} />
        <span>Download Resume</span>
      </motion.a>
    </div>
  );
}
