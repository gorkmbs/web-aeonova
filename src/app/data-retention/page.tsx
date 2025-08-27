"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

export default function DataRetentionPage() {
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
            {t("legal.dataRetention.backToHome")}
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 md:p-12">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              {t("legal.dataRetention.title")}
            </h1>
            <p className="text-white/70 text-lg">
              {t("legal.dataRetention.subtitle")}
            </p>
            <p className="text-white/60 mt-2">
              {t("legal.dataRetention.lastUpdated").replace(
                "{date}",
                currentDate
              )}
            </p>
          </header>

          <div className="prose prose-invert max-w-none space-y-12">
            {/* Summary */}
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-blue-300 mb-3">
                {t("legal.dataRetention.labels.summaryTitle")}
              </h3>
              <p className="text-blue-100 leading-relaxed text-lg">
                {t("legal.dataRetention.summary")}
              </p>
            </div>

            {/* Introduction */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">
                {t("legal.dataRetention.sections.introduction.title")}
              </h2>
              <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-lg p-6">
                <p className="text-indigo-100 leading-relaxed mb-4">
                  {t("legal.dataRetention.sections.introduction.description")}
                </p>
                <h4 className="text-lg font-semibold text-indigo-300 mb-3">
                  {t(
                    "legal.dataRetention.sections.introduction.keyPoints.title"
                  )}
                </h4>
                <ul className="space-y-2 text-indigo-100">
                  <li>
                    •{" "}
                    {t(
                      "legal.dataRetention.sections.introduction.keyPoints.items.minimization"
                    )}
                  </li>
                  <li>
                    •{" "}
                    {t(
                      "legal.dataRetention.sections.introduction.keyPoints.items.purpose"
                    )}
                  </li>
                  <li>
                    •{" "}
                    {t(
                      "legal.dataRetention.sections.introduction.keyPoints.items.lawful"
                    )}
                  </li>
                  <li>
                    •{" "}
                    {t(
                      "legal.dataRetention.sections.introduction.keyPoints.items.transparent"
                    )}
                  </li>
                  <li>
                    •{" "}
                    {t(
                      "legal.dataRetention.sections.introduction.keyPoints.items.secure"
                    )}
                  </li>
                </ul>
              </div>
            </section>

            {/* Legal Basis */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">
                {t("legal.dataRetention.sections.legalBasis.title")}
              </h2>
              <p className="text-white/80 mb-6">
                {t("legal.dataRetention.sections.legalBasis.description")}
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Contractual */}
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-green-300 mb-3">
                    {t(
                      "legal.dataRetention.sections.legalBasis.bases.contractual.title"
                    )}
                  </h3>
                  <p className="text-green-100 mb-4">
                    {t(
                      "legal.dataRetention.sections.legalBasis.bases.contractual.description"
                    )}
                  </p>
                  <h4 className="font-semibold text-green-300 mb-2">
                    {t(
                      "legal.dataRetention.sections.legalBasis.bases.contractual.examples.title"
                    )}
                  </h4>
                  <ul className="space-y-1 text-green-100 text-sm">
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.legalBasis.bases.contractual.examples.items.account"
                      )}
                    </li>
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.legalBasis.bases.contractual.examples.items.subscription"
                      )}
                    </li>
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.legalBasis.bases.contractual.examples.items.support"
                      )}
                    </li>
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.legalBasis.bases.contractual.examples.items.preferences"
                      )}
                    </li>
                  </ul>
                </div>

                {/* Legal */}
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-red-300 mb-3">
                    {t(
                      "legal.dataRetention.sections.legalBasis.bases.legal.title"
                    )}
                  </h3>
                  <p className="text-red-100 mb-4">
                    {t(
                      "legal.dataRetention.sections.legalBasis.bases.legal.description"
                    )}
                  </p>
                  <h4 className="font-semibold text-red-300 mb-2">
                    {t(
                      "legal.dataRetention.sections.legalBasis.bases.legal.examples.title"
                    )}
                  </h4>
                  <ul className="space-y-1 text-red-100 text-sm">
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.legalBasis.bases.legal.examples.items.financial"
                      )}
                    </li>
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.legalBasis.bases.legal.examples.items.security"
                      )}
                    </li>
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.legalBasis.bases.legal.examples.items.gdpr"
                      )}
                    </li>
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.legalBasis.bases.legal.examples.items.disputes"
                      )}
                    </li>
                  </ul>
                </div>

                {/* Legitimate */}
                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-purple-300 mb-3">
                    {t(
                      "legal.dataRetention.sections.legalBasis.bases.legitimate.title"
                    )}
                  </h3>
                  <p className="text-purple-100 mb-4">
                    {t(
                      "legal.dataRetention.sections.legalBasis.bases.legitimate.description"
                    )}
                  </p>
                  <h4 className="font-semibold text-purple-300 mb-2">
                    {t(
                      "legal.dataRetention.sections.legalBasis.bases.legitimate.examples.title"
                    )}
                  </h4>
                  <ul className="space-y-1 text-purple-100 text-sm">
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.legalBasis.bases.legitimate.examples.items.analytics"
                      )}
                    </li>
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.legalBasis.bases.legitimate.examples.items.security"
                      )}
                    </li>
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.legalBasis.bases.legitimate.examples.items.research"
                      )}
                    </li>
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.legalBasis.bases.legitimate.examples.items.communications"
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Detailed Categories */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">
                {t("legal.dataRetention.sections.categories.title")}
              </h2>
              <p className="text-white/80 mb-6">
                {t("legal.dataRetention.sections.categories.description")}
              </p>

              {/* Account Data */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {t("legal.dataRetention.sections.categories.account.title")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-300 mb-2">
                      {t(
                        "legal.dataRetention.sections.categories.account.headings.basicProfile"
                      )}
                    </h4>
                    <p className="text-blue-100 text-sm mb-2">
                      {t(
                        "legal.dataRetention.sections.categories.account.items.basic.data"
                      )}
                    </p>
                    <p className="text-blue-200 font-medium">
                      {t(
                        "legal.dataRetention.sections.categories.account.items.basic.period"
                      )}
                    </p>
                  </div>
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-300 mb-2">
                      {t(
                        "legal.dataRetention.sections.categories.account.headings.preferences"
                      )}
                    </h4>
                    <p className="text-blue-100 text-sm mb-2">
                      {t(
                        "legal.dataRetention.sections.categories.account.items.preferences.data"
                      )}
                    </p>
                    <p className="text-blue-200 font-medium">
                      {t(
                        "legal.dataRetention.sections.categories.account.items.preferences.period"
                      )}
                    </p>
                  </div>
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-300 mb-2">
                      {t(
                        "legal.dataRetention.sections.categories.account.headings.subscription"
                      )}
                    </h4>
                    <p className="text-blue-100 text-sm mb-2">
                      {t(
                        "legal.dataRetention.sections.categories.account.items.subscription.data"
                      )}
                    </p>
                    <p className="text-blue-200 font-medium">
                      {t(
                        "legal.dataRetention.sections.categories.account.items.subscription.period"
                      )}
                    </p>
                  </div>
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-300 mb-2">
                      {t(
                        "legal.dataRetention.sections.categories.account.headings.authentication"
                      )}
                    </h4>
                    <p className="text-blue-100 text-sm mb-2">
                      {t(
                        "legal.dataRetention.sections.categories.account.items.authentication.data"
                      )}
                    </p>
                    <p className="text-blue-200 font-medium">
                      {t(
                        "legal.dataRetention.sections.categories.account.items.authentication.period"
                      )}
                    </p>
                  </div>
                </div>
                <p className="text-blue-300 mt-4 text-sm">
                  {t("legal.dataRetention.sections.categories.account.note")}
                </p>
              </div>

              {/* Content Data */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {t("legal.dataRetention.sections.categories.content.title")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                    <h4 className="font-semibold text-green-300 mb-2">
                      {t(
                        "legal.dataRetention.sections.categories.content.headings.chatHistory"
                      )}
                    </h4>
                    <p className="text-green-100 text-sm mb-2">
                      {t(
                        "legal.dataRetention.sections.categories.content.items.chatHistory.data"
                      )}
                    </p>
                    <p className="text-green-200 font-medium">
                      {t(
                        "legal.dataRetention.sections.categories.content.items.chatHistory.period"
                      )}
                    </p>
                  </div>
                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                    <h4 className="font-semibold text-green-300 mb-2">
                      {t(
                        "legal.dataRetention.sections.categories.content.headings.privateMemories"
                      )}
                    </h4>
                    <p className="text-green-100 text-sm mb-2">
                      {t(
                        "legal.dataRetention.sections.categories.content.items.privateMemories.data"
                      )}
                    </p>
                    <p className="text-green-200 font-medium">
                      {t(
                        "legal.dataRetention.sections.categories.content.items.privateMemories.period"
                      )}
                    </p>
                  </div>
                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                    <h4 className="font-semibold text-green-300 mb-2">
                      {t(
                        "legal.dataRetention.sections.categories.content.headings.sharedMemories"
                      )}
                    </h4>
                    <p className="text-green-100 text-sm mb-2">
                      {t(
                        "legal.dataRetention.sections.categories.content.items.sharedMemories.data"
                      )}
                    </p>
                    <p className="text-green-200 font-medium">
                      {t(
                        "legal.dataRetention.sections.categories.content.items.sharedMemories.period"
                      )}
                    </p>
                  </div>
                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                    <h4 className="font-semibold text-green-300 mb-2">
                      {t(
                        "legal.dataRetention.sections.categories.content.headings.aiComments"
                      )}
                    </h4>
                    <p className="text-green-100 text-sm mb-2">
                      {t(
                        "legal.dataRetention.sections.categories.content.items.aiComments.data"
                      )}
                    </p>
                    <p className="text-green-200 font-medium">
                      {t(
                        "legal.dataRetention.sections.categories.content.items.aiComments.period"
                      )}
                    </p>
                  </div>
                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                    <h4 className="font-semibold text-green-300 mb-2">
                      {t(
                        "legal.dataRetention.sections.categories.content.headings.userFeedback"
                      )}
                    </h4>
                    <p className="text-green-100 text-sm mb-2">
                      {t(
                        "legal.dataRetention.sections.categories.content.items.userFeedback.data"
                      )}
                    </p>
                    <p className="text-green-200 font-medium">
                      {t(
                        "legal.dataRetention.sections.categories.content.items.userFeedback.period"
                      )}
                    </p>
                  </div>
                </div>
                <p className="text-green-300 mt-4 text-sm">
                  {t("legal.dataRetention.sections.categories.content.note")}
                </p>
              </div>

              {/* Technical Data */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {t("legal.dataRetention.sections.categories.technical.title")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-300 mb-2">
                      {t(
                        "legal.dataRetention.sections.categories.technical.headings.usageLogs"
                      )}
                    </h4>
                    <p className="text-orange-100 text-sm mb-2">
                      {t(
                        "legal.dataRetention.sections.categories.technical.items.usageLogs.data"
                      )}
                    </p>
                    <p className="text-orange-200 font-medium">
                      {t(
                        "legal.dataRetention.sections.categories.technical.items.usageLogs.period"
                      )}
                    </p>
                  </div>
                  <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-300 mb-2">
                      {t(
                        "legal.dataRetention.sections.categories.technical.headings.errorReports"
                      )}
                    </h4>
                    <p className="text-orange-100 text-sm mb-2">
                      {t(
                        "legal.dataRetention.sections.categories.technical.items.errorReports.data"
                      )}
                    </p>
                    <p className="text-orange-200 font-medium">
                      {t(
                        "legal.dataRetention.sections.categories.technical.items.errorReports.period"
                      )}
                    </p>
                  </div>
                  <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-300 mb-2">
                      {t(
                        "legal.dataRetention.sections.categories.technical.headings.securityLogs"
                      )}
                    </h4>
                    <p className="text-orange-100 text-sm mb-2">
                      {t(
                        "legal.dataRetention.sections.categories.technical.items.securityLogs.data"
                      )}
                    </p>
                    <p className="text-orange-200 font-medium">
                      {t(
                        "legal.dataRetention.sections.categories.technical.items.securityLogs.period"
                      )}
                    </p>
                  </div>
                  <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-300 mb-2">
                      {t(
                        "legal.dataRetention.sections.categories.technical.headings.deviceInfo"
                      )}
                    </h4>
                    <p className="text-orange-100 text-sm mb-2">
                      {t(
                        "legal.dataRetention.sections.categories.technical.items.deviceInfo.data"
                      )}
                    </p>
                    <p className="text-orange-200 font-medium">
                      {t(
                        "legal.dataRetention.sections.categories.technical.items.deviceInfo.period"
                      )}
                    </p>
                  </div>
                  <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-300 mb-2">
                      {t(
                        "legal.dataRetention.sections.categories.technical.headings.notifications"
                      )}
                    </h4>
                    <p className="text-orange-100 text-sm mb-2">
                      {t(
                        "legal.dataRetention.sections.categories.technical.items.notifications.data"
                      )}
                    </p>
                    <p className="text-orange-200 font-medium">
                      {t(
                        "legal.dataRetention.sections.categories.technical.items.notifications.period"
                      )}
                    </p>
                  </div>
                </div>
                <p className="text-orange-300 mt-4 text-sm">
                  {t("legal.dataRetention.sections.categories.technical.note")}
                </p>
              </div>

              {/* Communications */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {t(
                    "legal.dataRetention.sections.categories.communications.title"
                  )}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-pink-900/20 border border-pink-500/30 rounded-lg p-4">
                    <h4 className="font-semibold text-pink-300 mb-2">
                      {t(
                        "legal.dataRetention.sections.categories.communications.headings.supportTickets"
                      )}
                    </h4>
                    <p className="text-pink-100 text-sm mb-2">
                      {t(
                        "legal.dataRetention.sections.categories.communications.items.supportTickets.data"
                      )}
                    </p>
                    <p className="text-pink-200 font-medium">
                      {t(
                        "legal.dataRetention.sections.categories.communications.items.supportTickets.period"
                      )}
                    </p>
                  </div>
                  <div className="bg-pink-900/20 border border-pink-500/30 rounded-lg p-4">
                    <h4 className="font-semibold text-pink-300 mb-2">
                      {t(
                        "legal.dataRetention.sections.categories.communications.headings.marketingConsent"
                      )}
                    </h4>
                    <p className="text-pink-100 text-sm mb-2">
                      {t(
                        "legal.dataRetention.sections.categories.communications.items.marketingConsent.data"
                      )}
                    </p>
                    <p className="text-pink-200 font-medium">
                      {t(
                        "legal.dataRetention.sections.categories.communications.items.marketingConsent.period"
                      )}
                    </p>
                  </div>
                  <div className="bg-pink-900/20 border border-pink-500/30 rounded-lg p-4">
                    <h4 className="font-semibold text-pink-300 mb-2">
                      {t(
                        "legal.dataRetention.sections.categories.communications.headings.contactForms"
                      )}
                    </h4>
                    <p className="text-pink-100 text-sm mb-2">
                      {t(
                        "legal.dataRetention.sections.categories.communications.items.contactForms.data"
                      )}
                    </p>
                    <p className="text-pink-200 font-medium">
                      {t(
                        "legal.dataRetention.sections.categories.communications.items.contactForms.period"
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Automatic Deletion */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">
                {t("legal.dataRetention.sections.automaticDeletion.title")}
              </h2>
              <p className="text-white/80 mb-6">
                {t(
                  "legal.dataRetention.sections.automaticDeletion.description"
                )}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-cyan-300 mb-3">
                    {t(
                      "legal.dataRetention.sections.automaticDeletion.processes.daily.title"
                    )}
                  </h3>
                  <ul className="space-y-1 text-cyan-100 text-sm">
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.automaticDeletion.processes.daily.items.expired"
                      )}
                    </li>
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.automaticDeletion.processes.daily.items.cache"
                      )}
                    </li>
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.automaticDeletion.processes.daily.items.logs"
                      )}
                    </li>
                  </ul>
                </div>
                <div className="bg-teal-900/20 border border-teal-500/30 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-teal-300 mb-3">
                    {t(
                      "legal.dataRetention.sections.automaticDeletion.processes.weekly.title"
                    )}
                  </h3>
                  <ul className="space-y-1 text-teal-100 text-sm">
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.automaticDeletion.processes.weekly.items.accounts"
                      )}
                    </li>
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.automaticDeletion.processes.weekly.items.anonymization"
                      )}
                    </li>
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.automaticDeletion.processes.weekly.items.backups"
                      )}
                    </li>
                  </ul>
                </div>
                <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-emerald-300 mb-3">
                    {t(
                      "legal.dataRetention.sections.automaticDeletion.processes.monthly.title"
                    )}
                  </h3>
                  <ul className="space-y-1 text-emerald-100 text-sm">
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.automaticDeletion.processes.monthly.items.technical"
                      )}
                    </li>
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.automaticDeletion.processes.monthly.items.analytics"
                      )}
                    </li>
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.automaticDeletion.processes.monthly.items.audit"
                      )}
                    </li>
                  </ul>
                </div>
                <div className="bg-lime-900/20 border border-lime-500/30 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-lime-300 mb-3">
                    {t(
                      "legal.dataRetention.sections.automaticDeletion.processes.annual.title"
                    )}
                  </h3>
                  <ul className="space-y-1 text-lime-100 text-sm">
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.automaticDeletion.processes.annual.items.policies"
                      )}
                    </li>
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.automaticDeletion.processes.annual.items.compliance"
                      )}
                    </li>
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.automaticDeletion.processes.annual.items.systems"
                      )}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-slate-800/30 border border-slate-500/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-300 mb-3">
                  {t(
                    "legal.dataRetention.sections.automaticDeletion.monitoring.title"
                  )}
                </h3>
                <ul className="space-y-2 text-slate-100">
                  <li>
                    •{" "}
                    {t(
                      "legal.dataRetention.sections.automaticDeletion.monitoring.items.alerts"
                    )}
                  </li>
                  <li>
                    •{" "}
                    {t(
                      "legal.dataRetention.sections.automaticDeletion.monitoring.items.reports"
                    )}
                  </li>
                  <li>
                    •{" "}
                    {t(
                      "legal.dataRetention.sections.automaticDeletion.monitoring.items.audits"
                    )}
                  </li>
                  <li>
                    •{" "}
                    {t(
                      "legal.dataRetention.sections.automaticDeletion.monitoring.items.verification"
                    )}
                  </li>
                </ul>
              </div>
            </section>

            {/* Account Status */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">
                {t("legal.dataRetention.sections.accountStatus.title")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Active */}
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-green-300 mb-3">
                    {t(
                      "legal.dataRetention.sections.accountStatus.active.title"
                    )}
                  </h3>
                  <p className="text-green-100 mb-4 text-sm">
                    {t(
                      "legal.dataRetention.sections.accountStatus.active.description"
                    )}
                  </p>
                  <ul className="space-y-1 text-green-100 text-sm">
                    <li>
                      {t(
                        "legal.dataRetention.sections.accountStatus.active.items.normalStorage"
                      )}
                    </li>
                    <li>
                      {t(
                        "legal.dataRetention.sections.accountStatus.active.items.userControl"
                      )}
                    </li>
                    <li>
                      {t(
                        "legal.dataRetention.sections.accountStatus.active.items.backups"
                      )}
                    </li>
                    <li>
                      {t(
                        "legal.dataRetention.sections.accountStatus.active.items.security"
                      )}
                    </li>
                    <li>
                      {t(
                        "legal.dataRetention.sections.accountStatus.active.items.updates"
                      )}
                    </li>
                    <li>
                      {t(
                        "legal.dataRetention.sections.accountStatus.active.items.export"
                      )}
                    </li>
                  </ul>
                </div>

                {/* Inactive */}
                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-yellow-300 mb-3">
                    {t(
                      "legal.dataRetention.sections.accountStatus.inactive.title"
                    )}
                  </h3>
                  <p className="text-yellow-100 mb-4 text-sm">
                    {t(
                      "legal.dataRetention.sections.accountStatus.inactive.description"
                    )}
                  </p>
                  <ul className="space-y-1 text-yellow-100 text-sm">
                    <li>
                      {t(
                        "legal.dataRetention.sections.accountStatus.inactive.items.warning"
                      )}
                    </li>
                    <li>
                      {t(
                        "legal.dataRetention.sections.accountStatus.inactive.items.finalNotice"
                      )}
                    </li>
                    <li>
                      {t(
                        "legal.dataRetention.sections.accountStatus.inactive.items.deletion"
                      )}
                    </li>
                    <li>
                      {t(
                        "legal.dataRetention.sections.accountStatus.inactive.items.gracePeriod"
                      )}
                    </li>
                    <li>
                      {t(
                        "legal.dataRetention.sections.accountStatus.inactive.items.dataMinimization"
                      )}
                    </li>
                  </ul>
                  <p className="text-yellow-300 mt-4 text-sm">
                    {t(
                      "legal.dataRetention.sections.accountStatus.inactive.note"
                    )}
                  </p>
                </div>

                {/* Deleted */}
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-red-300 mb-3">
                    {t(
                      "legal.dataRetention.sections.accountStatus.deleted.title"
                    )}
                  </h3>
                  <p className="text-red-100 mb-4 text-sm">
                    {t(
                      "legal.dataRetention.sections.accountStatus.deleted.description"
                    )}
                  </p>
                  <ul className="space-y-1 text-red-100 text-sm">
                    <li>
                      {t(
                        "legal.dataRetention.sections.accountStatus.deleted.items.gracePeriod"
                      )}
                    </li>
                    <li>
                      {t(
                        "legal.dataRetention.sections.accountStatus.deleted.items.immediateActions"
                      )}
                    </li>
                    <li>
                      {t(
                        "legal.dataRetention.sections.accountStatus.deleted.items.dataReview"
                      )}
                    </li>
                    <li>
                      {t(
                        "legal.dataRetention.sections.accountStatus.deleted.items.permanentDeletion"
                      )}
                    </li>
                    <li>
                      {t(
                        "legal.dataRetention.sections.accountStatus.deleted.items.legalException"
                      )}
                    </li>
                    <li>
                      {t(
                        "legal.dataRetention.sections.accountStatus.deleted.items.noRecovery"
                      )}
                    </li>
                    <li>
                      {t(
                        "legal.dataRetention.sections.accountStatus.deleted.items.confirmation"
                      )}
                    </li>
                  </ul>
                </div>

                {/* Suspended */}
                <div className="bg-gray-900/20 border border-gray-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-300 mb-3">
                    {t(
                      "legal.dataRetention.sections.accountStatus.suspended.title"
                    )}
                  </h3>
                  <p className="text-gray-100 mb-4 text-sm">
                    {t(
                      "legal.dataRetention.sections.accountStatus.suspended.description"
                    )}
                  </p>
                  <ul className="space-y-1 text-gray-100 text-sm">
                    <li>
                      {t(
                        "legal.dataRetention.sections.accountStatus.suspended.items.retention"
                      )}
                    </li>
                    <li>
                      {t(
                        "legal.dataRetention.sections.accountStatus.suspended.items.appeal"
                      )}
                    </li>
                    <li>
                      {t(
                        "legal.dataRetention.sections.accountStatus.suspended.items.deletion"
                      )}
                    </li>
                    <li>
                      {t(
                        "legal.dataRetention.sections.accountStatus.suspended.items.reinstatement"
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* User Rights */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">
                {t("legal.dataRetention.sections.userRights.title")}
              </h2>
              <p className="text-white/80 mb-6">
                {t("legal.dataRetention.sections.userRights.description")}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-300 mb-3">
                    {t("legal.dataRetention.sections.userRights.access.title")}
                  </h3>
                  <p className="text-blue-100 mb-4">
                    {t(
                      "legal.dataRetention.sections.userRights.access.description"
                    )}
                  </p>
                  <ul className="space-y-1 text-blue-100 text-sm">
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.userRights.access.items.request"
                      )}
                    </li>
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.userRights.access.items.response"
                      )}
                    </li>
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.userRights.access.items.format"
                      )}
                    </li>
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.userRights.access.items.frequency"
                      )}
                    </li>
                  </ul>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-red-300 mb-3">
                    {t(
                      "legal.dataRetention.sections.userRights.deletion.title"
                    )}
                  </h3>
                  <p className="text-red-100 mb-4">
                    {t(
                      "legal.dataRetention.sections.userRights.deletion.description"
                    )}
                  </p>
                  <ul className="space-y-1 text-red-100 text-sm">
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.userRights.deletion.items.immediate"
                      )}
                    </li>
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.userRights.deletion.items.selective"
                      )}
                    </li>
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.userRights.deletion.items.legal"
                      )}
                    </li>
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.userRights.deletion.items.verification"
                      )}
                    </li>
                  </ul>
                </div>

                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-green-300 mb-3">
                    {t(
                      "legal.dataRetention.sections.userRights.portability.title"
                    )}
                  </h3>
                  <p className="text-green-100 mb-4">
                    {t(
                      "legal.dataRetention.sections.userRights.portability.description"
                    )}
                  </p>
                  <ul className="space-y-1 text-green-100 text-sm">
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.userRights.portability.items.export"
                      )}
                    </li>
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.userRights.portability.items.format"
                      )}
                    </li>
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.userRights.portability.items.scope"
                      )}
                    </li>
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.userRights.portability.items.transfer"
                      )}
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-purple-300 mb-3">
                    {t(
                      "legal.dataRetention.sections.userRights.objection.title"
                    )}
                  </h3>
                  <p className="text-purple-100 mb-4">
                    {t(
                      "legal.dataRetention.sections.userRights.objection.description"
                    )}
                  </p>
                  <ul className="space-y-1 text-purple-100 text-sm">
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.userRights.objection.items.marketing"
                      )}
                    </li>
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.userRights.objection.items.analytics"
                      )}
                    </li>
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.userRights.objection.items.profiling"
                      )}
                    </li>
                    <li>
                      •{" "}
                      {t(
                        "legal.dataRetention.sections.userRights.objection.items.legitimate"
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">
                {t("legal.dataRetention.sections.contact.title")}
              </h2>
              <p className="text-white/80 mb-6">
                {t("legal.dataRetention.sections.contact.description")}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-red-300 mb-4">
                    {t("legal.dataRetention.sections.contact.deletion.title")}
                  </h3>
                  <div className="mb-4">
                    <h4 className="font-semibold text-red-200 mb-2">
                      {t("legal.dataRetention.labels.methods")}
                    </h4>
                    <ul className="space-y-1 text-red-100 text-sm">
                      <li>
                        •{" "}
                        {t(
                          "legal.dataRetention.sections.contact.deletion.methods.app"
                        )}
                      </li>
                      <li>
                        •{" "}
                        {t(
                          "legal.dataRetention.sections.contact.deletion.methods.email"
                        )}
                      </li>
                      <li>
                        •{" "}
                        {t(
                          "legal.dataRetention.sections.contact.deletion.methods.form"
                        )}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-200 mb-2">
                      {t("legal.dataRetention.labels.requirements")}
                    </h4>
                    <ul className="space-y-1 text-red-100 text-sm">
                      <li>
                        •{" "}
                        {t(
                          "legal.dataRetention.sections.contact.deletion.requirements.verification"
                        )}
                      </li>
                      <li>
                        •{" "}
                        {t(
                          "legal.dataRetention.sections.contact.deletion.requirements.confirmation"
                        )}
                      </li>
                      <li>
                        •{" "}
                        {t(
                          "legal.dataRetention.sections.contact.deletion.requirements.timeline"
                        )}
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-300 mb-4">
                    {t("legal.dataRetention.sections.contact.questions.title")}
                  </h3>
                  <div className="mb-4">
                    <h4 className="font-semibold text-blue-200 mb-2">
                      {t("legal.dataRetention.labels.contacts")}
                    </h4>
                    <ul className="space-y-1 text-blue-100 text-sm">
                      <li>
                        •{" "}
                        {t(
                          "legal.dataRetention.sections.contact.questions.contacts.general"
                        )}
                      </li>
                      <li>
                        •{" "}
                        {t(
                          "legal.dataRetention.sections.contact.questions.contacts.dpo"
                        )}
                      </li>
                      <li>
                        •{" "}
                        {t(
                          "legal.dataRetention.sections.contact.questions.contacts.support"
                        )}
                      </li>
                      <li>
                        •{" "}
                        {t(
                          "legal.dataRetention.sections.contact.questions.contacts.legal"
                        )}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-200 mb-2">
                      {t("legal.dataRetention.labels.responseTimes")}
                    </h4>
                    <ul className="space-y-1 text-blue-100 text-sm">
                      <li>
                        •{" "}
                        {t(
                          "legal.dataRetention.sections.contact.questions.response.standard"
                        )}
                      </li>
                      <li>
                        •{" "}
                        {t(
                          "legal.dataRetention.sections.contact.questions.response.complex"
                        )}
                      </li>
                      <li>
                        •{" "}
                        {t(
                          "legal.dataRetention.sections.contact.questions.response.urgent"
                        )}
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-purple-300 mb-4">
                    {t("legal.dataRetention.sections.contact.appeals.title")}
                  </h3>
                  <div>
                    <h4 className="font-semibold text-purple-200 mb-2">
                      {t("legal.dataRetention.labels.process")}
                    </h4>
                    <ul className="space-y-1 text-purple-100 text-sm">
                      <li>
                        •{" "}
                        {t(
                          "legal.dataRetention.sections.contact.appeals.process.internal"
                        )}
                      </li>
                      <li>
                        •{" "}
                        {t(
                          "legal.dataRetention.sections.contact.appeals.process.external"
                        )}
                      </li>
                      <li>
                        •{" "}
                        {t(
                          "legal.dataRetention.sections.contact.appeals.process.timeline"
                        )}
                      </li>
                      <li>
                        •{" "}
                        {t(
                          "legal.dataRetention.sections.contact.appeals.process.escalation"
                        )}
                      </li>
                    </ul>
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
