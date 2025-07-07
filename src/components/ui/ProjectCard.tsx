// import { Badge } from "@/components/ui/badge";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { cn } from "@/lib/utils";
// import Link from "next/link";
// import Markdown from "react-markdown";

// interface ProjectProps {
//   title: string;
//   href?: string;
//   description: string;
//   dates: string;
//   technologies?: readonly string[];
//   link?: string;
//   image?: string;
//   video?: string;
//   links?: readonly {
//     icon: React.ReactNode;
//     type: string;
//     href: string;
//   }[];
//   className?: string;
// }

// export default function ProjectCard({
//   title,
//   href,
//   description,
//   dates,
//   technologies,
//   link,
//   video,
//   links,
//   className,
// }: ProjectProps) {
//   return (
//     <Card className={cn("flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full relative group", className)}>
//       <Link
//         href={href || "#"}
//         className="block cursor-pointer"
//       >
//         {video && (
//           <video
//             src={video}
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
//           />
//         )}
//       </Link>

//       <CardHeader className="px-2">
//         <div className="space-y-1">
//           <CardTitle className="mt-1 text-base">{title}</CardTitle>
//           <time className="font-sans text-xs text-muted-foreground">{dates}</time>
//           {link && (
//             <div className="hidden font-sans text-xs underline print:visible">
//               {link.replace("https://", "").replace("www.", "").replace("/", "")}
//             </div>
//           )}
//            <Markdown>
//             {description}
//           </Markdown>
//         </div>
//       </CardHeader>

//       <CardContent className="mt-auto flex flex-col px-2">
//         {technologies && technologies.length > 0 && (
//           <div className="mt-2 flex flex-wrap gap-1 max-w-full overflow-hidden">
//             {technologies.map((tech) => (
//               <Badge
//                 className="px-1 py-0 text-[10px] whitespace-nowrap"
//                 variant="secondary"
//                 key={tech}
//               >
//                 {tech}
//               </Badge>
//             ))}
//           </div>
//         )}
//       </CardContent>

//       <CardFooter className="px-2 pb-2">
//         {links && links.length > 0 && (
//           <div className="flex flex-row flex-wrap items-start gap-1">
//             {links.map((link, idx) => (
//               <Link href={link.href} key={idx} target="_blank">
//                 <Badge className="flex gap-2 px-2 py-1 text-[10px]">
//                   {link.icon}
//                   {link.type}
//                 </Badge>
//               </Link>
//             ))}
//           </div>
//         )}
//       </CardFooter>
//     </Card>
//   );
// }
