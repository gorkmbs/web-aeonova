"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language =
  | "zh"
  | "en"
  | "hi"
  | "es"
  | "ar"
  | "bn"
  | "pt"
  | "ru"
  | "ja"
  | "de"
  | "ko"
  | "fr"
  | "tr"
  | "vi"
  | "it"
  | "ur"
  | "id"
  | "th"
  | "fa"
  | "nl";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [messages, setMessages] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize language from URL ?lang=, else from localStorage
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      const urlLang = url.searchParams.get("lang") as Language | null;
      const savedLanguage = localStorage.getItem("language") as Language | null;

      if (urlLang) {
        setLanguage(urlLang);
        try {
          localStorage.setItem("language", urlLang);
        } catch {}
      } else if (savedLanguage) {
        setLanguage(savedLanguage);
      }
    }
  }, []);

  useEffect(() => {
    // Load messages for current language
    const loadMessages = async () => {
      setIsLoading(true);
      try {
        const response = await import(`../i18n/messages/${language}.json`);
        setMessages(response.default);
      } catch (error) {
        console.error("Error loading language file:", error);
        // Fallback to English
        const fallback = await import(`../i18n/messages/en.json`);
        setMessages(fallback.default);
      }
      setIsLoading(false);
    };

    loadMessages();

    // Save to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language);
    }
  }, [language]);

  const t = (key: string): string => {
    const keys = key.split(".");
    let value = messages;

    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) break;
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export const languages: { code: Language; name: string; nativeName: string }[] =
  [
    { code: "en", name: "English", nativeName: "English" },
    { code: "tr", name: "Turkish", nativeName: "Türkçe" },
    { code: "de", name: "German", nativeName: "Deutsch" },
    { code: "fr", name: "French", nativeName: "Français" },
    { code: "es", name: "Spanish", nativeName: "Español" },
    { code: "pt", name: "Portuguese", nativeName: "Português" },
    { code: "it", name: "Italian", nativeName: "Italiano" },
    { code: "nl", name: "Dutch", nativeName: "Nederlands" },
    { code: "ru", name: "Russian", nativeName: "Русский" },
    { code: "zh", name: "Chinese", nativeName: "中文" },
    { code: "ja", name: "Japanese", nativeName: "日本語" },
    { code: "ko", name: "Korean", nativeName: "한국어" },
    { code: "hi", name: "Hindi", nativeName: "हिन्दी" },
    { code: "ar", name: "Arabic", nativeName: "العربية" },
    { code: "bn", name: "Bengali", nativeName: "বাংলা" },
    { code: "ur", name: "Urdu", nativeName: "اردو" },
    { code: "fa", name: "Persian", nativeName: "فارسی" },
    { code: "th", name: "Thai", nativeName: "ไทย" },
    { code: "vi", name: "Vietnamese", nativeName: "Tiếng Việt" },
    { code: "id", name: "Indonesian", nativeName: "Bahasa Indonesia" },
  ];
