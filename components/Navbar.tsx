// import Link from "next/link";
// import { Button } from "./ui/button";

// export default function NavigationBar(){
//     return(
//         <nav className="p-4 mt-40 w-120 mx-auto flex justify-center items-center border  dark:border-gray-700 bg-white dark:bg-black" >
//             <div className="container w-100 mx-auto flex justify-between items-center">
//                 <div className="text-lg font-semibold">
                    
//                        <Button variant={"outline"} size={"icon"} className="rounded-full" >
//                         <Link href="/" className="dark:text-white">N</Link>
//                      </Button>
                
//                 </div>
//                 <ul className="flex space-x-4">
//                     <li><a href="/projects" className="dark:text-white">Projects</a></li>
//                     <li><a href="/about" className="dark:text-white">About</a></li>
//                     <li><a href="/blog" className="dark:text-white">Blog</a></li>
//                 </ul>
//             </div>
//         </nav>
//     );
// }

"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

const StackingNavbar = () => {
const [expanded, setExpanded] = useState(false);

const items = [
{ href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

return (

    <div>
    
   <div
    className="flex items-center gap-x-2"
    onMouseEnter={() => setExpanded(true)}
    onMouseLeave={() => setExpanded(false)}
  >
    {items.map((item, index) => (
      <StackingNavbarItem
        href={item.href}
        expanded={expanded}
        key={index}
        index={index}
      >
        {item.label}
      </StackingNavbarItem>
    ))}
  </div>
      </div>
);
};

const StackingNavbarItem = ({
href,
children,
style,
expanded,
index,
}: {
href: string;
children: React.ReactNode;
style?: React.CSSProperties;
expanded: boolean;
index: number;
}) => {
return (
  <motion.div
    initial={{ x: -100 * index }}
    animate={{ x: expanded ? 0 : -100 * index }}
    transition={{
      duration: 0.6,
      ease: "circInOut",
      delay: 0.1 * index,
      type: "spring",
    }}
    style={{ zIndex: 100 - index }}
  >
    <Link
      className="
        flex items-center text-sm px-5 py-3 rounded-3xl
        bg-[#b0aaaa1a] dark:bg-white/10
        no-underline
        text-black dark:text-white
        backdrop-blur-lg
        hover:bg-black hover:text-white
        dark:hover:bg-white/20 dark:hover:text-amber-300
        transition-colors duration-300 ease-in-out
      "
      href={href}
      style={style}
    >
      {children}
    </Link>
  </motion.div>
);
};

export default StackingNavbar;