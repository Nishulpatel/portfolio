import "./globals.css";
import Navbar from "@/components/common/Navbar";
import { ViewTransitions } from "next-view-transitions";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`flex flex-col h-screen font-hanken-grotesk antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
    </ViewTransitions>
  );
}
