"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: "💬",
      key: "aiChat",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: "📖",
      key: "saveMemories",
      gradient: "from-green-500 to-blue-500",
    },
    {
      icon: "🌍",
      key: "globalExplore",
      gradient: "from-yellow-500 to-red-500",
    },
    {
      icon: "🔔",
      key: "smartNotifications",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: "🌐",
      key: "multilingual",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section id="features" className="relative py-20 px-4 bg-black/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t("homepage.features.title")}
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {t("homepage.features.subtitle")}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.key}
              className="feature-card p-8 rounded-2xl group cursor-pointer"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Icon with gradient background */}
              <div
                className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>

              {/* Feature Title */}
              <h3 className="text-xl font-bold text-white mb-4">
                {t(`homepage.features.${feature.key}.title`)}
              </h3>

              {/* Feature Description */}
              <p className="text-white/70 leading-relaxed">
                {t(`homepage.features.${feature.key}.desc`)}
              </p>

              {/* Hover indicator */}
              <div className="mt-6 flex items-center text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium">
                  {t("homepage.features.learnMore")}
                </span>
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 px-6 py-3 rounded-full border border-white/10">
            <span className="text-yellow-400">✨</span>
            <span className="text-white font-medium">
              {t("homepage.features.moreFeatures")}
            </span>
            <span className="text-yellow-400">✨</span>
          </div>
        </div>
      </div>
    </section>
  );
}
