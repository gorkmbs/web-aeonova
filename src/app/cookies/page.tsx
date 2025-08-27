"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

export default function CookiePage() {
  const { t } = useLanguage();

  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link
            href="/"
            className="text-2xl font-bold text-white hover:text-purple-300 transition-colors"
          >
            {t("legal.cookies.backToHome")}
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 md:p-12">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-5xl font-bold text-white mb-6">
              {t("legal.cookies.title")}
            </h1>
            <p className="text-xl text-white/80 mb-4">
              {t("legal.cookies.subtitle")}
            </p>
            <p className="text-white/60">
              {t("legal.cookies.lastUpdated").replace("{date}", currentDate)}
            </p>
          </header>

          {/* Summary */}
          <div className="bg-blue-900/30 border border-blue-400/40 rounded-xl p-6 mb-12">
            <h2 className="text-2xl font-semibold text-blue-200 mb-4 flex items-center">
              <span className="mr-2">ℹ️</span>
              {t("legal.cookies.summaryTitle")}
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed">
              {t("legal.cookies.summary")}
            </p>
          </div>

          <div className="space-y-12">
            {/* Introduction */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">
                {t("legal.cookies.sections.introduction.title")}
              </h2>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="text-white/90 text-lg leading-relaxed">
                  {t("legal.cookies.sections.introduction.description")}
                </p>
              </div>
            </section>

            {/* What are Cookies */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">
                {t("legal.cookies.sections.whatAreCookies.title")}
              </h2>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-6">
                <p className="text-white/90 text-lg leading-relaxed">
                  {t("legal.cookies.sections.whatAreCookies.description")}
                </p>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-purple-300 mb-4">
                    {t("legal.cookies.sections.whatAreCookies.details.purpose")}
                  </h3>
                  <ul className="space-y-3 text-purple-100">
                    <li className="flex items-start">
                      <span className="mr-3 text-purple-400">•</span>
                      {t(
                        "legal.cookies.sections.whatAreCookies.details.items.functionality"
                      )}
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-purple-400">•</span>
                      {t(
                        "legal.cookies.sections.whatAreCookies.details.items.personalization"
                      )}
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-purple-400">•</span>
                      {t(
                        "legal.cookies.sections.whatAreCookies.details.items.analytics"
                      )}
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-purple-400">•</span>
                      {t(
                        "legal.cookies.sections.whatAreCookies.details.items.performance"
                      )}
                    </li>
                  </ul>
                </div>

                <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-indigo-300 mb-4">
                    {t("legal.cookies.sections.whatAreCookies.types.title")}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-indigo-800/20 rounded-lg p-4">
                      <p className="text-indigo-200 font-medium">
                        {t(
                          "legal.cookies.sections.whatAreCookies.types.session"
                        )}
                      </p>
                    </div>
                    <div className="bg-indigo-800/20 rounded-lg p-4">
                      <p className="text-indigo-200 font-medium">
                        {t(
                          "legal.cookies.sections.whatAreCookies.types.persistent"
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Types of Cookies We Use */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">
                {t("legal.cookies.sections.typesOfCookies.title")}
              </h2>
              <p className="text-white/80 text-lg mb-8">
                {t("legal.cookies.sections.typesOfCookies.description")}
              </p>

              <div className="space-y-8">
                {/* Essential Cookies */}
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="text-2xl font-semibold text-red-300 mb-4">
                    {t("legal.cookies.sections.typesOfCookies.essential.title")}
                  </h3>
                  <p className="text-red-100 mb-6">
                    {t(
                      "legal.cookies.sections.typesOfCookies.essential.description"
                    )}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="bg-red-800/20 rounded-lg p-4">
                      <p className="text-red-200">
                        {t(
                          "legal.cookies.sections.typesOfCookies.essential.items.language"
                        )}
                      </p>
                    </div>
                    <div className="bg-red-800/20 rounded-lg p-4">
                      <p className="text-red-200">
                        {t(
                          "legal.cookies.sections.typesOfCookies.essential.items.security"
                        )}
                      </p>
                    </div>
                    <div className="bg-red-800/20 rounded-lg p-4">
                      <p className="text-red-200">
                        {t(
                          "legal.cookies.sections.typesOfCookies.essential.items.session"
                        )}
                      </p>
                    </div>
                    <div className="bg-red-800/20 rounded-lg p-4">
                      <p className="text-red-200">
                        {t(
                          "legal.cookies.sections.typesOfCookies.essential.items.consent"
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-red-200 font-medium">
                      {t(
                        "legal.cookies.sections.typesOfCookies.essential.note"
                      )}
                    </p>
                    <p className="text-red-300 text-sm">
                      {t(
                        "legal.cookies.sections.typesOfCookies.essential.legalBasis"
                      )}
                    </p>
                  </div>
                </div>

                {/* Performance Cookies */}
                <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
                  <h3 className="text-2xl font-semibold text-green-300 mb-4">
                    {t(
                      "legal.cookies.sections.typesOfCookies.performance.title"
                    )}
                  </h3>
                  <p className="text-green-100 mb-6">
                    {t(
                      "legal.cookies.sections.typesOfCookies.performance.description"
                    )}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="bg-green-800/20 rounded-lg p-4">
                      <p className="text-green-200">
                        {t(
                          "legal.cookies.sections.typesOfCookies.performance.items.loadTimes"
                        )}
                      </p>
                    </div>
                    <div className="bg-green-800/20 rounded-lg p-4">
                      <p className="text-green-200">
                        {t(
                          "legal.cookies.sections.typesOfCookies.performance.items.errorTracking"
                        )}
                      </p>
                    </div>
                    <div className="bg-green-800/20 rounded-lg p-4">
                      <p className="text-green-200">
                        {t(
                          "legal.cookies.sections.typesOfCookies.performance.items.usageStats"
                        )}
                      </p>
                    </div>
                    <div className="bg-green-800/20 rounded-lg p-4">
                      <p className="text-green-200">
                        {t(
                          "legal.cookies.sections.typesOfCookies.performance.items.userFlow"
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-green-200 font-medium">
                      {t(
                        "legal.cookies.sections.typesOfCookies.performance.note"
                      )}
                    </p>
                    <p className="text-green-300 text-sm">
                      {t(
                        "legal.cookies.sections.typesOfCookies.performance.legalBasis"
                      )}
                    </p>
                    <p className="text-green-300 text-sm">
                      {t(
                        "legal.cookies.sections.typesOfCookies.performance.retention"
                      )}
                    </p>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="bg-gray-700/20 border border-gray-500/30 rounded-xl p-6">
                  <h3 className="text-2xl font-semibold text-gray-300 mb-4">
                    {t("legal.cookies.sections.typesOfCookies.marketing.title")}
                  </h3>
                  <p className="text-gray-100 mb-6">
                    {t(
                      "legal.cookies.sections.typesOfCookies.marketing.description"
                    )}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="bg-gray-600/20 rounded-lg p-4">
                      <p className="text-gray-200">
                        {t(
                          "legal.cookies.sections.typesOfCookies.marketing.items.targetedAds"
                        )}
                      </p>
                    </div>
                    <div className="bg-gray-600/20 rounded-lg p-4">
                      <p className="text-gray-200">
                        {t(
                          "legal.cookies.sections.typesOfCookies.marketing.items.socialMedia"
                        )}
                      </p>
                    </div>
                    <div className="bg-gray-600/20 rounded-lg p-4">
                      <p className="text-gray-200">
                        {t(
                          "legal.cookies.sections.typesOfCookies.marketing.items.remarketing"
                        )}
                      </p>
                    </div>
                    <div className="bg-gray-600/20 rounded-lg p-4">
                      <p className="text-gray-200">
                        {t(
                          "legal.cookies.sections.typesOfCookies.marketing.items.crossSite"
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-gray-200 font-medium">
                      {t(
                        "legal.cookies.sections.typesOfCookies.marketing.note"
                      )}
                    </p>
                    <p className="text-gray-300 text-sm">
                      {t(
                        "legal.cookies.sections.typesOfCookies.marketing.future"
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Third-Party Cookies */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">
                {t("legal.cookies.sections.thirdParty.title")}
              </h2>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-6">
                <p className="text-white/90 text-lg">
                  {t("legal.cookies.sections.thirdParty.description")}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-orange-300 mb-4">
                      {t("legal.cookies.sections.thirdParty.current.title")}
                    </h3>
                    <div className="space-y-3">
                      <p className="text-orange-200">
                        {t(
                          "legal.cookies.sections.thirdParty.current.items.fonts"
                        )}
                      </p>
                      <p className="text-orange-200">
                        {t(
                          "legal.cookies.sections.thirdParty.current.items.cdn"
                        )}
                      </p>
                      <p className="text-orange-200">
                        {t(
                          "legal.cookies.sections.thirdParty.current.items.security"
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-yellow-300 mb-4">
                      {t("legal.cookies.sections.thirdParty.future.title")}
                    </h3>
                    <div className="space-y-3">
                      <p className="text-yellow-200">
                        {t(
                          "legal.cookies.sections.thirdParty.future.items.analytics"
                        )}
                      </p>
                      <p className="text-yellow-200">
                        {t(
                          "legal.cookies.sections.thirdParty.future.items.social"
                        )}
                      </p>
                      <p className="text-yellow-200">
                        {t(
                          "legal.cookies.sections.thirdParty.future.items.support"
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-4">
                  <p className="text-amber-200 font-medium">
                    📝 {t("legal.cookies.sections.thirdParty.note")}
                  </p>
                </div>
              </div>
            </section>

            {/* Mobile App Data Storage */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">
                {t("legal.cookies.sections.mobileApp.title")}
              </h2>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white/90 mb-3">
                    {t("legal.cookies.sections.mobileApp.subtitle")}
                  </h3>
                  <p className="text-white/80 text-lg">
                    {t("legal.cookies.sections.mobileApp.description")}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="bg-blue-800/20 rounded-lg p-4">
                      <p className="text-blue-200">
                        {t(
                          "legal.cookies.sections.mobileApp.items.localStorage"
                        )}
                      </p>
                    </div>
                    <div className="bg-blue-800/20 rounded-lg p-4">
                      <p className="text-blue-200">
                        {t("legal.cookies.sections.mobileApp.items.keychain")}
                      </p>
                    </div>
                    <div className="bg-blue-800/20 rounded-lg p-4">
                      <p className="text-blue-200">
                        {t(
                          "legal.cookies.sections.mobileApp.items.appSettings"
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-blue-800/20 rounded-lg p-4">
                      <p className="text-blue-200">
                        {t(
                          "legal.cookies.sections.mobileApp.items.offlineCache"
                        )}
                      </p>
                    </div>
                    <div className="bg-blue-800/20 rounded-lg p-4">
                      <p className="text-blue-200">
                        {t("legal.cookies.sections.mobileApp.items.biometric")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-cyan-300 mb-4">
                    {t("legal.cookies.sections.mobileApp.security.title")}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <p className="text-cyan-200">
                        {t(
                          "legal.cookies.sections.mobileApp.security.items.encryption"
                        )}
                      </p>
                      <p className="text-cyan-200">
                        {t(
                          "legal.cookies.sections.mobileApp.security.items.localOnly"
                        )}
                      </p>
                    </div>
                    <div className="space-y-3">
                      <p className="text-cyan-200">
                        {t(
                          "legal.cookies.sections.mobileApp.security.items.secure"
                        )}
                      </p>
                      <p className="text-cyan-200">
                        {t(
                          "legal.cookies.sections.mobileApp.security.items.privacy"
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Managing Your Cookies */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">
                {t("legal.cookies.sections.management.title")}
              </h2>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-8">
                <p className="text-white/90 text-lg">
                  {t("legal.cookies.sections.management.description")}
                </p>

                <div className="bg-teal-900/20 border border-teal-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-300 mb-4">
                    {t(
                      "legal.cookies.sections.management.browserSettings.title"
                    )}
                  </h3>
                  <p className="text-teal-200 mb-4">
                    {t(
                      "legal.cookies.sections.management.browserSettings.description"
                    )}
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-teal-800/20 rounded-lg p-3">
                      <p className="text-teal-200 text-sm">
                        {t(
                          "legal.cookies.sections.management.browserSettings.items.chrome"
                        )}
                      </p>
                    </div>
                    <div className="bg-teal-800/20 rounded-lg p-3">
                      <p className="text-teal-200 text-sm">
                        {t(
                          "legal.cookies.sections.management.browserSettings.items.firefox"
                        )}
                      </p>
                    </div>
                    <div className="bg-teal-800/20 rounded-lg p-3">
                      <p className="text-teal-200 text-sm">
                        {t(
                          "legal.cookies.sections.management.browserSettings.items.safari"
                        )}
                      </p>
                    </div>
                    <div className="bg-teal-800/20 rounded-lg p-3">
                      <p className="text-teal-200 text-sm">
                        {t(
                          "legal.cookies.sections.management.browserSettings.items.edge"
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-emerald-300 mb-4">
                    {t("legal.cookies.sections.management.ourSettings.title")}
                  </h3>
                  <p className="text-emerald-200 mb-4">
                    {t(
                      "legal.cookies.sections.management.ourSettings.description"
                    )}
                  </p>
                  <div className="space-y-3">
                    <div className="bg-emerald-800/20 rounded-lg p-4">
                      <p className="text-emerald-200">
                        {t(
                          "legal.cookies.sections.management.ourSettings.items.essential"
                        )}
                      </p>
                    </div>
                    <div className="bg-emerald-800/20 rounded-lg p-4">
                      <p className="text-emerald-200">
                        {t(
                          "legal.cookies.sections.management.ourSettings.items.performance"
                        )}
                      </p>
                    </div>
                    <div className="bg-emerald-800/20 rounded-lg p-4">
                      <p className="text-emerald-200">
                        {t(
                          "legal.cookies.sections.management.ourSettings.items.marketing"
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-rose-900/20 border border-rose-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-rose-300 mb-4">
                    {t("legal.cookies.sections.management.consequences.title")}
                  </h3>
                  <p className="text-rose-200 mb-4">
                    {t(
                      "legal.cookies.sections.management.consequences.description"
                    )}
                  </p>
                  <div className="space-y-3">
                    <div className="bg-rose-800/20 rounded-lg p-4">
                      <p className="text-rose-200">
                        {t(
                          "legal.cookies.sections.management.consequences.items.language"
                        )}
                      </p>
                    </div>
                    <div className="bg-rose-800/20 rounded-lg p-4">
                      <p className="text-rose-200">
                        {t(
                          "legal.cookies.sections.management.consequences.items.navigation"
                        )}
                      </p>
                    </div>
                    <div className="bg-rose-800/20 rounded-lg p-4">
                      <p className="text-rose-200">
                        {t(
                          "legal.cookies.sections.management.consequences.items.performance"
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Policy Updates */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">
                {t("legal.cookies.sections.updates.title")}
              </h2>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-6">
                <p className="text-white/90 text-lg">
                  {t("legal.cookies.sections.updates.description")}
                </p>

                <div className="bg-violet-900/20 border border-violet-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-violet-300 mb-4">
                    {t("legal.cookies.sections.updates.notification")}
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-violet-800/20 rounded-lg p-4">
                      <p className="text-violet-200">
                        {t("legal.cookies.sections.updates.items.notice")}
                      </p>
                    </div>
                    <div className="bg-violet-800/20 rounded-lg p-4">
                      <p className="text-violet-200">
                        {t("legal.cookies.sections.updates.items.effective")}
                      </p>
                    </div>
                    <div className="bg-violet-800/20 rounded-lg p-4">
                      <p className="text-violet-200">
                        {t("legal.cookies.sections.updates.items.major")}
                      </p>
                    </div>
                    <div className="bg-violet-800/20 rounded-lg p-4">
                      <p className="text-violet-200">
                        {t("legal.cookies.sections.updates.items.date")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-lg p-4">
                  <p className="text-indigo-200">
                    💡 {t("legal.cookies.sections.updates.recommendation")}
                  </p>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">
                {t("legal.cookies.sections.contact.title")}
              </h2>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white/90 mb-3">
                    {t("legal.cookies.sections.contact.subtitle")}
                  </h3>
                  <p className="text-white/80 text-lg mb-6">
                    {t("legal.cookies.sections.contact.description")}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-blue-300 mb-4">
                      {t("legal.cookies.sections.contact.methodsTitle")}
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-blue-800/20 rounded-lg p-4">
                        <p className="text-blue-200">
                          {t("legal.cookies.sections.contact.methods.email")}
                        </p>
                      </div>
                      <div className="bg-blue-800/20 rounded-lg p-4">
                        <p className="text-blue-200">
                          {t("legal.cookies.sections.contact.methods.cookies")}
                        </p>
                      </div>
                      <div className="bg-blue-800/20 rounded-lg p-4">
                        <p className="text-blue-200">
                          {t("legal.cookies.sections.contact.methods.support")}
                        </p>
                      </div>
                      <div className="bg-blue-800/20 rounded-lg p-4">
                        <p className="text-blue-200">
                          {t("legal.cookies.sections.contact.methods.dpo")}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-green-300 mb-4">
                      {t("legal.cookies.sections.contact.response.title")}
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-green-800/20 rounded-lg p-4">
                        <p className="text-green-200">
                          {t(
                            "legal.cookies.sections.contact.response.items.general"
                          )}
                        </p>
                      </div>
                      <div className="bg-green-800/20 rounded-lg p-4">
                        <p className="text-green-200">
                          {t(
                            "legal.cookies.sections.contact.response.items.privacy"
                          )}
                        </p>
                      </div>
                      <div className="bg-green-800/20 rounded-lg p-4">
                        <p className="text-green-200">
                          {t(
                            "legal.cookies.sections.contact.response.items.urgent"
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
