import Container from "@/components/common/Container";
import ProjectCard from "@/components/ui/ProjectCard";
import { projectsData } from "@/data/Projects/Projects";

interface ProjectsPageProps {
  containerClassName?: string;
  gridClassName?: string;
  titleClassName?: string;
}

export default function ProjectsPage({
  containerClassName = "mx-auto px-6 lg:px-12 max-w-3xl mt-20 py-4",
  gridClassName = "grid gap-6 sm:grid-cols-2 lg:grid-cols-2",
  titleClassName = "text-2xl font-semibold text-gray-900 dark:text-white mb-10",
}: ProjectsPageProps) {
  return (
    <Container className={containerClassName}>
      <h1 className={titleClassName}>
        My <span className="text-blue-500">Projects</span>
      </h1>
      <div className={gridClassName}>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </Container>
  );
}
