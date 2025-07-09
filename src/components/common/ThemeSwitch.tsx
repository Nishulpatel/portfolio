'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { Moon, Sun } from "lucide-react";

interface ThemeSwitchProps {
  className?: string;
}

export default function ThemeSwitch({ className }: ThemeSwitchProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const savedTheme =
      localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light');

    setTheme(savedTheme as 'light' | 'dark');
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    setMounted(true);
  }, []);

  const toggleTheme = useCallback(
    async () => {
      if (isAnimating) return;
      setIsAnimating(true);

      const transition = document.createElement('div');
      transition.style.position = 'fixed';
      transition.style.top = '0';
      transition.style.left = '0';
      transition.style.width = '100%';
      transition.style.height = '100%';
      transition.style.zIndex = '9999';
      transition.style.pointerEvents = 'none';
      transition.style.backgroundColor =
        theme === 'light' ? 'oklch(0.15 0 0)' : 'oklch(0.98 0 0)';
      transition.style.opacity = '0';
      transition.style.transform = 'scaleY(0)';
      transition.style.transformOrigin = 'top';
      transition.style.transition = 'transform 600ms ease, opacity 1000ms ease';

      document.body.appendChild(transition);

      requestAnimationFrame(() => {
        transition.style.transform = 'scaleY(1)';
        transition.style.opacity = '1';
      });

      await new Promise((resolve) => setTimeout(resolve, 600));

      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.toggle('dark');

      transition.style.opacity = '0';
      await new Promise((resolve) => setTimeout(resolve, 400));

      transition.remove();
      setIsAnimating(false);
    },
    [theme, isAnimating],
  );

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      disabled={isAnimating}
      className={`relative flex h-8 w-8 items-center justify-center overflow-hidden transition-opacity hover:opacity-80 ${className} hover:cursor-pointer`}
      aria-label="Toggle theme">
      <Sun
        className={`absolute h-5 w-5 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          theme === 'dark'
            ? 'translate-y-0 scale-100 opacity-100'
            : 'translate-y-5 scale-50 opacity-0'
        }`}/>
      <Moon
        className={`absolute h-5 w-5 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          theme === 'light'
            ? 'translate-y-0 scale-100 opacity-100'
            : 'translate-y-5 scale-50 opacity-0'
        }`}/>
    </button>
  );
}
