"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

export default function GDPRPage() {
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
            {t("legal.gdpr.backToHome")}
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 md:p-12">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              {t("legal.gdpr.title")}
            </h1>
            <p className="text-white/70">{t("legal.gdpr.subtitle")}</p>
            <p className="text-white/70">
              {t("legal.gdpr.lastUpdated").replace("{date}", currentDate)}
            </p>
          </header>

          <div className="prose prose-invert max-w-none space-y-8">
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-blue-300 mb-3">
                {t("legal.gdpr.labels.summaryTitle")}
              </h3>
              <p className="text-blue-100">{t("legal.gdpr.summary")}</p>
            </div>

            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("legal.gdpr.sections.introduction.title")}
              </h2>
              <div className="bg-slate-900/20 border border-slate-500/30 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-slate-300 mb-2">
                  {t("legal.gdpr.sections.introduction.subtitle")}
                </h3>
                <p className="text-slate-100 mb-4">
                  {t("legal.gdpr.sections.introduction.description")}
                </p>
                <div className="bg-slate-800/30 border border-slate-400/20 rounded-lg p-4">
                  <h4 className="text-md font-semibold text-slate-300 mb-2">
                    {t("legal.gdpr.sections.introduction.scope.title")}
                  </h4>
                  <ul className="space-y-2 text-slate-100 text-sm">
                    <li>
                      •{" "}
                      {t(
                        "legal.gdpr.sections.introduction.scope.items.whoIsProtected"
                      )}
                    </li>
                    <li>
                      •{" "}
                      {t(
                        "legal.gdpr.sections.introduction.scope.items.whatIsProtected"
                      )}
                    </li>
                    <li>
                      •{" "}
                      {t(
                        "legal.gdpr.sections.introduction.scope.items.whenApplies"
                      )}
                    </li>
                    <li>
                      •{" "}
                      {t(
                        "legal.gdpr.sections.introduction.scope.items.whereApplies"
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Protection Principles */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("legal.gdpr.sections.principles.title")}
              </h2>
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-green-300 mb-2">
                  {t("legal.gdpr.sections.principles.subtitle")}
                </h3>
                <p className="text-green-100 mb-6">
                  {t("legal.gdpr.sections.principles.description")}
                </p>

                <div className="space-y-4">
                  {/* Lawfulness */}
                  <div className="bg-green-800/20 border border-green-400/20 rounded-lg p-4">
                    <h4 className="text-md font-semibold text-green-300 mb-2">
                      {t("legal.gdpr.sections.principles.lawfulness.title")}
                    </h4>
                    <p className="text-green-100 text-sm mb-2">
                      {t(
                        "legal.gdpr.sections.principles.lawfulness.description"
                      )}
                    </p>
                    <ul className="space-y-1 text-green-100 text-xs">
                      <li>
                        •{" "}
                        {t(
                          "legal.gdpr.sections.principles.lawfulness.details.lawful"
                        )}
                      </li>
                      <li>
                        •{" "}
                        {t(
                          "legal.gdpr.sections.principles.lawfulness.details.fair"
                        )}
                      </li>
                      <li>
                        •{" "}
                        {t(
                          "legal.gdpr.sections.principles.lawfulness.details.transparent"
                        )}
                      </li>
                    </ul>
                  </div>

                  {/* Purpose Limitation */}
                  <div className="bg-green-800/20 border border-green-400/20 rounded-lg p-4">
                    <h4 className="text-md font-semibold text-green-300 mb-2">
                      {t(
                        "legal.gdpr.sections.principles.purposeLimitation.title"
                      )}
                    </h4>
                    <p className="text-green-100 text-sm mb-2">
                      {t(
                        "legal.gdpr.sections.principles.purposeLimitation.description"
                      )}
                    </p>
                    <ul className="space-y-1 text-green-100 text-xs">
                      <li>
                        •{" "}
                        {t(
                          "legal.gdpr.sections.principles.purposeLimitation.details.specific"
                        )}
                      </li>
                      <li>
                        •{" "}
                        {t(
                          "legal.gdpr.sections.principles.purposeLimitation.details.explicit"
                        )}
                      </li>
                      <li>
                        •{" "}
                        {t(
                          "legal.gdpr.sections.principles.purposeLimitation.details.legitimate"
                        )}
                      </li>
                    </ul>
                  </div>

                  {/* Data Minimization */}
                  <div className="bg-green-800/20 border border-green-400/20 rounded-lg p-4">
                    <h4 className="text-md font-semibold text-green-300 mb-2">
                      {t(
                        "legal.gdpr.sections.principles.dataMinimization.title"
                      )}
                    </h4>
                    <p className="text-green-100 text-sm mb-2">
                      {t(
                        "legal.gdpr.sections.principles.dataMinimization.description"
                      )}
                    </p>
                    <ul className="space-y-1 text-green-100 text-xs">
                      <li>
                        •{" "}
                        {t(
                          "legal.gdpr.sections.principles.dataMinimization.details.adequate"
                        )}
                      </li>
                      <li>
                        •{" "}
                        {t(
                          "legal.gdpr.sections.principles.dataMinimization.details.relevant"
                        )}
                      </li>
                      <li>
                        •{" "}
                        {t(
                          "legal.gdpr.sections.principles.dataMinimization.details.limited"
                        )}
                      </li>
                    </ul>
                  </div>

                  {/* Accuracy */}
                  <div className="bg-green-800/20 border border-green-400/20 rounded-lg p-4">
                    <h4 className="text-md font-semibold text-green-300 mb-2">
                      {t("legal.gdpr.sections.principles.accuracy.title")}
                    </h4>
                    <p className="text-green-100 text-sm mb-2">
                      {t("legal.gdpr.sections.principles.accuracy.description")}
                    </p>
                    <ul className="space-y-1 text-green-100 text-xs">
                      <li>
                        •{" "}
                        {t(
                          "legal.gdpr.sections.principles.accuracy.details.current"
                        )}
                      </li>
                      <li>
                        •{" "}
                        {t(
                          "legal.gdpr.sections.principles.accuracy.details.correction"
                        )}
                      </li>
                      <li>
                        •{" "}
                        {t(
                          "legal.gdpr.sections.principles.accuracy.details.verification"
                        )}
                      </li>
                    </ul>
                  </div>

                  {/* Storage Limitation */}
                  <div className="bg-green-800/20 border border-green-400/20 rounded-lg p-4">
                    <h4 className="text-md font-semibold text-green-300 mb-2">
                      {t(
                        "legal.gdpr.sections.principles.storageLimitation.title"
                      )}
                    </h4>
                    <p className="text-green-100 text-sm mb-2">
                      {t(
                        "legal.gdpr.sections.principles.storageLimitation.description"
                      )}
                    </p>
                    <ul className="space-y-1 text-green-100 text-xs">
                      <li>
                        •{" "}
                        {t(
                          "legal.gdpr.sections.principles.storageLimitation.details.retention"
                        )}
                      </li>
                      <li>
                        •{" "}
                        {t(
                          "legal.gdpr.sections.principles.storageLimitation.details.review"
                        )}
                      </li>
                      <li>
                        •{" "}
                        {t(
                          "legal.gdpr.sections.principles.storageLimitation.details.purpose"
                        )}
                      </li>
                    </ul>
                  </div>

                  {/* Security */}
                  <div className="bg-green-800/20 border border-green-400/20 rounded-lg p-4">
                    <h4 className="text-md font-semibold text-green-300 mb-2">
                      {t("legal.gdpr.sections.principles.security.title")}
                    </h4>
                    <p className="text-green-100 text-sm mb-2">
                      {t("legal.gdpr.sections.principles.security.description")}
                    </p>
                    <ul className="space-y-1 text-green-100 text-xs">
                      <li>
                        •{" "}
                        {t(
                          "legal.gdpr.sections.principles.security.details.protection"
                        )}
                      </li>
                      <li>
                        •{" "}
                        {t(
                          "legal.gdpr.sections.principles.security.details.confidentiality"
                        )}
                      </li>
                      <li>
                        •{" "}
                        {t(
                          "legal.gdpr.sections.principles.security.details.integrity"
                        )}
                      </li>
                    </ul>
                  </div>

                  {/* Accountability */}
                  <div className="bg-green-800/20 border border-green-400/20 rounded-lg p-4">
                    <h4 className="text-md font-semibold text-green-300 mb-2">
                      {t("legal.gdpr.sections.principles.accountability.title")}
                    </h4>
                    <p className="text-green-100 text-sm mb-2">
                      {t(
                        "legal.gdpr.sections.principles.accountability.description"
                      )}
                    </p>
                    <ul className="space-y-1 text-green-100 text-xs">
                      <li>
                        •{" "}
                        {t(
                          "legal.gdpr.sections.principles.accountability.details.documentation"
                        )}
                      </li>
                      <li>
                        •{" "}
                        {t(
                          "legal.gdpr.sections.principles.accountability.details.policies"
                        )}
                      </li>
                      <li>
                        •{" "}
                        {t(
                          "legal.gdpr.sections.principles.accountability.details.training"
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Your GDPR Rights */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("legal.gdpr.sections.rights.title")}
              </h2>
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-blue-300 mb-2">
                  {t("legal.gdpr.sections.rights.subtitle")}
                </h3>
                <p className="text-blue-100 mb-6">
                  {t("legal.gdpr.sections.rights.description")}
                </p>

                <div className="space-y-4">
                  {/* Right to Information */}
                  <div className="bg-blue-800/20 border border-blue-400/20 rounded-lg p-4">
                    <h4 className="text-md font-semibold text-blue-300 mb-2">
                      {t("legal.gdpr.sections.rights.information.title")}
                    </h4>
                    <p className="text-blue-100 text-sm mb-2">
                      {t("legal.gdpr.sections.rights.information.description")}
                    </p>
                    <div className="bg-blue-700/20 border border-blue-300/20 rounded p-3 mb-2">
                      <p className="text-blue-200 text-xs font-medium mb-1">
                        {t(
                          "legal.gdpr.sections.rights.information.includes.title"
                        )}
                      </p>
                      <ul className="space-y-1 text-blue-100 text-xs">
                        <li>
                          •{" "}
                          {t(
                            "legal.gdpr.sections.rights.information.includes.items.purposes"
                          )}
                        </li>
                        <li>
                          •{" "}
                          {t(
                            "legal.gdpr.sections.rights.information.includes.items.categories"
                          )}
                        </li>
                        <li>
                          •{" "}
                          {t(
                            "legal.gdpr.sections.rights.information.includes.items.recipients"
                          )}
                        </li>
                        <li>
                          •{" "}
                          {t(
                            "legal.gdpr.sections.rights.information.includes.items.retention"
                          )}
                        </li>
                        <li>
                          •{" "}
                          {t(
                            "legal.gdpr.sections.rights.information.includes.items.rights"
                          )}
                        </li>
                        <li>
                          •{" "}
                          {t(
                            "legal.gdpr.sections.rights.information.includes.items.sources"
                          )}
                        </li>
                      </ul>
                    </div>
                    <p className="text-blue-100 text-xs">
                      <strong>{t("legal.gdpr.labels.howToExercise")}</strong>{" "}
                      {t(
                        "legal.gdpr.sections.rights.information.howToExercise"
                      )}
                    </p>
                  </div>

                  {/* Right to Access */}
                  <div className="bg-blue-800/20 border border-blue-400/20 rounded-lg p-4">
                    <h4 className="text-md font-semibold text-blue-300 mb-2">
                      {t("legal.gdpr.sections.rights.access.title")}
                    </h4>
                    <p className="text-blue-100 text-sm mb-2">
                      {t("legal.gdpr.sections.rights.access.description")}
                    </p>
                    <div className="bg-blue-700/20 border border-blue-300/20 rounded p-3 mb-2">
                      <p className="text-blue-200 text-xs font-medium mb-1">
                        {t("legal.gdpr.sections.rights.access.includes.title")}
                      </p>
                      <ul className="space-y-1 text-blue-100 text-xs">
                        <li>
                          •{" "}
                          {t(
                            "legal.gdpr.sections.rights.access.includes.items.copy"
                          )}
                        </li>
                        <li>
                          •{" "}
                          {t(
                            "legal.gdpr.sections.rights.access.includes.items.format"
                          )}
                        </li>
                        <li>
                          •{" "}
                          {t(
                            "legal.gdpr.sections.rights.access.includes.items.details"
                          )}
                        </li>
                        <li>
                          •{" "}
                          {t(
                            "legal.gdpr.sections.rights.access.includes.items.sources"
                          )}
                        </li>
                        <li>
                          •{" "}
                          {t(
                            "legal.gdpr.sections.rights.access.includes.items.recipients"
                          )}
                        </li>
                      </ul>
                    </div>
                    <p className="text-blue-100 text-xs mb-1">
                      <strong>{t("legal.gdpr.labels.howToExercise")}</strong>{" "}
                      {t("legal.gdpr.sections.rights.access.howToExercise")}
                    </p>
                    <p className="text-blue-100 text-xs">
                      <strong>{t("legal.gdpr.labels.timeframe")}</strong>{" "}
                      {t("legal.gdpr.sections.rights.access.timeframe")}
                    </p>
                  </div>

                  {/* Right to Rectification */}
                  <div className="bg-blue-800/20 border border-blue-400/20 rounded-lg p-4">
                    <h4 className="text-md font-semibold text-blue-300 mb-2">
                      {t("legal.gdpr.sections.rights.rectification.title")}
                    </h4>
                    <p className="text-blue-100 text-sm mb-2">
                      {t(
                        "legal.gdpr.sections.rights.rectification.description"
                      )}
                    </p>
                    <div className="bg-blue-700/20 border border-blue-300/20 rounded p-3 mb-2">
                      <p className="text-blue-200 text-xs font-medium mb-1">
                        {t(
                          "legal.gdpr.sections.rights.rectification.includes.title"
                        )}
                      </p>
                      <ul className="space-y-1 text-blue-100 text-xs">
                        <li>
                          •{" "}
                          {t(
                            "legal.gdpr.sections.rights.rectification.includes.items.correct"
                          )}
                        </li>
                        <li>
                          •{" "}
                          {t(
                            "legal.gdpr.sections.rights.rectification.includes.items.complete"
                          )}
                        </li>
                        <li>
                          •{" "}
                          {t(
                            "legal.gdpr.sections.rights.rectification.includes.items.update"
                          )}
                        </li>
                        <li>
                          •{" "}
                          {t(
                            "legal.gdpr.sections.rights.rectification.includes.items.verify"
                          )}
                        </li>
                      </ul>
                    </div>
                    <p className="text-blue-100 text-xs mb-1">
                      <strong>{t("legal.gdpr.labels.howToExercise")}</strong>{" "}
                      {t(
                        "legal.gdpr.sections.rights.rectification.howToExercise"
                      )}
                    </p>
                    <p className="text-blue-100 text-xs">
                      <strong>{t("legal.gdpr.labels.timeframe")}</strong>{" "}
                      {t("legal.gdpr.sections.rights.rectification.timeframe")}
                    </p>
                  </div>

                  {/* Right to Erasure */}
                  <div className="bg-blue-800/20 border border-blue-400/20 rounded-lg p-4">
                    <h4 className="text-md font-semibold text-blue-300 mb-2">
                      {t("legal.gdpr.sections.rights.erasure.title")}
                    </h4>
                    <p className="text-blue-100 text-sm mb-2">
                      {t("legal.gdpr.sections.rights.erasure.description")}
                    </p>
                    <div className="bg-blue-700/20 border border-blue-300/20 rounded p-3 mb-2">
                      <p className="text-blue-200 text-xs font-medium mb-1">
                        {t(
                          "legal.gdpr.sections.rights.erasure.conditions.title"
                        )}
                      </p>
                      <ul className="space-y-1 text-blue-100 text-xs">
                        <li>
                          •{" "}
                          {t(
                            "legal.gdpr.sections.rights.erasure.conditions.items.unnecessary"
                          )}
                        </li>
                        <li>
                          •{" "}
                          {t(
                            "legal.gdpr.sections.rights.erasure.conditions.items.consent"
                          )}
                        </li>
                        <li>
                          •{" "}
                          {t(
                            "legal.gdpr.sections.rights.erasure.conditions.items.objection"
                          )}
                        </li>
                        <li>
                          •{" "}
                          {t(
                            "legal.gdpr.sections.rights.erasure.conditions.items.unlawful"
                          )}
                        </li>
                        <li>
                          •{" "}
                          {t(
                            "legal.gdpr.sections.rights.erasure.conditions.items.legal"
                          )}
                        </li>
                      </ul>
                    </div>
                    <div className="bg-red-800/20 border border-red-400/20 rounded p-3 mb-2">
                      <p className="text-red-200 text-xs font-medium mb-1">
                        {t(
                          "legal.gdpr.sections.rights.erasure.limitations.title"
                        )}
                      </p>
                      <ul className="space-y-1 text-red-100 text-xs">
                        <li>
                          •{" "}
                          {t(
                            "legal.gdpr.sections.rights.erasure.limitations.items.legal"
                          )}
                        </li>
                        <li>
                          •{" "}
                          {t(
                            "legal.gdpr.sections.rights.erasure.limitations.items.public"
                          )}
                        </li>
                        <li>
                          •{" "}
                          {t(
                            "legal.gdpr.sections.rights.erasure.limitations.items.freedom"
                          )}
                        </li>
                      </ul>
                    </div>
                    <p className="text-blue-100 text-xs mb-1">
                      <strong>{t("legal.gdpr.labels.howToExercise")}</strong>{" "}
                      {t("legal.gdpr.sections.rights.erasure.howToExercise")}
                    </p>
                    <p className="text-blue-100 text-xs">
                      <strong>{t("legal.gdpr.labels.timeframe")}</strong>{" "}
                      {t("legal.gdpr.sections.rights.erasure.timeframe")}
                    </p>
                  </div>

                  {/* Right to Data Portability */}
                  <div className="bg-blue-800/20 border border-blue-400/20 rounded-lg p-4">
                    <h4 className="text-md font-semibold text-blue-300 mb-2">
                      {t("legal.gdpr.sections.rights.portability.title")}
                    </h4>
                    <p className="text-blue-100 text-sm mb-2">
                      {t("legal.gdpr.sections.rights.portability.description")}
                    </p>
                    <div className="bg-blue-700/20 border border-blue-300/20 rounded p-3 mb-2">
                      <p className="text-blue-200 text-xs font-medium mb-1">
                        {t(
                          "legal.gdpr.sections.rights.portability.includes.title"
                        )}
                      </p>
                      <ul className="space-y-1 text-blue-100 text-xs">
                        <li>
                          •{" "}
                          {t(
                            "legal.gdpr.sections.rights.portability.includes.items.receive"
                          )}
                        </li>
                        <li>
                          •{" "}
                          {t(
                            "legal.gdpr.sections.rights.portability.includes.items.transfer"
                          )}
                        </li>
                        <li>
                          •{" "}
                          {t(
                            "legal.gdpr.sections.rights.portability.includes.items.export"
                          )}
                        </li>
                      </ul>
                    </div>
                    <p className="text-blue-100 text-xs mb-1">
                      <strong>{t("legal.gdpr.labels.limitations")}</strong>{" "}
                      {t("legal.gdpr.sections.rights.portability.limitations")}
                    </p>
                    <p className="text-blue-100 text-xs mb-1">
                      <strong>{t("legal.gdpr.labels.howToExercise")}</strong>{" "}
                      {t(
                        "legal.gdpr.sections.rights.portability.howToExercise"
                      )}
                    </p>
                    <p className="text-blue-100 text-xs">
                      <strong>{t("legal.gdpr.labels.timeframe")}</strong>{" "}
                      {t("legal.gdpr.sections.rights.portability.timeframe")}
                    </p>
                  </div>

                  {/* Right to Object */}
                  <div className="bg-blue-800/20 border border-blue-400/20 rounded-lg p-4">
                    <h4 className="text-md font-semibold text-blue-300 mb-2">
                      {t("legal.gdpr.sections.rights.objection.title")}
                    </h4>
                    <p className="text-blue-100 text-sm mb-2">
                      {t("legal.gdpr.sections.rights.objection.description")}
                    </p>
                    <div className="space-y-2">
                      <div className="bg-blue-700/20 border border-blue-300/20 rounded p-3">
                        <p className="text-blue-200 text-xs font-medium mb-1">
                          {t(
                            "legal.gdpr.sections.rights.objection.types.general.title"
                          )}
                        </p>
                        <p className="text-blue-100 text-xs mb-1">
                          {t(
                            "legal.gdpr.sections.rights.objection.types.general.description"
                          )}
                        </p>
                        <p className="text-blue-100 text-xs">
                          <strong>{t("legal.gdpr.labels.effect")}</strong>{" "}
                          {t(
                            "legal.gdpr.sections.rights.objection.types.general.effect"
                          )}
                        </p>
                      </div>
                      <div className="bg-blue-700/20 border border-blue-300/20 rounded p-3">
                        <p className="text-blue-200 text-xs font-medium mb-1">
                          {t(
                            "legal.gdpr.sections.rights.objection.types.directMarketing.title"
                          )}
                        </p>
                        <p className="text-blue-100 text-xs mb-1">
                          {t(
                            "legal.gdpr.sections.rights.objection.types.directMarketing.description"
                          )}
                        </p>
                        <p className="text-blue-100 text-xs">
                          <strong>{t("legal.gdpr.labels.effect")}</strong>{" "}
                          {t(
                            "legal.gdpr.sections.rights.objection.types.directMarketing.effect"
                          )}
                        </p>
                      </div>
                      <div className="bg-blue-700/20 border border-blue-300/20 rounded p-3">
                        <p className="text-blue-200 text-xs font-medium mb-1">
                          {t(
                            "legal.gdpr.sections.rights.objection.types.profiling.title"
                          )}
                        </p>
                        <p className="text-blue-100 text-xs mb-1">
                          {t(
                            "legal.gdpr.sections.rights.objection.types.profiling.description"
                          )}
                        </p>
                        <p className="text-blue-100 text-xs">
                          <strong>{t("legal.gdpr.labels.effect")}</strong>{" "}
                          {t(
                            "legal.gdpr.sections.rights.objection.types.profiling.effect"
                          )}
                        </p>
                      </div>
                    </div>
                    <p className="text-blue-100 text-xs mt-2">
                      <strong>{t("legal.gdpr.labels.howToExercise")}</strong>{" "}
                      {t("legal.gdpr.sections.rights.objection.howToExercise")}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("legal.gdpr.sections.contact.title")}
              </h2>
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-300 mb-2">
                  {t("legal.gdpr.sections.contact.subtitle")}
                </h3>
                <p className="text-purple-100 mb-6">
                  {t("legal.gdpr.sections.contact.description")}
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-purple-800/20 border border-purple-400/20 rounded-lg p-4">
                    <h4 className="text-md font-semibold text-purple-300 mb-2">
                      {t("legal.gdpr.sections.contact.dpo.title")}
                    </h4>
                    <p className="text-purple-100 text-sm mb-1">
                      <strong>
                        {t("legal.gdpr.sections.contact.dpo.email")}
                      </strong>
                    </p>
                    <p className="text-purple-100 text-xs">
                      {t("legal.gdpr.sections.contact.dpo.role")}
                    </p>
                  </div>

                  <div className="bg-purple-800/20 border border-purple-400/20 rounded-lg p-4">
                    <h4 className="text-md font-semibold text-purple-300 mb-2">
                      {t("legal.gdpr.sections.contact.requests.title")}
                    </h4>
                    <p className="text-purple-100 text-sm mb-1">
                      <strong>
                        {t("legal.gdpr.sections.contact.requests.email")}
                      </strong>
                    </p>
                    <p className="text-purple-100 text-xs">
                      {t("legal.gdpr.sections.contact.requests.description")}
                    </p>
                  </div>

                  <div className="bg-purple-800/20 border border-purple-400/20 rounded-lg p-4">
                    <h4 className="text-md font-semibold text-purple-300 mb-2">
                      {t("legal.gdpr.sections.contact.complaints.title")}
                    </h4>
                    <p className="text-purple-100 text-sm mb-1">
                      <strong>
                        {t("legal.gdpr.sections.contact.complaints.email")}
                      </strong>
                    </p>
                    <p className="text-purple-100 text-xs">
                      {t("legal.gdpr.sections.contact.complaints.description")}
                    </p>
                  </div>

                  <div className="bg-purple-800/20 border border-purple-400/20 rounded-lg p-4">
                    <h4 className="text-md font-semibold text-purple-300 mb-2">
                      {t("legal.gdpr.sections.contact.general.title")}
                    </h4>
                    <p className="text-purple-100 text-sm mb-1">
                      <strong>
                        {t("legal.gdpr.sections.contact.general.email")}
                      </strong>
                    </p>
                    <p className="text-purple-100 text-xs">
                      {t("legal.gdpr.sections.contact.general.description")}
                    </p>
                  </div>
                </div>

                <div className="bg-purple-800/20 border border-purple-400/20 rounded-lg p-4 mb-4">
                  <h4 className="text-md font-semibold text-purple-300 mb-2">
                    {t("legal.gdpr.sections.contact.response.title")}
                  </h4>
                  <ul className="space-y-1 text-purple-100 text-sm">
                    <li>
                      • {t("legal.gdpr.sections.contact.response.standard")}
                    </li>
                    <li>
                      • {t("legal.gdpr.sections.contact.response.complex")}
                    </li>
                    <li>
                      • {t("legal.gdpr.sections.contact.response.urgent")}
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-800/20 border border-purple-400/20 rounded-lg p-4 mb-4">
                  <h4 className="text-md font-semibold text-purple-300 mb-2">
                    {t("legal.gdpr.sections.contact.information.title")}
                  </h4>
                  <ul className="space-y-1 text-purple-100 text-sm">
                    <li>
                      •{" "}
                      {t(
                        "legal.gdpr.sections.contact.information.items.identification"
                      )}
                    </li>
                    <li>
                      •{" "}
                      {t(
                        "legal.gdpr.sections.contact.information.items.request"
                      )}
                    </li>
                    <li>
                      •{" "}
                      {t(
                        "legal.gdpr.sections.contact.information.items.details"
                      )}
                    </li>
                    <li>
                      •{" "}
                      {t(
                        "legal.gdpr.sections.contact.information.items.preference"
                      )}
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-800/20 border border-purple-400/20 rounded-lg p-4">
                  <h4 className="text-md font-semibold text-purple-300 mb-2">
                    {t("legal.gdpr.sections.contact.languages.title")}
                  </h4>
                  <p className="text-purple-100 text-sm">
                    {t("legal.gdpr.sections.contact.languages.description")}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
