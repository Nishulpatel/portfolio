import TechSkills from "@/components/landingPage/Skills";
import About from "@/components/landingPage/About";
import Container from "@/components/common/Container";
import Github from "@/components/landingPage/Github";
import Footer from "@/components/common/Footer";
// import ProjectsPage from "./projects/page";
import ViewMore from "@/components/ui/ViewMoreButton";
import ContactForm from "@/components/landingPage/Contact";


export default function HomePage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
    <Container className="min-h-[200vh] p-4 md:pt-20 md:pb-10">
      <About />

      <TechSkills />
      <Github />
      {/* <ProjectsPage
        limit={2} 
        containerClassName="mx-auto px-6 lg:px-12 max-w-4xl mt-8 py-4"
        gridClassName="grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
        titleClassName="text-2xl font-semibold text-gray-900 dark:text-white mb-10"
      /> */}
      <ViewMore />
      <ContactForm />
      <Footer />
    </Container>

    </div>
  );
}
