import { FaHtml5, FaJava, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { PiFileCssFill } from "react-icons/pi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiExpress, SiMongodb } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { Button } from "../ui/button";
import { AuroraText } from "../magicui/aurora-text";

export default function TechSkills() {
  const techCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", icon: FaJava, color: "text-orange-600" },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
        { name: "TypeScript", icon: BiLogoTypescript, color: "text-blue-600" },
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
        { name: "CSS", icon: PiFileCssFill, color: "text-blue-500" },
        { name: "React", icon: FaReact, color: "text-cyan-500" },
        { name: "Next.js", icon: RiNextjsFill, color: "text-gray-900 dark:text-white" },
        { name: "Tailwind", icon: RiTailwindCssFill, color: "text-cyan-600" },
        { name: "Framer Motion", icon: TbBrandFramerMotion, color: "text-purple-600" },
        { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
        { name: "Express", icon: SiExpress, color: "text-gray-600" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      ]
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 lg:px-12 py-12">
      <div className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        Tech <AuroraText> Skills</AuroraText> 
      </div>

      <div className="space-y-8">
        {techCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (

                <Button
                  key={skillIndex}
                  variant="outline"
                  className="flex items-center gap-2">
                  <skill.icon className={`w-4 h-4 ${skill.color}`} />
                  {skill.name}
                </Button>

              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}