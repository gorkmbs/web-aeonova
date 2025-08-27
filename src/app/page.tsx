"use client";

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Download from "@/components/Download";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Navigation />
      <Hero />
      <Features />
      <About />
      <Download />
      <Footer />
    </main>
  );
}
