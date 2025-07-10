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
  // {
  //   title: "SmartEssay",
  //   href: "https://github.com/NishulDhakar/SmartEssay",
  //   progress: "Ongoing",
  //   description:
  //     "SmartEssay is a placement-focused web app built to help students master essay writing for mass-hiring exams. It offers a daily writing environment, vocabulary-building tools, live word count tracking, company-specific essay topics, progress tracking, and even optional focus music — all designed to turn writing into your strength during placements.",
  //   technologies: [
  //     "React",
  //     "Next.js",
  //     "TailwindCSS",
  //     "OpenAI API",
  //     "TypeScript",
  //   ],
  //   links: [
  //       {
  //       type: "Website",
  //       href: "https://smartessay.nishul.dev/",
  //       icon: <Icons.globe className="size-3" />,
  //     },
  //     {
  //       type: "Source",
  //       href: "https://github.com/NishulDhakar/SmartEssay",
  //       icon: <Icons.github className="size-3" />,
  //     },
  //   ],
  //   image: "/smartessay.png",
  //   viewDetails: {
  //     type: "Details",
  //     href: "/smartessay",
  //     icon: <Icons.squareArrowOutUpRight className="size-3" />,
  //   },
  // },
  // {
  //   title: "Portfolio",
  //   href: "https://github.com/NishulDhakar/PortFolio",
  //   progress: "Completed",
  //   description:
  //     "Personal portfolio site to showcase projects, skills, and contact information.",
  //   technologies: ["Next.js", "TypeScript", "TailwindCSS"],
  //   links: [
  //     {
  //       type: "Source",
  //       href: "https://github.com/NishulDhakar/PortFolio",
  //       icon: <Icons.github className="size-3" />,
  //     },
  //   ],
  //   image: "/portfolio.png",
  //   viewDetails: {
  //     type: "Details",
  //     href: "/portfolio",
  //     icon: <Icons.squareArrowOutUpRight className="size-3" />,
  //   },
  // },
  // {
  //   title: "Todo Frontend Backend",
  //   href: "https://github.com/NishulDhakar/Todo-FrondEnd-BackEnd",
  //   progress: "Completed",
  //   description:
  //     "A full-stack Todo app with frontend and backend for task management.",
  //   technologies: ["JavaScript", "Node.js", "Express.js", "CSS"],
  //   links: [
  //     {
  //       type: "Source",
  //       href: "https://github.com/NishulDhakar/Todo-FrondEnd-BackEnd",
  //       icon: <Icons.github className="size-3" />,
  //     },
  //   ],
  //   image: "/todo.png",
  //   viewDetails: {
  //     type: "Details",
  //     href: "/todoapp",
  //     icon: <Icons.squareArrowOutUpRight className="size-3" />,
  //   },
  // },
  // {
  //   title: "Typing Practice Web",
  //   href: "https://github.com/NishulDhakar/Typing-Practice-Web",
  //   progress: "Completed",
  //   description:
  //     "Typing speed practice tool to improve accuracy and speed.",
  //   technologies: ["React", "JavaScript", "TailwindCSS"],
  //   links: [
  //     {
  //       type: "Source",
  //       href: "https://github.com/NishulDhakar/Typing-Practice-Web",
  //       icon: <Icons.github className="size-3" />,
  //     },
  //   ],
  //   image: "/typing.png",
  //   viewDetails: {
  //     type: "Details",
  //     href: "/typingpractice",
  //     icon: <Icons.squareArrowOutUpRight className="size-3" />,
  //   },
  // },
  // {
  //   title: "QR Generator",
  //   href: "https://github.com/NishulDhakar/QR-Generator",
  //   progress: "Completed",
  //   description: "QR Code generator web app built using React.",
  //   technologies: ["React", "JavaScript", "TailwindCSS"],
  //   links: [
  //     {
  //       type: "Source",
  //       href: "https://github.com/NishulDhakar/QR-Generator",
  //       icon: <Icons.github className="size-3" />,
  //     },
  //   ],
  //   image: "/qrcode.png",
  //   viewDetails: {
  //     type: "Details",
  //     href: "/qrgenerator",
  //     icon: <Icons.squareArrowOutUpRight className="size-3" />,
  //   },
  // },
  // {
  //   title: "Restaurant Website",
  //   href: "https://github.com/NishulDhakar/Restaurant-website",
  //   progress: "Completed",
  //   description: "Responsive restaurant website UI using React.",
  //   technologies: ["React", "JavaScript", "CSS"],
  //   links: [
  //     {
  //       type: "Source",
  //       href: "https://github.com/NishulDhakar/Restaurant-website",
  //       icon: <Icons.github className="size-3" />,
  //     },
  //   ],
  //   image: "/restaurant.png",
  //   viewDetails: {
  //     type: "Details",
  //     href: "/restaurant",
  //     icon: <Icons.squareArrowOutUpRight className="size-3" />,
  //   },
  // },
  // {
  //   title: "DrumKit",
  //   href: "https://github.com/NishulDhakar/DrumKit",
  //   progress: "Completed",
  //   description: "Interactive drum kit built with JavaScript and DOM events.",
  //   technologies: ["HTML", "CSS", "JavaScript"],
  //   links: [
  //     {
  //       type: "Source",
  //       href: "https://github.com/NishulDhakar/DrumKit",
  //       icon: <Icons.github className="size-3" />,
  //     },
  //   ],
  //   image: "/drumkit.png",
  //   viewDetails: {
  //     type: "Details",
  //     href: "/drumkit",
  //     icon: <Icons.squareArrowOutUpRight className="size-3" />,
  //   },
  // },
  // {
  //   title: "Tindog",
  //   href: "https://github.com/NishulDhakar/Tindog",
  //   progress: "Completed",
  //   description: "Simple static webpage made with HTML and CSS.",
  //   technologies: ["HTML", "CSS"],
  //   links: [
  //     {
  //       type: "Source",
  //       href: "https://github.com/NishulDhakar/Tindog",
  //       icon: <Icons.github className="size-3" />,
  //     },
  //   ],
  //   image: "/tindog.png",
  //   viewDetails: {
  //     type: "Details",
  //     href: "/tindog",
  //     icon: <Icons.squareArrowOutUpRight className="size-3" />,
  //   },
  // },
];
