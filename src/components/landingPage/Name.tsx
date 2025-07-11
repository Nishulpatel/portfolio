"use client";

import Image from "next/image";

export default function Name() {
  return (
      <>
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 mb-10">
          <div className="relative transition-transform duration-300 ease-in-out hover:scale-120">
            <Image
              src="/anime.jpeg"
              alt="Nishul Dhakar"
              width={160}
              height={160}
              className="rounded-2xl shadow-sm ring-1 ring-gray-100 dark:ring-gray-800 "
            />
            <span className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-950" />
          </div>
          <div className="flex-1">
            <div className="text-5xl font-bold lg:text-6xl text-gray-900 dark:text-white mb-2 tracking-tight">
              Nishul
              <span className="block text-blue-500 ">Dhakar</span>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-light">
              Full-Stack Developer
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
             Bhopal, India
            </p>
          </div>
        </div>
      </>
         )
        }
        