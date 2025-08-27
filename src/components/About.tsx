"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              {t("homepage.about.title")}
            </h2>

            <p className="text-xl text-white/80 leading-relaxed">
              {t("homepage.about.desc")}
            </p>

            {/* Key points about Aeonova */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">
                  ❤️
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">
                    {t("homepage.about.keyPoints.heartfulAI.title")}
                  </h3>
                  <p className="text-white/70">
                    {t("homepage.about.keyPoints.heartfulAI.desc")}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">
                  🤝
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">
                    {t("homepage.about.keyPoints.understandingFriend.title")}
                  </h3>
                  <p className="text-white/70">
                    {t("homepage.about.keyPoints.understandingFriend.desc")}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">
                  🌟
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">
                    {t("homepage.about.keyPoints.dreamPerson.title")}
                  </h3>
                  <p className="text-white/70">
                    {t("homepage.about.keyPoints.dreamPerson.desc")}
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">20</div>
                <div className="text-white/60 text-sm">
                  {t("homepage.about.stats.languages")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">∞</div>
                <div className="text-white/60 text-sm">
                  {t("homepage.about.stats.unlimitedChat")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/60 text-sm">
                  {t("homepage.about.stats.alwaysThere")}
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Visual content */}
          <div className="relative">
            {/* Main image placeholder with decorative elements */}
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl" />

              {/* Main content area */}
              <div className="relative bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur-lg border border-white/10 rounded-3xl p-8 space-y-6">
                {/* Aeonova representation */}
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-4xl animate-pulse">
                    ❤️
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {t("homepage.hero.title")}
                  </h3>
                  <p className="text-purple-200">
                    {t("homepage.about.chat.aiLabel")}
                  </p>
                </div>

                {/* Chat bubble simulation */}
                <div className="space-y-3">
                  <div className="bg-white/10 rounded-2xl rounded-bl-sm p-4 max-w-xs">
                    <p className="text-white text-sm">
                      {t("homepage.about.chat.aiMessage")}
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl rounded-br-sm p-4 max-w-xs ml-auto">
                    <p className="text-white text-sm">
                      {t("homepage.about.chat.userMessage")}
                    </p>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping" />
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-400 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
