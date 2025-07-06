import { FaHtml5, FaJava, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { PiFileCssFill } from "react-icons/pi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiExpress, SiMongodb } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

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
      title: "Frontend",
      skills: [
        { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
        { name: "CSS", icon: PiFileCssFill, color: "text-blue-500" },
        { name: "React", icon: FaReact, color: "text-cyan-500" },
        { name: "Next.js", icon: RiNextjsFill, color: "text-gray-900 dark:text-white" },
        { name: "Tailwind", icon: RiTailwindCssFill, color: "text-cyan-600" },
        { name: "Framer Motion", icon: TbBrandFramerMotion, color: "text-purple-600" },
      ]
    },
    {
      title: "Backend & Tools",
      skills: [
        { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
        { name: "Express", icon: SiExpress, color: "text-gray-600" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
        { name: "Postman", icon: SiPostman, color: "text-orange-600" },
      ]
    }
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 lg:px-12 py-12">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        Tech Skills
        </h2>
      <div className="space-y-4">
        {techCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.skills.map((skill, skillIndex) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skillIndex}
                    className="group flex items-center gap-3 p-2 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-400 transition-all duration-200 hover:shadow-md bg-white dark:bg-gray-900/60"
                  >
                    <IconComponent className={`w-4 h-4 ${skill.color} group-hover:scale-110 transition-transform duration-200`} />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}