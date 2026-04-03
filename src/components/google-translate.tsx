"use client";

import { useState } from "react";
import { Globe, X } from "lucide-react";

const languages = [
  { code: "zh-CN", label: "中文 (Chinese)" },
  { code: "es", label: "Español (Spanish)" },
  { code: "hi", label: "हिन्दी (Hindi)" },
  { code: "ar", label: "العربية (Arabic)" },
  { code: "fr", label: "Français (French)" },
  { code: "de", label: "Deutsch (German)" },
  { code: "ja", label: "日本語 (Japanese)" },
  { code: "ko", label: "한국어 (Korean)" },
  { code: "pt", label: "Português (Portuguese)" },
  { code: "ru", label: "Русский (Russian)" },
  { code: "it", label: "Italiano (Italian)" },
  { code: "nl", label: "Nederlands (Dutch)" },
  { code: "tr", label: "Türkçe (Turkish)" },
  { code: "pl", label: "Polski (Polish)" },
  { code: "th", label: "ไทย (Thai)" },
  { code: "vi", label: "Tiếng Việt (Vietnamese)" },
  { code: "id", label: "Bahasa Indonesia" },
  { code: "sv", label: "Svenska (Swedish)" },
];

export function GoogleTranslate() {
  const [open, setOpen] = useState(false);

  function translate(langCode: string) {
    const currentUrl = window.location.href;
    window.location.href = `https://translate.google.com/translate?sl=en&tl=${langCode}&u=${encodeURIComponent(currentUrl)}`;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {open && (
        <div className="mb-2 w-56 rounded-xl border border-border bg-card shadow-lg overflow-hidden">
          <div className="flex items-center justify-between px-3 py-2.5 border-b border-border bg-muted/50">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Translate Page
            </span>
            <button
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
          <div className="max-h-72 overflow-y-auto">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => translate(lang.code)}
                className="flex w-full items-center px-3 py-2 text-sm text-left hover:bg-accent transition-colors border-b border-border/50 last:border-0"
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
