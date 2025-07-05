// import Footer from "../components/Footer";
import NavigationBar from "../components/Navbar";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ThemeToggle } from "./theme-toggle";

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
      <body className="h-screen  flex flex-col">
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <div className="flex justify-between p-8">
              <NavigationBar />
                <ThemeToggle />
          </div>

          <main className= "libertinus-mono-regular flex-1 overflow-y-auto" >{children}</main>
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}