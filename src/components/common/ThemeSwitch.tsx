// 'use client';

// import React, { useCallback, useEffect, useState } from 'react';
// import { Moon, Sun } from "lucide-react";

// interface ThemeSwitchProps {
//   className?: string;
// }

// export default function ThemeSwitch({ className }: ThemeSwitchProps) {
//   const [theme, setTheme] = useState<'light' | 'dark'>('light');
//   const [mounted, setMounted] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);

//   useEffect(() => {
//     const savedTheme =
//       localStorage.getItem('theme') ||
//       (window.matchMedia('(prefers-color-scheme: dark)').matches
//         ? 'dark'
//         : 'light');

//     setTheme(savedTheme as 'light' | 'dark');
//     document.documentElement.classList.toggle('dark', savedTheme === 'dark');
//     setMounted(true);
//   }, []);

//   const toggleTheme = useCallback(
//     async () => {
//       if (isAnimating) return;
//       setIsAnimating(true);

//       const transition = document.createElement('div');
//       transition.style.position = 'fixed';
//       transition.style.top = '0';
//       transition.style.left = '0';
//       transition.style.width = '100%';
//       transition.style.height = '100%';
//       transition.style.zIndex = '9999';
//       transition.style.pointerEvents = 'none';
//       transition.style.backgroundColor =
//         theme === 'light' ? 'oklch(0.15 0 0)' : 'oklch(0.98 0 0)';
//       transition.style.opacity = '0';
//       transition.style.transform = 'scaleY(0)';
//       transition.style.transformOrigin = 'top';
//       transition.style.transition = 'transform 600ms ease, opacity 1000ms ease';

//       document.body.appendChild(transition);

//       requestAnimationFrame(() => {
//         transition.style.transform = 'scaleY(1)';
//         transition.style.opacity = '1';
//       });

//       await new Promise((resolve) => setTimeout(resolve, 600));

//       const newTheme = theme === 'light' ? 'dark' : 'light';
//       setTheme(newTheme);
//       localStorage.setItem('theme', newTheme);
//       document.documentElement.classList.toggle('dark');

//       transition.style.opacity = '0';
//       await new Promise((resolve) => setTimeout(resolve, 400));

//       transition.remove();
//       setIsAnimating(false);
//     },
//     [theme, isAnimating],
//   );

//   if (!mounted) return null;

//   return (
//     <button
//       onClick={toggleTheme}
//       disabled={isAnimating}
//       className={`relative flex h-8 w-8 items-center justify-center overflow-hidden transition-opacity hover:opacity-80 ${className} hover:cursor-pointer`}
//       aria-label="Toggle theme">
//       <Sun
//         className={`absolute h-5 w-5 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
//           theme === 'dark'
//             ? 'translate-y-0 scale-100 opacity-100'
//             : 'translate-y-5 scale-50 opacity-0'
//         }`}/>
//       <Moon
//         className={`absolute h-5 w-5 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
//           theme === 'light'
//             ? 'translate-y-0 scale-100 opacity-100'
//             : 'translate-y-5 scale-50 opacity-0'
//         }`}/>
//     </button>
//   );
// }


'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

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
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    setTheme(savedTheme as 'light' | 'dark');
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    setMounted(true);
  }, []);

  const toggleTheme = useCallback(async () => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Create fade overlay
    const fade = document.createElement('div');
    fade.style.position = 'fixed';
    fade.style.top = '0';
    fade.style.left = '0';
    fade.style.width = '100%';
    fade.style.height = '100%';
    fade.style.zIndex = '9999';
    fade.style.pointerEvents = 'none';
    fade.style.backgroundColor = theme === 'light' ? '#000' : '#fff';
    fade.style.opacity = '0';
    fade.style.transition = 'opacity 700ms ease';

    document.body.appendChild(fade);

    requestAnimationFrame(() => {
      fade.style.opacity = '1';
    });

    await new Promise((resolve) => setTimeout(resolve, 500));

    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');

    fade.style.opacity = '0';
    await new Promise((resolve) => setTimeout(resolve, 400));
    fade.remove();
    setIsAnimating(false);
  }, [theme, isAnimating]);

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      disabled={isAnimating}
      aria-label="Toggle theme"
      className={`relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-md transition-opacity hover:opacity-80 ${className}`}
    >
      <Sun
        className={`absolute h-5 w-5 text-yellow-400 transition-all duration-500 ease-in-out ${
          theme === 'dark'
            ? 'opacity-100 scale-100 rotate-0'
            : 'opacity-0 scale-75 rotate-90'
        }`}
      />
      <Moon
        className={`absolute h-5 w-5 text-indigo-500 transition-all duration-500 ease-in-out ${
          theme === 'light'
            ? 'opacity-100 scale-100 rotate-0'
            : 'opacity-0 scale-75 rotate-90'
        }`}
      />
    </button>
  );
}
