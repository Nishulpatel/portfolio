import "./globals.css";
import Footer from "@/components/common/Footer";
import StackingNavbar from "@/components/common/Navbar";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`flex flex-col h-screen font-hanken-grotesk antialiased`}>
            <StackingNavbar />

        {children}
          <Footer />
      </body>
    </html>
  );
}