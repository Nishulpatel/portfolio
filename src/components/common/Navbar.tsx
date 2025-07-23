"use client";

import { navbarConfig } from "@/config/Navbar";
import { Link } from "next-view-transitions";
import React, { useState } from "react";
import Container from "./Container";
import ThemeSwitch from "./ThemeSwitch";
import { LayoutGroup, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [hover, setHover] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <div className="fixed top-0 inset-x-0 z-50 pb-2.5">
      {/* Main navbar */}
      <motion.nav
        animate={{
          y: scrolled ? 10 : 0,
          width: scrolled ? "48%" : "100%",
          boxShadow: scrolled ? "var(--shadow-aceternity)" : "none",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`rounded-2xl mx-auto px-4 sm:px-6 py-2 max-w-4xl flex items-center justify-between ${
          scrolled
            ? "bg-white/90 dark:bg-neutral-800/80 backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        {/* Left: Desktop Navigation Links (hidden on mobile) */}
        <div className="hidden sm:flex items-center space-x-5">
          <LayoutGroup>
            {navbarConfig.navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onMouseEnter={() => setHover(idx)}
                onMouseLeave={() => setHover(null)}
                className="relative px-2 py-1 text-sm font-medium text-neutral-900 dark:text-neutral-100 transition-colors"
              >
                {hover === idx && (
                  <motion.span
                    layoutId="hover-span"
                    className="absolute inset-0 rounded-md bg-neutral-200 dark:bg-neutral-700"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
          </LayoutGroup>
        </div>

        {/* Right: Theme Switch + Mobile Menu Button */}
        <div className={`flex justify-between items-center ${scrolled ? "gap-24" : "gap-80"}`}>
          <ThemeSwitch />
          <button
            className="sm:hidden text-2xl text-neutral-900 dark:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </motion.nav>

    {mobileMenuOpen && (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
    className="fixed inset-0 z-40 bg-white dark:bg-neutral-950 flex flex-col items-center justify-center px-4 sm:px-6"
  >
    <div className="absolute top-4 right-4">
      <button
        onClick={() => setMobileMenuOpen(false)}
        className="text-3xl text-neutral-900 dark:text-white transition-all hover:scale-110"
      >
        <HiX />
      </button>
    </div>

    <motion.ul
      initial="hidden"
      animate="show"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
          },
        },
      }}
      className="flex flex-col items-center justify-center gap-8"
    >
      {navbarConfig.navItems.map((item, idx) => (
        <motion.li
          key={idx}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
        >
          <Link
            href={item.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-4xl sm:text-5xl font-semibold text-neutral-900 dark:text-white tracking-wide hover:scale-105 transition-transform"
          >
            {item.label}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  </motion.div>
)}

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