// Root layout — Inter font, dark theme, global navbar
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import AuroraBackground from "@/components/AuroraBackground";
import Spotlight from "@/components/Spotlight";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Santiago Trujillo — Developer Advocate",
  description:
    "Developer Advocate working at the intersection of Web3, AI, and Emerging Markets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground isolate`}>
        <SmoothScroll />
        <AuroraBackground />
        <Spotlight />
        <Navbar />
        <main className="relative z-[2]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
