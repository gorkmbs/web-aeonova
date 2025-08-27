"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

export default function TermsPage() {
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
            {t("legal.terms.backToHome")}
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 md:p-12">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              {t("legal.terms.title")}
            </h1>
            <p className="text-white/70">{t("legal.terms.subtitle")}</p>
            <p className="text-white/70">
              {t("legal.terms.lastUpdated").replace("{date}", currentDate)}
            </p>
          </header>

          <div className="prose prose-invert max-w-none space-y-8">
            {/* Acceptance */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("legal.terms.sections.acceptance.title")}
              </h2>
              <p className="text-white/80 leading-relaxed">
                {t("legal.terms.sections.acceptance.content")}
              </p>
            </section>

            {/* Service Description */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("legal.terms.sections.service.title")}
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                {t("legal.terms.sections.service.content")}
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-2">
                  {t("legal.terms.sections.service.features.title")}
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/80">
                  <li>
                    • {t("legal.terms.sections.service.features.items.aiChat")}
                  </li>
                  <li>
                    •{" "}
                    {t(
                      "legal.terms.sections.service.features.items.saveMemories"
                    )}
                  </li>
                  <li>
                    •{" "}
                    {t(
                      "legal.terms.sections.service.features.items.globalExplore"
                    )}
                  </li>
                  <li>
                    •{" "}
                    {t(
                      "legal.terms.sections.service.features.items.multilingual"
                    )}
                  </li>
                </ul>
              </div>
            </section>

            {/* Eligibility */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("legal.terms.sections.eligibility.title")}
              </h2>
              <p className="text-white/80 leading-relaxed">
                {t("legal.terms.sections.eligibility.content")}
              </p>
            </section>

            {/* Accounts and Security */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("legal.terms.sections.accounts.title")}
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                {t("legal.terms.sections.accounts.content")}
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <ul className="list-disc pl-6 space-y-1 text-white/80">
                  <li>{t("legal.terms.sections.accounts.items.accuracy")}</li>
                  <li>
                    {t("legal.terms.sections.accounts.items.confidentiality")}
                  </li>
                  <li>
                    {t("legal.terms.sections.accounts.items.notification")}
                  </li>
                  <li>{t("legal.terms.sections.accounts.items.devices")}</li>
                </ul>
              </div>
            </section>

            {/* User Content */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("legal.terms.sections.userContent.title")}
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                {t("legal.terms.sections.userContent.content")}
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <ul className="list-disc pl-6 space-y-1 text-white/80">
                  <li>{t("legal.terms.sections.userContent.items.rights")}</li>
                  <li>
                    {t("legal.terms.sections.userContent.items.noIllegal")}
                  </li>
                  <li>
                    {t("legal.terms.sections.userContent.items.moderation")}
                  </li>
                </ul>
              </div>
            </section>

            {/* Acceptable Use */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("legal.terms.sections.acceptableUse.title")}
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                {t("legal.terms.sections.acceptableUse.content")}
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/80">
                  <li>
                    • {t("legal.terms.sections.acceptableUse.items.abuse")}
                  </li>
                  <li>
                    • {t("legal.terms.sections.acceptableUse.items.violence")}
                  </li>
                  <li>
                    • {t("legal.terms.sections.acceptableUse.items.spam")}
                  </li>
                  <li>
                    • {t("legal.terms.sections.acceptableUse.items.malware")}
                  </li>
                  <li>
                    •{" "}
                    {t(
                      "legal.terms.sections.acceptableUse.items.impersonation"
                    )}
                  </li>
                  <li>
                    • {t("legal.terms.sections.acceptableUse.items.illegal")}
                  </li>
                </ul>
              </div>
            </section>

            {/* AI Disclaimer */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("legal.terms.sections.aiDisclaimer.title")}
              </h2>
              <p className="text-white/80 leading-relaxed">
                {t("legal.terms.sections.aiDisclaimer.content")}
              </p>
            </section>

            {/* Payments */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("legal.terms.sections.payments.title")}
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                {t("legal.terms.sections.payments.content")}
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <ul className="list-disc pl-6 space-y-1 text-white/80">
                  <li>{t("legal.terms.sections.payments.items.billing")}</li>
                  <li>{t("legal.terms.sections.payments.items.renewal")}</li>
                  <li>{t("legal.terms.sections.payments.items.pricing")}</li>
                  <li>
                    {t("legal.terms.sections.payments.items.cancellation")}
                  </li>
                </ul>
              </div>
            </section>

            {/* Refunds */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("legal.terms.sections.refunds.title")}
              </h2>
              <p className="text-white/80 leading-relaxed">
                {t("legal.terms.sections.refunds.content")}
              </p>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("legal.terms.sections.intellectualProperty.title")}
              </h2>
              <p className="text-white/80 leading-relaxed">
                {t("legal.terms.sections.intellectualProperty.content")}
              </p>
            </section>

            {/* Third Party Services */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("legal.terms.sections.thirdPartyServices.title")}
              </h2>
              <p className="text-white/80 leading-relaxed">
                {t("legal.terms.sections.thirdPartyServices.content")}
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("legal.terms.sections.contact.title")}
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                {t("legal.terms.sections.contact.content")}
              </p>
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                <ul className="space-y-2 text-purple-100">
                  <li>{t("legal.terms.sections.contact.email")}</li>
                  <li>{t("legal.terms.sections.contact.support")}</li>
                </ul>
              </div>
            </section>

            {/* Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("legal.terms.sections.responsibilities.title")}
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                {t("legal.terms.sections.responsibilities.content")}
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/80">
                  <li>
                    •{" "}
                    {t("legal.terms.sections.responsibilities.items.security")}
                  </li>
                  <li>
                    • {t("legal.terms.sections.responsibilities.items.content")}
                  </li>
                  <li>
                    •{" "}
                    {t(
                      "legal.terms.sections.responsibilities.items.compliance"
                    )}
                  </li>
                  <li>
                    • {t("legal.terms.sections.responsibilities.items.respect")}
                  </li>
                </ul>
              </div>
            </section>

            {/* Prohibited Behaviors */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("legal.terms.sections.prohibited.title")}
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                {t("legal.terms.sections.prohibited.content")}
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/80">
                  <li>• {t("legal.terms.sections.prohibited.items.hate")}</li>
                  <li>
                    • {t("legal.terms.sections.prohibited.items.violence")}
                  </li>
                  <li>• {t("legal.terms.sections.prohibited.items.spam")}</li>
                  <li>
                    • {t("legal.terms.sections.prohibited.items.illegal")}
                  </li>
                  <li>
                    • {t("legal.terms.sections.prohibited.items.impersonation")}
                  </li>
                </ul>
              </div>
            </section>

            {/* Disclaimers */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("legal.terms.sections.disclaimer.title")}
              </h2>
              <p className="text-white/80 leading-relaxed">
                {t("legal.terms.sections.disclaimer.content")}
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("legal.terms.sections.limitation.title")}
              </h2>
              <p className="text-white/80 leading-relaxed">
                {t("legal.terms.sections.limitation.content")}
              </p>
            </section>

            {/* Indemnification */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("legal.terms.sections.indemnification.title")}
              </h2>
              <p className="text-white/80 leading-relaxed">
                {t("legal.terms.sections.indemnification.content")}
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("legal.terms.sections.termination.title")}
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                {t("legal.terms.sections.termination.content")}
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <ul className="list-disc pl-6 space-y-1 text-white/80">
                  <li>
                    {t("legal.terms.sections.termination.items.violation")}
                  </li>
                  <li>{t("legal.terms.sections.termination.items.illegal")}</li>
                  <li>{t("legal.terms.sections.termination.items.spam")}</li>
                </ul>
              </div>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("legal.terms.sections.governingLaw.title")}
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                {t("legal.terms.sections.governingLaw.content")}
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <ul className="list-disc pl-6 space-y-1 text-white/80">
                  <li>{t("legal.terms.sections.governingLaw.items.venue")}</li>
                  <li>{t("legal.terms.sections.governingLaw.items.eu")}</li>
                </ul>
              </div>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("legal.terms.sections.changes.title")}
              </h2>
              <p className="text-white/80 leading-relaxed">
                {t("legal.terms.sections.changes.content")}
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
