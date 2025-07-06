"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

export default function Footer() {
  const { resolvedTheme } = useTheme();

  // Don't render anything until the theme is resolved on the client
  if (typeof resolvedTheme === "undefined") return null;

  // Only render the footer if the theme is dark
  if (resolvedTheme !== "dark") return null;

  return (

      <div className="relative w-full h-[100px] sm:h-[120px] md:h-[150px] lg:h-[200px]">
        <Image
          src="/city.png"
          alt="City Image"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

  );
}
