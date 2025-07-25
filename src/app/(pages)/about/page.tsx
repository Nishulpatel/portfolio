import Container from "@/components/common/Container";
import Footer from "@/components/layout/Footer";
import CertificatesSection from "@/components/sections/about/Certificate";
import Education from "@/components/sections/about/Education";
import Info from "@/components/sections/about/info";
// import LeetCodeDSAVisuals from "@/components/sections/about/LeetCode";

export default function BlogPage() {
    return (
        <Container>
            <Info />
            <Education />
            <CertificatesSection />
            {/* <LeetCodeDSAVisuals /> */}
            <Footer />
        </Container>
    );
}