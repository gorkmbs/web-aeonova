"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-black/40 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Link
              href="/"
              className="text-3xl font-bold text-white hover:text-purple-300 transition-colors"
            >
              {t("homepage.hero.title")} ❤️
            </Link>
            <p className="text-white/70 max-w-md leading-relaxed">
              {t("footer.description")}
            </p>

            {/* Social Links */}
            <div className="space-y-3">
              <h3 className="text-white font-semibold">
                {t("footer.social.title")}
              </h3>
              <div className="flex space-x-4">
                <Link
                  href="https://twitter.com/aeonova"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    🐦
                  </div>
                </Link>
                <Link
                  href="https://instagram.com/aeonova"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    📷
                  </div>
                </Link>
                <Link
                  href="https://discord.gg/aeonova"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <span className="sr-only">Discord</span>
                  <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                    💬
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">
              {t("footer.quickLinks.title")}
            </h3>
            <div className="space-y-2">
              <Link
                href="#home"
                className="block text-white/70 hover:text-white transition-colors"
              >
                {t("footer.quickLinks.home")}
              </Link>
              <Link
                href="#features"
                className="block text-white/70 hover:text-white transition-colors"
              >
                {t("footer.quickLinks.features")}
              </Link>
              <Link
                href="#about"
                className="block text-white/70 hover:text-white transition-colors"
              >
                {t("footer.quickLinks.about")}
              </Link>
              <Link
                href="#download"
                className="block text-white/70 hover:text-white transition-colors"
              >
                {t("footer.quickLinks.download")}
              </Link>
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">
              {t("footer.legalSection.title")}
            </h3>
            <div className="space-y-2">
              <Link
                href="/privacy"
                className="block text-white/70 hover:text-white transition-colors"
              >
                {t("footer.links.privacy")}
              </Link>
              <Link
                href="/terms"
                className="block text-white/70 hover:text-white transition-colors"
              >
                {t("footer.links.terms")}
              </Link>
              <Link
                href="/gdpr"
                className="block text-white/70 hover:text-white transition-colors"
              >
                {t("footer.links.gdpr")}
              </Link>
              <Link
                href="/cookies"
                className="block text-white/70 hover:text-white transition-colors"
              >
                {t("footer.links.cookies")}
              </Link>
              <Link
                href="/data-retention"
                className="block text-white/70 hover:text-white transition-colors"
              >
                {t("footer.links.dataRetention")}
              </Link>
              <Link
                href="/support"
                className="block text-white/70 hover:text-white transition-colors"
              >
                {t("footer.links.support")}
              </Link>
              <Link
                href="/contact"
                className="block text-white/70 hover:text-white transition-colors"
              >
                {t("footer.links.contact")}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">{t("footer.legal")}</div>

            {/* App Download Links */}
            <div className="flex space-x-4">
              <Link
                href="https://apps.apple.com/app/aeonova"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg transition-colors"
              >
                <span className="text-xl">🍎</span>
                <span className="text-white text-sm font-medium">
                  {t("homepage.download.appStore.store")}
                </span>
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.aeonova"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg transition-colors"
              >
                <span className="text-xl">📱</span>
                <span className="text-white text-sm font-medium">
                  {t("homepage.download.googlePlay.store")}
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Heart animation */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 text-white/60">
            <span className="text-sm">{t("footer.madeWith.text")}</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span className="text-sm">{t("footer.madeWith.forWorld")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
