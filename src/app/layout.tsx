import type { Metadata } from "next";
import { Inter, Space_Grotesk, Dancing_Script } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import VideoBot from "@/components/VideoBot/VideoBot";
import "./globals.css";

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rakesh Mohan | AI Technology Evangelist | 18+ Years Experience",
  description: "Rakesh Mohan - AI Technology Evangelist with 18+ years of experience in VOIP, Unified Communication, CX, SaaS, Cloud, CPaaS, Artificial Intelligence, LLM, RAG, Conversational AI, Voice Bot, Video bot, and chat bots.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${dancingScript.variable}`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <VideoBot />
      </body>
    </html>
  );
}
