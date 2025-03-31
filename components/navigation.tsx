"use client";

import { Link } from "react-scroll";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#041E42] text-white z-50 shadow-2xl">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Matt Fravel</div>
          <div className="hidden md:flex space-x-8">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-[#99CCFF] transition-colors"
            >
              About Me
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-[#99CCFF] transition-colors"
            >
              Projects
            </Link>
            <Link
              to="resume"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-[#99CCFF] transition-colors"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
