"use client";

import { useState } from "react";
import { Globe, X } from "lucide-react";

const languages = [
  { code: "zh-CN", label: "中文" },
  { code: "es", label: "Español" },
  { code: "hi", label: "हिन्दी" },
  { code: "ar", label: "العربية" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
  { code: "pt", label: "Português" },
  { code: "ru", label: "Русский" },
  { code: "it", label: "Italiano" },
  { code: "nl", label: "Nederlands" },
  { code: "tr", label: "Türkçe" },
  { code: "pl", label: "Polski" },
  { code: "th", label: "ไทย" },
  { code: "vi", label: "Tiếng Việt" },
  { code: "id", label: "Bahasa Indonesia" },
  { code: "sv", label: "Svenska" },
];

export function GoogleTranslate() {
  const [open, setOpen] = useState(false);

  function translate(langCode: string) {
    const url = window.location.href;
    window.open(
      `https://translate.google.com/translate?sl=en&tl=${langCode}&u=${encodeURIComponent(url)}`,
      "_blank"
    );
    setOpen(false);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {open && (
        <div className="mb-2 w-48 rounded-xl border border-border bg-card shadow-lg overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between px-3 py-2 border-b border-border bg-muted/50">
            <span className="text-xs font-semibold text-muted-foreground">
              Translate
            </span>
            <button
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
          <div className="max-h-64 overflow-y-auto py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => translate(lang.code)}
                className="flex w-full items-center px-3 py-2 text-sm text-left hover:bg-accent transition-colors"
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
        aria-label="Translate page"
      >
        <Globe className="h-5 w-5" />
      </button>
    </div>
  );
}
