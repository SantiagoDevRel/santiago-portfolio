// Root layout — Inter font, dark theme, global navbar
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
