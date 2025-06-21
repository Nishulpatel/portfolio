"use client";

import { Github, Twitter, Youtube, Instagram, Linkedin, Send, Code } from 'lucide-react';
import { useState, useEffect } from 'react';

const socialLinks = [
  { name: "LinkedIn", url: "https://linkedin.com/in/nishuldhakar", icon: Linkedin, hover: "group-hover:text-blue-400" },
  { name: "Twitter", url: "https://x.com/intent/follow?screen_name=nishuldhakar", icon: Twitter, hover: "group-hover:text-blue-300" },
  { name: "GitHub", url: "https://github.com/nishuldhakar", icon: Github, hover: "group-hover:text-gray-300" },
  { name: "Telegram", url: "https://t.me/nishuldhakar", icon: Send, hover: "group-hover:text-blue-400" },
  { name: "YouTube", url: "https://youtube.com/@nishuldhakar", icon: Youtube, hover: "group-hover:text-red-400" },
  { name: "Instagram", url: "https://instagram.com/nishuldhakar", icon: Instagram, hover: "group-hover:text-pink-400" },
];

const portfolioLink = {
  name: "Portfolio",
  url: "https://nishul.dev",
  icon: Code,
  hover: "group-hover:text-emerald-400",
};

export default function Links() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.1) 0%, transparent 50%)`
        }}
      />

    
      <div 
        className={`mb-12 text-center transform transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 mb-4 tracking-tight">
          Nishul Dhakar
        </h1>
        <div className="relative">
          <p className="text-xl text-neutral-400 font-light tracking-wide">
            Connect with me
          </p>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-neutral-500 to-transparent" />
        </div>
      </div>

      <div 
        className={`w-full max-w-xl mb-8 transform transition-all duration-1000 delay-200 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <a
          href={portfolioLink.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative rounded-2xl p-6 border border-neutral-800/50 bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-sm hover:border-neutral-700/70 transition-all duration-300 flex items-center space-x-5 shadow-2xl hover:shadow-neutral-900/50 transform hover:-translate-y-1 hover:scale-[1.02]"
          style={{
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
        >
          <div className="p-4 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-700 transition-all duration-300 group-hover:scale-110 shadow-lg">
            <portfolioLink.icon
              className={`w-8 h-8 text-neutral-200 transition-all duration-300 ${portfolioLink.hover} group-hover:scale-110`}
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-neutral-100 group-hover:text-white transition-colors">
              {portfolioLink.name}
            </h3>
            <p className="text-neutral-400 text-sm group-hover:text-neutral-300 transition-colors">
              Visit my portfolio website
            </p>
          </div>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
      </div>

      <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-xl transform transition-all duration-1000 delay-400 ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        {socialLinks.map((link, index) => {
          const IconComponent = link.icon;
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl p-5 border border-neutral-800/50 bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-sm hover:border-neutral-700/70 transition-all duration-300 flex items-center space-x-4 shadow-xl hover:shadow-neutral-900/40 transform hover:-translate-y-1 hover:scale-[1.02]"
              style={{
                boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-700 transition-all duration-300 group-hover:scale-110  shadow-md">
                <IconComponent
                  className={`w-6 h-6 text-neutral-200 transition-all duration-300 ${link.hover} group-hover:scale-110`}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-neutral-100 group-hover:text-white transition-colors">
                  {link.name}
                </h3>
                <p className="text-neutral-400 text-sm group-hover:text-neutral-300 transition-colors">
                  Connect on {link.name}
                </p>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          );
        })}
      </div>
    </div>
  );
}