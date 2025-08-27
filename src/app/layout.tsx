import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aeonova - Your AI Friend",
  description: "Share your memories with Aeonova, your AI friend with a heart.",
  keywords: "AI, friend, memories, chat, diary, Aeonova",
  authors: [{ name: "Aeonova Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Aeonova - Your AI Friend",
    description:
      "Share your memories with Aeonova, your AI friend with a heart.",
    type: "website",
    siteName: "Aeonova",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aeonova - Your AI Friend",
    description:
      "Share your memories with Aeonova, your AI friend with a heart.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
