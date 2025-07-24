import Container from "@/components/common/Container";
import { AuroraText } from "@/components/magicui/aurora-text";
import ProjectCard from "@/components/ui/ProjectCard";
import { projectsData } from "@/data/Projects/Projects";

interface ProjectsPageProps {
  containerClassName?: string;
  gridClassName?: string;
  titleClassName?: string;
  limit?: number;
}
export default function ProjectsPage({
  containerClassName = "mx-auto px-6 lg:px-12 max-w-3xl mt-20 py-4",
  gridClassName = "flex flex-col gap-6", 
  titleClassName = "text-2xl font-semibold text-gray-900 dark:text-white mb-10 ",
  limit,
}: ProjectsPageProps) {
  const displayedProjects = limit
    ? projectsData.slice(0, limit)
    : projectsData;

  return (
    <Container className={containerClassName}>
      <h1 className={titleClassName}>
        My <AuroraText> Projects </AuroraText> 
      </h1>
      <div className={gridClassName}>
        {displayedProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </Container>
  );
}
