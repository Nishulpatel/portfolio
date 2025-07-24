import TechSkills from "@/components/landingPage/Skills";
import About from "@/components/landingPage/About";
import Container from "@/components/common/Container";
import Github from "@/components/landingPage/Github";
import Footer from "@/components/common/Footer";
import ContactForm from "@/components/landingPage/Contact";
import ProjectsPage from "./projects/page";
import { ParticlesDemo } from "@/components/common/Particlesbg";
import { ShinyButton } from "@/components/magicui/shiny-button";
import Link from "next/link";


export default function HomePage() {
  return (
      
    <div>
      <div className="absolute inset-0 -z-10">
        <ParticlesDemo />
      </div>


      <div className="flex min-h-screen items-start justify-start">
        <Container className="min-h-[200vh] p-4 md:pt-20 md:pb-10">
          <About />
          <TechSkills />
          <Github />
            <ProjectsPage
            limit={2}
            containerClassName="mx-auto px-6 lg:px-12 max-w-4xl mt-8 py-4"
            gridClassName="flex flex-col gap-6"
            titleClassName="text-2xl font-semibold text-gray-900 dark:text-white mb-10"
          />

          
          <Link href={"/projects"}>
        <ShinyButton className="mt-8 ml-12">View More</ShinyButton>
      </Link>
    
          <ContactForm />
          <Footer />
        </Container>
      </div>
</div>
  );
}
