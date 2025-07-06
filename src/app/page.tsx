import TechSkills from "@/components/landingPage/Tech-Skills";
import About from "@/components/landingPage/About";
import Container from "@/components/common/Container";


export default function HomePage() {
  return (
        <Container className="min-h-screen py-8">
         <About />
          <TechSkills />
            </Container>
  );
}