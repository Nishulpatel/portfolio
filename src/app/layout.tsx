import "./globals.css";
import Navbar from "@/components/common/Navbar";
import { ViewTransitions } from "next-view-transitions";
import { Analytics } from "@vercel/analytics/next"
import GitHubStars from "@/components/landingPage/GithubStar";

export const metadata = {
  title: "My Portfolio",
  description: "A modern portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`flex flex-col h-screen font-hanken-grotesk antialiased`}>
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
