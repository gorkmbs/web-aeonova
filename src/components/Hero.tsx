"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-16"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-indigo-900/50" />

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute top-1/3 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div className="space-y-8">
          {/* Main Title */}
          <h1 className="hero-title text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            {t("homepage.hero.title")}
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-xl md:text-2xl text-purple-200 font-medium">
            {t("homepage.hero.subtitle")}
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            {t("homepage.hero.description")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link
              href="#download"
              className="download-btn px-8 py-4 rounded-full text-white font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              🚀 {t("homepage.hero.cta")}
            </Link>

            <Link
              href="#about"
              className="px-8 py-4 rounded-full text-white font-medium text-lg border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-300"
            >
              ✨ {t("homepage.hero.learnMore")}
            </Link>
          </div>

          {/* App Preview or Features Icons */}
          <div className="pt-12 flex justify-center items-center space-x-8 text-white/60">
            <div className="flex flex-col items-center space-y-2">
              <div className="text-4xl">💬</div>
              <p className="text-sm">
                {t("homepage.hero.quickFeatures.aiChat")}
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="text-4xl">📖</div>
              <p className="text-sm">
                {t("homepage.hero.quickFeatures.saveMemories")}
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="text-4xl">🌍</div>
              <p className="text-sm">
                {t("homepage.hero.quickFeatures.globalExplore")}
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="text-4xl">❤️</div>
              <p className="text-sm">
                {t("homepage.hero.quickFeatures.hasHeart")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link
          href="#features"
          className="text-white/60 hover:text-white transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
