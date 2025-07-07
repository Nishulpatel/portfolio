import TechSkills from "@/components/landingPage/Skills";
import About from "@/components/landingPage/About";
import Container from "@/components/common/Container";
import Github from "@/components/landingPage/Github";

export default function HomePage() {
  return (
    <Container className="min-h-screen py-8">
      <About />
      <TechSkills />
      <Github />
    </Container>
  );
}
