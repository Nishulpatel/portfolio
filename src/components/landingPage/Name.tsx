"use client";

import Image from "next/image";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function Name() {
  return (
      <>
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 mb-10">
          <div className="relative transition-transform duration-300 ease-in-out hover:scale-120">
            <Image
              src="/anime.jpeg"
              alt="Nishul Dhakar"
              width={100}
              height={100}
              className="rounded-2xl shadow-sm ring-1 ring-gray-100 dark:ring-gray-800 "
            />
            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-primary" />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-5xl">
      Nishul <AuroraText> Dhakar </AuroraText>
    </h1>
            <p className="text-xl mt-1 text-secondary font-light">
              Full-Stack Developer
            </p>
            <p className="text-sm text-secondary mt-1">
             Bhopal, India
            </p>
          </div>
        </div>
      </>
         )
        }
        