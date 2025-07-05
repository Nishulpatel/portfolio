"use client";

import Image from "next/image";
import Link from "next/link";
import TechSkills from "../components/Tech-Skills";

export default function HomePage() {
  return (
    <>
      <div className=" dark:bg-black  flex items-center justify-center transition-all, duration-300">

        <div>
       
        <div className="max-w-2xl px-6 text-sm leading-relaxed font-light">
          <div className="">
            <Image
              src="/hero.png"
              alt="Nishul Dhakar"
              width={100}
              height={100}
              className="rounded-full mb-4"
            />

            <h1 className="text-blue-500 text-4xl mb-4">
              Nishul<span className="text-white "> Dhakar</span>{" "}
              <sup className="text-xs align-super"> </sup>
            </h1>
          </div>
          <h2 className="text-[18px] mt-10 font-extrabold ">About Me -</h2>
          <p className="font-sans text-[15px] pb-3">
            Hey! I’m Nishul, a 21 y/o full-stack developer from
            Bhopal, India currently in my last year of B.Tech in AI/ML. I build
            cool stuff with React, TypeScript, Tailwind, Node.js, and MongoDB.
            I’m also deep into DSA with Java and practice daily on LeetCode.
            When I’m not coding, I’m lifting at the gym, exploring trading, or
            learning how to build big things. Open to work, freelance, or
            collabs — 
            <Link className="text-blue-400 hover:text-blue-600" href="https://hey.nishul.dev/">let’s connect.</Link>
          </p>
        </div>

        <div className="max-w-2xl px-6 mt-10 text-sm leading-relaxed font-light">
          <TechSkills />
        </div>

        </div>

      </div>
    </>
  );
}
