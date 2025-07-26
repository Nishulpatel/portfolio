import Container from "@/components/common/Container";
import Footer from "@/components/layout/Footer";
import CertificatesSection from "@/components/sections/about/Certificate";
import Education from "@/components/sections/about/Education";
import Info from "@/components/sections/about/info";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Nishul Dhakar",
  description:
    "Explore more about Nishul Dhakar, including his education, certifications, and skills.",
  openGraph: {
    title: "About - Nishul Dhakar",
    description:
      "Explore more about Nishul Dhakar, including his education, certifications, and skills.",
    url: "https://nishul.dev/about",
    siteName: "Nishul Dhakar",
    type: "website",
    images: [
      {
        url: "/amime.jpeg",
        width: 1200,
        height: 630,
        alt: "About Nishul Dhakar",
      },
    ],
    locale: "en_US",
  },
};

export default function AboutPage() {
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
