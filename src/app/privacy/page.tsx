"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

export default function PrivacyPage() {
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
            {t("legal.privacy.backToHome")}
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 md:p-12">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              {t("legal.privacy.title")}
            </h1>
            <p className="text-white/70">{t("legal.privacy.subtitle")}</p>
            <p className="text-white/70">
              {t("legal.privacy.lastUpdated").replace("{date}", currentDate)}
            </p>
          </header>

          <div className="prose prose-invert max-w-none space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("legal.privacy.sections.introduction.title")}
              </h2>
              <p className="text-white/80 leading-relaxed">
                {t("legal.privacy.sections.introduction.content")}
              </p>
            </section>

            {/* Data Collection */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("legal.privacy.sections.dataCollection.title")}
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                {t("legal.privacy.sections.dataCollection.content")}
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                <li>
                  {t("legal.privacy.sections.dataCollection.items.account")}
                </li>
                <li>
                  {t("legal.privacy.sections.dataCollection.items.memories")}
                </li>
                <li>
                  {t("legal.privacy.sections.dataCollection.items.usage")}
                </li>
                <li>
                  {t("legal.privacy.sections.dataCollection.items.device")}
                </li>
              </ul>
            </section>

            {/* Legal Basis */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("legal.privacy.sections.legalBasis.title")}
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                {t("legal.privacy.sections.legalBasis.content")}
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                <li>{t("legal.privacy.sections.legalBasis.items.consent")}</li>
                <li>{t("legal.privacy.sections.legalBasis.items.contract")}</li>
                <li>
                  {t(
                    "legal.privacy.sections.legalBasis.items.legitimateInterests"
                  )}
                </li>
                <li>
                  {t("legal.privacy.sections.legalBasis.items.legalObligation")}
                </li>
                <li>
                  {t("legal.privacy.sections.legalBasis.items.vitalInterests")}
                </li>
              </ul>
            </section>

            {/* Data Usage */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("legal.privacy.sections.dataUsage.title")}
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                {t("legal.privacy.sections.dataUsage.content")}
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                <li>{t("legal.privacy.sections.dataUsage.items.service")}</li>
                <li>
                  {t("legal.privacy.sections.dataUsage.items.personalization")}
                </li>
                <li>{t("legal.privacy.sections.dataUsage.items.support")}</li>
                <li>
                  {t("legal.privacy.sections.dataUsage.items.improvement")}
                </li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("legal.privacy.sections.dataSharing.title")}
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                {t("legal.privacy.sections.dataSharing.content")}
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                <li>
                  {t(
                    "legal.privacy.sections.dataSharing.items.serviceProviders"
                  )}
                </li>
                <li>
                  {t(
                    "legal.privacy.sections.dataSharing.items.analyticsPartners"
                  )}
                </li>
                <li>
                  {t(
                    "legal.privacy.sections.dataSharing.items.legalAuthorities"
                  )}
                </li>
                <li>
                  {t(
                    "legal.privacy.sections.dataSharing.items.businessTransfers"
                  )}
                </li>
                <li>
                  {t("legal.privacy.sections.dataSharing.items.safetySecurity")}
                </li>
              </ul>
            </section>

            {/* Data Protection */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("legal.privacy.sections.dataProtection.title")}
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                {t("legal.privacy.sections.dataProtection.content")}
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                <li>
                  {t("legal.privacy.sections.dataProtection.items.encryption")}
                </li>
                <li>
                  {t("legal.privacy.sections.dataProtection.items.servers")}
                </li>
                <li>
                  {t("legal.privacy.sections.dataProtection.items.access")}
                </li>
                <li>
                  {t("legal.privacy.sections.dataProtection.items.monitoring")}
                </li>
              </ul>
            </section>

            {/* International Transfers */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("legal.privacy.sections.internationalTransfers.title")}
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                {t("legal.privacy.sections.internationalTransfers.content")}
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                <li>
                  {t("legal.privacy.sections.internationalTransfers.items.eea")}
                </li>
                <li>
                  {t(
                    "legal.privacy.sections.internationalTransfers.items.safeguards"
                  )}
                </li>
                <li>
                  {t("legal.privacy.sections.internationalTransfers.items.scc")}
                </li>
                <li>
                  {t(
                    "legal.privacy.sections.internationalTransfers.items.complaints"
                  )}
                </li>
              </ul>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("legal.privacy.sections.dataRetention.title")}
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                {t("legal.privacy.sections.dataRetention.content")}
              </p>
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 text-blue-100">
                <p className="mb-2">
                  {t("legal.privacy.sections.dataRetention.summary")}
                </p>
                <Link
                  href="/data-retention"
                  className="inline-block text-blue-200 hover:text-white underline underline-offset-4"
                >
                  {t("legal.privacy.sections.dataRetention.linkText")}
                </Link>
              </div>
            </section>

            {/* Cookies Note */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("legal.privacy.sections.cookiesNote.title")}
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                {t("legal.privacy.sections.cookiesNote.content")}
              </p>
              <Link
                href="/cookies"
                className="inline-block text-purple-200 hover:text-white underline underline-offset-4"
              >
                {t("legal.privacy.sections.cookiesNote.linkText")}
              </Link>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("legal.privacy.sections.rights.title")}
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                {t("legal.privacy.sections.rights.content")}
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                <li>{t("legal.privacy.sections.rights.items.access")}</li>
                <li>{t("legal.privacy.sections.rights.items.correction")}</li>
                <li>{t("legal.privacy.sections.rights.items.deletion")}</li>
                <li>{t("legal.privacy.sections.rights.items.portability")}</li>
                <li>{t("legal.privacy.sections.rights.items.objection")}</li>
              </ul>
            </section>

            {/* Exercising Rights */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("legal.privacy.sections.exerciseRights.title")}
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                {t("legal.privacy.sections.exerciseRights.content")}
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                <li>
                  {t("legal.privacy.sections.exerciseRights.items.inApp")}
                </li>
                <li>
                  {t("legal.privacy.sections.exerciseRights.items.email")}
                </li>
                <li>
                  {t(
                    "legal.privacy.sections.exerciseRights.items.verification"
                  )}
                </li>
                <li>
                  {t(
                    "legal.privacy.sections.exerciseRights.items.responseTimes"
                  )}
                </li>
              </ul>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("legal.privacy.sections.children.title")}
              </h2>
              <p className="text-white/80 leading-relaxed">
                {t("legal.privacy.sections.children.content")}
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("legal.privacy.sections.changes.title")}
              </h2>
              <p className="text-white/80 leading-relaxed">
                {t("legal.privacy.sections.changes.content").replace(
                  "{date}",
                  currentDate
                )}
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("legal.privacy.sections.contact.title")}
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                {t("legal.privacy.sections.contact.content")}
              </p>
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                <ul className="space-y-2 text-purple-100">
                  <li>{t("legal.privacy.sections.contact.email")}</li>
                  <li>{t("legal.privacy.sections.contact.support")}</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
