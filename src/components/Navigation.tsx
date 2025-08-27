"use client";

import { useState } from "react";
import Link from "next/link";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navigation() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold text-white hover:text-purple-300 transition-colors"
            >
              {t("homepage.hero.title")} ❤️
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="#home"
                className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t("navigation.home")}
              </Link>
              <Link
                href="#features"
                className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t("navigation.features")}
              </Link>
              <Link
                href="#about"
                className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t("navigation.about")}
              </Link>
              <Link
                href="#download"
                className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t("navigation.download")}
              </Link>

              {/* Legal Dropdown */}
              <div className="relative group">
                <button className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
                  {t("navigation.legal")}
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-lg border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-2 space-y-1">
                    <Link
                      href="/privacy"
                      className="block px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                    >
                      {t("navigation.privacy")}
                    </Link>
                    <Link
                      href="/terms"
                      className="block px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                    >
                      {t("navigation.terms")}
                    </Link>
                    <Link
                      href="/gdpr"
                      className="block px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                    >
                      {t("navigation.gdpr")}
                    </Link>
                    <Link
                      href="/cookies"
                      className="block px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                    >
                      {t("navigation.cookies")}
                    </Link>
                    <Link
                      href="/data-retention"
                      className="block px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                    >
                      {t("navigation.dataRetention")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Language Selector and Mobile menu button */}
          <div className="flex items-center space-x-4">
            <LanguageSelector />

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-purple-300 p-2"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/30 backdrop-blur-lg rounded-lg mt-2">
              <Link
                href="#home"
                className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("navigation.home")}
              </Link>
              <Link
                href="#features"
                className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("navigation.features")}
              </Link>
              <Link
                href="#about"
                className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("navigation.about")}
              </Link>
              <Link
                href="#download"
                className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("navigation.download")}
              </Link>

              {/* Legal Links for Mobile */}
              <div className="border-t border-white/10 pt-2 mt-2">
                <div className="text-white/60 px-3 py-1 text-sm font-medium">
                  {t("navigation.legal")}
                </div>
                <Link
                  href="/privacy"
                  className="text-white/80 hover:text-purple-300 block px-3 py-2 rounded-md text-sm transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("navigation.privacy")}
                </Link>
                <Link
                  href="/terms"
                  className="text-white/80 hover:text-purple-300 block px-3 py-2 rounded-md text-sm transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("navigation.terms")}
                </Link>
                <Link
                  href="/gdpr"
                  className="text-white/80 hover:text-purple-300 block px-3 py-2 rounded-md text-sm transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("navigation.gdpr")}
                </Link>
                <Link
                  href="/cookies"
                  className="text-white/80 hover:text-purple-300 block px-3 py-2 rounded-md text-sm transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("navigation.cookies")}
                </Link>
                <Link
                  href="/data-retention"
                  className="text-white/80 hover:text-purple-300 block px-3 py-2 rounded-md text-sm transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("navigation.dataRetention")}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
