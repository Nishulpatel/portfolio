import { Icons } from "@/components/ui/icons";

export const projectsData = [
  {
    title: "DropitHere",
    href: "https://dropithere.nishul.dev/",
    progress: "Completed",
    description:
      "Built a platform to save and organize useful content like Twitter threads and YouTube videos under custom topic-based playlists. Enabled users to generate shareable links for their saved collections, making knowledge sharing easier and more structured.",
    technologies: [
      "React",
      "Express.js",
      "MongoDB",
      "TailwindCSS",
      "REST API",
    ],
    links: [
      {
        type: "Website",
        href: "https://dropithere.nishul.dev/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/NishulDhakar/DropitHere",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/dropithereImg.png",
    viewDetails: {
      type: "Details",
      href: "/dropithere",
      icon: <Icons.squareArrowOutUpRight className="size-3" />,
    },
  },
  {
  title: "SmartEssay",
  href: "https://github.com/NishulDhakar/SmartEssay",
  progress: "ongoing",
  description:
    "SmartEssay is a placement-focused web app built to help students master essay writing for mass-hiring exams. It offers a daily writing environment, vocabulary-building tools, live word count tracking, company-specific essay topics, progress tracking, and even optional focus music — all designed to turn writing into your strength during placements.",
  technologies: [
    "React",
    "Next.js",
    "TailwindCSS",
    "OpenAI API",
    "TypeScript",
  ],
  links: [
    {
      type: "Source",
      href: "https://github.com/NishulDhakar/SmartEssay",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "/smartessay.png", 
  viewDetails: {
    type: "Details",
    href: "/smartessay",
    icon: <Icons.squareArrowOutUpRight className="size-3" />,
  },
}

];
