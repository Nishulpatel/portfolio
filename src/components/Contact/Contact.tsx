"use client";

import React from "react";

import Link from "next/link";

import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import ContactForm from "./Contactform";
import { BorderBeam } from "../ui/magicui/border-beam";
import { AuroraText } from "../ui/magicui/aurora-text";
import { socialLinks } from "@/data/socialLinks";

const Contact = () => {
  return (
<section className="min-h-screen flex items-center justify-center  px-6 py-12">
  <div className="relative w-full max-w-6xl">
    <div className="relative z-10 border border-gray-700 rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-12 items-start ">
      {/* LEFT + RIGHT CONTENT */}
    <div>
    <h2 className="text-2xl font-bold mb-4">
      Get in <AuroraText>Touch</AuroraText>
    </h2>
      <p className="text-gray-400 mb-2">
        If you have any inquiries, feel free to reach out.
      </p>
      <p className="text-blue-400 mb-6">
        <Link href="mailto:nishuldhakar@gmail.com">nishuldhakar123@gmail.com</Link>
      </p>

      <h3 className="text-lg font-semibold mb-3">Follow me</h3>
      <div className="flex items-center gap-4">
        {Object.entries(socialLinks).map(([name, { href, icon: Icon }]) => (
          <Tooltip key={name} delayDuration={6}>
            <TooltipTrigger asChild>
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <Icon className="w-6 h-6" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>


    </div>

    {/* RIGHT SIDE - CONTACT FORM */}
    <ContactForm />
     <BorderBeam
        duration={6}
        size={400}
        className="from-transparent via-red-500 to-transparent"
      />
      <BorderBeam
        duration={6}
        delay={3}
        size={400}
        borderWidth={2}
        className="from-transparent via-blue-500 to-transparent"
      />
  </div>
    </div>
</section>

  );
};

export default Contact;
