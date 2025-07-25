import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { ViewTransitions } from "next-view-transitions";
import { Analytics } from "@vercel/analytics/next";
// import GitHubStars from "@/components/landingPage/GithubStar";
import Providers from "@/components/Theam/Providers";
import { ParticlesDemo } from "@/components/common/Particlesbg";

export const metadata = {
  title: "Nishul's Portfolio",
  description:
    "A perfect portfolio website that showcase your skills and projects. minimal and smooth microinteractions. perfect for developers and designers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning={true}>
        <body
          className={`font-hanken-grotesk flex h-screen flex-col bg-neutral-100 antialiased dark:bg-black`}
        >
          <Providers>
            <div className="absolute inset-0 -z-10">
              <ParticlesDemo />
            </div>
            {/* <GitHubStars /> */}
            <Navbar />
            {children}
            <Analytics />
            <div className="pointer-events-none fixed bottom-0 z-30 h-3/5 w-full bg-gradient-to-t from-white via-transparent to-transparent dark:from-black dark:via-transparent dark:to-transparent">
              {" "}
            </div>
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
