import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { Button } from "./button";

interface ProjectProps {
  title: string;
  icon : React.ReactNode;
  href?: string;
  description: string;
  progress?: string;
  technologies?: readonly string[];
  link?: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  viewDetails?: {
    icon: React.ReactNode;
    type: string;
    href: string;
  };
  className?: string;
}

export default function ProjectCard({
  title,
  href,
  description,
  // image,
  progress,
  viewDetails,
  technologies,
  link,
  links,
  icon,
  className,
}: ProjectProps) {
  return (
    <Card
      className={cn(
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full relative group",
        className
      )}>
      {/* <Link target="_blank" href={href || "#"} className="block cursor-pointer">
        {image && (
          <div className="relative w-full h-48 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        )}
      </Link> */}

      <CardHeader className="px-4 mt-6">
        <div className="space-y-1">
          <div className="flex justify-between items-center mb-4">
            <Link
              target="_blank"
              href={href || "#"}
              className="group relative block w-fit cursor-pointer text-bold">
              <CardTitle className="mt-1 text-base relative flex justfy-between gap-2">
                {title} <div className="mt-1">
                  {icon}
                  </div>
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-current transition-all duration-500 group-hover:w-full"></span>
              </CardTitle>
            </Link>

            <div className="flex items-center gap-2">
              {progress === "Completed" ? (
                <span className="w-2 h-2 bg-green-500 rounded-full" />
              ) : progress === "Abandon" ? (
                <span className="w-2 h-2 bg-red-500 rounded-full" />
              ) : (
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
              )}

              <div className="font-sans mr-2 text-xs text-muted-foreground">
                {progress}
              </div>
            </div>
          </div>
          {link && (
            <div className="hidden font-sans text-xs underline print:visible">
              {link
                .replace("https://", "")
                .replace("www.", "")
                .replace("/", "")}
            </div>
          )}
          <Markdown>{description}</Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-4">
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-1 max-w-full overflow-hidden">
            {technologies.map((tech) => (
              <Badge
                className="px-2 py-1 text-[10px] whitespace-nowrap"
                variant="outline"
                key={tech}>
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="px-4 pb-3 flex justify-between">
        {links && links.length > 0 && (
          <div className="flex  gap-30">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer">
                <Badge className="flex px-3 gap-2 py-1 text-[10px]">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}

        {/* {viewDetails && (
          <Link
            href={viewDetails.href}
            target="_blank"
            rel="noopener noreferrer">
            <Button
              variant="link"
              size={"sm"}
              className="flex mr-2 items-center gap-2">
              {viewDetails.type}
              {viewDetails.icon}
            </Button>
          </Link>
        )} */}
      </CardFooter>
    </Card>
  );
}
