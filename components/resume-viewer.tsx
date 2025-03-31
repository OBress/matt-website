"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Initialize pdfjs worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function ResumeViewer() {
  const [numPages, setNumPages] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setIsLoading(false);
  }

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden w-full max-w-3xl mb-6">
        <div className="relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="w-12 h-12 border-4 border-[#041E42] border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          <Document
            file="/resume.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <div className="flex justify-center p-4">
                <div className="w-12 h-12 border-4 border-[#041E42] border-t-transparent rounded-full animate-spin"></div>
              </div>
            }
            className="flex flex-col items-center"
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={800}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            ))}
          </Document>
        </div>
      </div>

      <motion.a
        href="/resume.pdf"
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
