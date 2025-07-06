"use client";

import { about } from "@/config/About";
import Image from "next/image";
import Link from "next/link";
import QuickInfo from "./QuickInfo";

export default function About() {
  return (
    <section className="bg-white dark:bg-gray-950 transition-colors duration-300 flex items-center">
      <div className="w-full max-w-4xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 mb-16">
          <div className="relative">
            <Image
              src="/anime.jpeg"
              alt="Nishul Dhakar"
              width={160}
              height={160}
              className="rounded-2xl shadow-sm ring-1 ring-gray-100 dark:ring-gray-800"
            />
            <span className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-950" />
          </div>
          <div className="flex-1">
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 dark:text-white mb-2 tracking-tight">
              Nishul
              <span className="block text-secondary   dark:text-gray-400">Dhakar</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-light">
              Full-Stack Developer
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Bhopal, India
            </p>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          {/* Main About Text */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-light text-gray-900 dark:text-white tracking-tight">
              About
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>{about.description}</p>
              <p>
                I am open to work opportunities, freelance projects, or collaborations.
                <Link
                  href="https://hey.nishul.dev/"
                  className="text-blue-600 dark:text-blue-400 hover:underline ml-1"
                >
                  Lets connect
                </Link>
              </p>
            </div>
          </div>
          {/* Quick Info */}
          <QuickInfo />
        </div>
      </div>
    </section>
  );
}