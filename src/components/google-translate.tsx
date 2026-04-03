"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { Globe } from "lucide-react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            autoDisplay: boolean;
            layout: unknown;
          },
          element: string
        ) => void;
      };
    };
  }
}

export function GoogleTranslate() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false,
            layout:
              (
                window.google.translate.TranslateElement as unknown as Record<
                  string,
                  Record<string, unknown>
                >
              ).InlineLayout?.SIMPLE,
          },
          "google_translate_element"
        );
      }
    };
  }, []);

  return (
    <>
      {/* Floating button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        {open && (
          <div className="rounded-xl border border-border bg-card p-3 shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div id="google_translate_element" />
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

      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
      <style jsx global>{`
        .goog-te-gadget {
          font-size: 0 !important;
        }
        .goog-te-gadget .goog-te-combo {
          font-size: 13px !important;
          padding: 6px 8px;
          border: 1px solid hsl(var(--border));
          border-radius: 8px;
          background: transparent;
          color: hsl(var(--foreground));
          cursor: pointer;
          outline: none;
          min-width: 160px;
        }
        .goog-te-gadget .goog-te-combo:focus {
          border-color: hsl(var(--ring));
        }
        .goog-te-banner-frame {
          display: none !important;
        }
        body {
          top: 0 !important;
        }
        .VIpgJd-ZVi9od-ORHb-OEVmcd,
        .VIpgJd-ZVi9od-l4eHX-hSRGPd {
          display: none !important;
        }
      `}</style>
    </>
  );
}
