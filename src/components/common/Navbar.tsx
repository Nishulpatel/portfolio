// components/Navbar.tsx
"use client";

import React, { useState } from "react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <div className="fixed top-0 mt-4 inset-x-0 z-50 pb-2.5">
      <motion.nav
        animate={{
          y: scrolled ? 10 : 0,
          width: scrolled ? "48%" : "100%",
          boxShadow: scrolled ? "var(--shadow-aceternity)" : "none",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`rounded-4xl hidden sm:flex  mx-auto px-4 sm:px-6 py-2 max-w-4xl items-center justify-between ${
          scrolled
            ? "bg-white/90 dark:bg-neutral-800/80 backdrop-blur-sm"
            : "bg-transparent"
        }`}>
        <DesktopNav />
        <div className="hidden sm:block">
          <ThemeSwitch />
        </div>      
        </motion.nav>
<div className="sm:hidden relative w-full">
<button
  className="absolute top-4 right-4 z-50 text-2xl text-neutral-900 dark:text-white"
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
>
  {mobileMenuOpen ? <HiX /> : <HiMenu />}
</button>

</div>

      {mobileMenuOpen && <MobileNav onClose={() => setMobileMenuOpen(false)} />}
    </div>
  );
}


// ------------ if want to hide when scroll down and show when scroll up----------

// const { scrollY } = useScroll();
// const [showNav, setShowNav] = useState(true);
// const lastScrollY = useRef(0);

// useMotionValueEvent(scrollY, "change", (currentY) => {
//   if (typeof window === "undefined") return;

//   const delta = currentY - lastScrollY.current;

//   if (currentY < 10) {
//     setShowNav(true); // Always show when near top
//   } else if (delta > 0) {
//     setShowNav(false); // Hide when scrolling down
//   } else if (delta < 0) {
//     setShowNav(true); // Show when scrolling up
//   }

//   lastScrollY.current = currentY;
// });