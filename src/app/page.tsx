import TechSkills from "@/components/sections/landingPage/Skills";
import About from "@/components/sections/landingPage/About";
import Container from "@/components/common/Container";
// import Github from "@/components/landingPage/Github";
// import ContactForm from "@/components/landingPage/Contact";
import ProjectsPage from "./(pages)/projects/page";
import { ParticlesDemo } from "@/components/common/Particlesbg";
// import { ShinyButton } from "@/components/ui/magicui/shiny-button";
import Link from "next/link";
import { FaArrowCircleRight, FaArrowRight } from "react-icons/fa";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div>
      <div className="absolute inset-0 -z-10">
        <ParticlesDemo />
      </div>
      <div className="flex min-h-screen items-start justify-start">
        <Container className="min-h-full p-4 md:pt-20 md:pb-10">
          <About />
          <TechSkills />
          {/* <Github /> */}
          <ProjectsPage
            limit={2}
            containerClassName="mx-auto px-8 max-w-4xl  py-4"
            gridClassName="flex flex-col gap-6"
            titleClassName="text-2xl font-semibold text-gray-900 dark:text-white mb-10" />
          <Link
            href="/projects"
            className="group mt-8 ml-8 flex items-center gap-2 font-bold transition-all hover:text-gray-300">
            More Projects
            <FaArrowRight className="transition-all duration-200 group-hover:hidden" />
            <FaArrowCircleRight className="hidden transition-all duration-200 group-hover:inline" />
          </Link>
          <Footer />
        </Container>
      </div>
    </div>
  );
}
