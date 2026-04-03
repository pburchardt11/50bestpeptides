"use client";

import { useState, useEffect, useRef } from "react";
import { Globe, X } from "lucide-react";

const LANGUAGES = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "ko", name: "한국어", flag: "🇰🇷" },
  { code: "zh-CN", name: "简体中文", flag: "🇨🇳" },
  { code: "zh-TW", name: "繁體中文", flag: "🇹🇼" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
  { code: "th", name: "ไทย", flag: "🇹🇭" },
  { code: "vi", name: "Tiếng Việt", flag: "🇻🇳" },
  { code: "tr", name: "Türkçe", flag: "🇹🇷" },
  { code: "nl", name: "Nederlands", flag: "🇳🇱" },
  { code: "pl", name: "Polski", flag: "🇵🇱" },
  { code: "sv", name: "Svenska", flag: "🇸🇪" },
  { code: "id", name: "Bahasa Indonesia", flag: "🇮🇩" },
];

export function GoogleTranslate() {
  const [open, setOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const ref = useRef<HTMLDivElement>(null);

  // Load Google Translate script
  useEffect(() => {
    if (document.getElementById("google-translate-script")) return;

    (window as unknown as Record<string, unknown>).googleTranslateElementInit = () => {
      const google = (window as unknown as Record<string, unknown>).google as Record<string, unknown> | undefined;
      if (google?.translate) {
        const mod = google.translate as Record<string, unknown>;
        const TE = mod.TranslateElement as unknown as new (
          opts: Record<string, unknown>,
          id: string
        ) => void;
        new TE(
          { pageLanguage: "en", autoDisplay: false },
          "google_translate_element"
        );
      }
    };

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // Restore saved language
    const saved = localStorage.getItem("preferred-lang");
    if (saved && saved !== "en") {
      setCurrentLang(saved);
      const interval = setInterval(() => {
        const select = document.querySelector(
          ".goog-te-combo"
        ) as HTMLSelectElement | null;
        if (select) {
          select.value = saved;
          select.dispatchEvent(new Event("change"));
          clearInterval(interval);
        }
      }, 500);
      setTimeout(() => clearInterval(interval), 10000);
    }
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const switchLanguage = (langCode: string) => {
    setCurrentLang(langCode);
    localStorage.setItem("preferred-lang", langCode);
    setOpen(false);

    if (langCode === "en") {
      const hostname = window.location.hostname;
      const domainParts = hostname.split(".");
      const expiry = "expires=Thu, 01 Jan 1970 00:00:00 UTC";

      const domains = ["", hostname];
      for (let i = 0; i < domainParts.length; i++) {
        domains.push("." + domainParts.slice(i).join("."));
      }
      for (const domain of domains) {
        const domainStr = domain ? `; domain=${domain}` : "";
        document.cookie = `googtrans=; ${expiry}; path=/${domainStr}`;
        document.cookie = `googtrans=; ${expiry}; path=${domainStr}`;
      }

      const select = document.querySelector(
        ".goog-te-combo"
      ) as HTMLSelectElement | null;
      if (select) {
        select.value = "en";
        select.dispatchEvent(new Event("change"));
      }

      window.location.reload();
      return;
    }

    const select = document.querySelector(
      ".goog-te-combo"
    ) as HTMLSelectElement | null;
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event("change"));
    }
  };

  const current =
    LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

  return (
    <div
      ref={ref}
      className="fixed bottom-6 right-6 z-[10000]"
    >
      {/* Hidden Google Translate element */}
      <div id="google_translate_element" style={{ display: "none" }} />

      {/* Dropdown */}
      {open && (
        <div className="absolute bottom-14 right-0 w-56 max-h-80 overflow-y-auto rounded-xl border border-border bg-card shadow-lg">
          <div className="flex items-center justify-between px-3 py-2 border-b border-border bg-muted/50 sticky top-0">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Translate
            </span>
            <button
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLanguage(lang.code)}
              className={`flex w-full items-center gap-2.5 px-3 py-2 text-sm text-left transition-colors hover:bg-accent ${
                lang.code === currentLang
                  ? "bg-primary/10 text-primary font-medium"
                  : ""
              }`}
            >
              <span className="text-base">{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Change language"
        className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium shadow-lg hover:bg-accent transition-colors"
      >
        <Globe className="h-4 w-4" />
        <span>
          {current.flag} {current.code.toUpperCase()}
        </span>
      </button>

      <style jsx global>{`
        .goog-te-banner-frame,
        .goog-te-ftab-frame,
        #goog-gt-tt,
        .goog-te-balloon-frame {
          display: none !important;
        }
        body {
          top: 0 !important;
        }
        .VIpgJd-ZVi9od-ORHb-OEVmcd,
        .VIpgJd-ZVi9od-l4eHX-hSRGPd,
        .VIpgJd-ZVi9od-SmfZ-OEVmcd {
          display: none !important;
        }
        .skiptranslate {
          display: none !important;
        }
      `}</style>
    </div>
  );
}
