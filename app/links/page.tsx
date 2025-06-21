"use client";

import { Github, Twitter, Youtube, Instagram, Linkedin, Send, Code } from 'lucide-react';

const socialLinks = [
  { name: "LinkedIn", url: "https://linkedin.com/in/nishuldhakar", icon: Linkedin, hover: "group-hover:text-[#0077b5]" },
  { name: "Twitter", url: "https://twitter.com/nishuldhakar", icon: Twitter, hover: "group-hover:text-[#1da1f2]" },
  { name: "GitHub", url: "https://github.com/nishuldhakar", icon: Github, hover: "group-hover:text-[#6e5494]" },
  { name: "Telegram", url: "https://t.me/nishuldhakar", icon: Send, hover: "group-hover:text-[#229ed9]" },
  { name: "YouTube", url: "https://youtube.com/@nishuldhakar", icon: Youtube, hover: "group-hover:text-[#ff0000]" },
  { name: "Instagram", url: "https://instagram.com/nishuldhakar", icon: Instagram, hover: "group-hover:text-[#e1306c]" },
];

const portfolioLink = {
  name: "Portfolio",
  url: "https://nishul.dev",
  icon: Code,
  hover: "group-hover:text-[#e1306c]",
};

export default function Links() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center px-4">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-100 mb-2">
          Nishul Dhakar
        </h1>
        <p className="text-lg text-neutral-400 font-light">
          Connect with me
        </p>
      </div>

      <div className="w-full max-w-xl mb-8">
        <a
          href={portfolioLink.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative rounded-xl p-5 border border-neutral-800 bg-neutral-900 hover:border-neutral-700 transition-all duration-200 flex items-center space-x-4 shadow-sm"
        >
          <div className="p-3 rounded-lg bg-neutral-800 transition-colors">
            <portfolioLink.icon
              className={`w-7 h-7 text-neutral-200 transition-colors duration-200 ${portfolioLink.hover}`}
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-neutral-100">{portfolioLink.name}</h3>
            <p className="text-neutral-400 text-sm">Visit my portfolio website</p>
          </div>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-xl">
        {socialLinks.map((link) => {
          const IconComponent = link.icon;
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl p-5 border border-neutral-800 bg-neutral-900 hover:border-neutral-700 transition-all duration-200 flex items-center space-x-4 shadow-sm"
            >
              <div className="p-2 rounded-lg bg-neutral-800 transition-colors">
                <IconComponent
                  className={`w-6 h-6 text-neutral-200 transition-colors duration-200 ${link.hover}`}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-neutral-100">{link.name}</h3>
                <p className="text-neutral-400 text-sm">Connect on {link.name}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}