"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Download() {
  const { t } = useLanguage();

  return (
    <section
      id="download"
      className="relative py-20 px-4 bg-gradient-to-r from-purple-900/30 to-blue-900/30"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t("homepage.download.title")}
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {t("homepage.download.subtitle")}
          </p>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          {/* App Store Button */}
          <Link
            href="https://apps.apple.com/app/aeonova"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-4 bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <div className="text-3xl">🍎</div>
            <div className="text-left">
              <div className="text-sm text-gray-300 group-hover:text-white transition-colors">
                {t("homepage.download.appStore.text")}
              </div>
              <div className="text-xl font-bold">
                {t("homepage.download.appStore.store")}
              </div>
            </div>
          </Link>

          {/* Google Play Button */}
          <Link
            href="https://play.google.com/store/apps/details?id=com.aeonova"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-4 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <div className="text-3xl">📱</div>
            <div className="text-left">
              <div className="text-sm text-green-100 group-hover:text-white transition-colors">
                {t("homepage.download.googlePlay.text")}
              </div>
              <div className="text-xl font-bold">
                {t("homepage.download.googlePlay.store")}
              </div>
            </div>
          </Link>
        </div>

        {/* QR Code Section */}
        <div className="inline-flex items-center space-x-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
          {/* QR Code placeholder */}
          <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">📱</div>
              <div className="text-xs text-gray-600 font-medium">
                {t("homepage.download.qr.title")}
              </div>
            </div>
          </div>

          <div className="text-left space-y-2">
            <h3 className="text-white font-bold text-lg">
              {t("homepage.download.qr.quickDownload")}
            </h3>
            <p className="text-white/70 text-sm max-w-xs">
              {t("homepage.download.qr.description")}
            </p>
            <div className="flex items-center space-x-2 text-green-400">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">
                {t("homepage.download.qr.free")}
              </span>
            </div>
          </div>
        </div>

        {/* Features reminder */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center space-y-2">
            <div className="text-2xl">❤️</div>
            <div className="text-white/80 text-sm">
              {t("homepage.download.features.heartfulAI")}
            </div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl">🌍</div>
            <div className="text-white/80 text-sm">
              {t("homepage.download.features.multiLanguage")}
            </div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl">💬</div>
            <div className="text-white/80 text-sm">
              {t("homepage.download.features.unlimitedChat")}
            </div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl">🔒</div>
            <div className="text-white/80 text-sm">
              {t("homepage.download.features.securePrivate")}
            </div>
          </div>
        </div>

        {/* Coming soon section for web */}
        <div className="mt-16 p-6 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-white/10 rounded-2xl">
          <h3 className="text-2xl font-bold text-white mb-3">
            {t("homepage.download.comingSoon.title")}
          </h3>
          <p className="text-white/70 mb-4">
            {t("homepage.download.comingSoon.description")}
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            {t("homepage.download.comingSoon.notify")}
          </button>
        </div>
      </div>
    </section>
  );
}
