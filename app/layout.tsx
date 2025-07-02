import NavigationBar from "../components/Navbar";
import "./globals.css";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body>
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
        <NavigationBar />
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
