import "./save.css";
import Navbar from "@/components/common/Navbar";
import { ViewTransitions } from "next-view-transitions";
import { Analytics } from "@vercel/analytics/next"
import GitHubStars from "@/components/landingPage/GithubStar";

export const metadata = {
  title: "Nishul's Portfolio",
  description: "A perfect portfolio website that showcase your skills and projects. minimal and smooth microinteractions. perfect for developers and designers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`flex flex-col h-screen font-hanken-grotesk antialiased bg-neutral-100 dark:bg-black`}>
        <GitHubStars />
        <Navbar />
        {children}
        <Analytics />
       <div className="z-30 pointer-events-none fixed bottom-0 w-full h-3/5 bg-gradient-to-t from-white via-transparent to-transparent dark:from-black dark:via-transparent dark:to-transparent"> </div>
      </body>
    </html>
    </ViewTransitions>
  );
}