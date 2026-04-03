"use client";

import Script from "next/script";
import { useState, useEffect } from "react";
import { Globe, X } from "lucide-react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: Record<string, unknown>;
  }
}

export function GoogleTranslate() {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (
        window.google &&
        (window.google as Record<string, unknown>).translate
      ) {
        const gt = window.google as Record<string, Record<string, unknown>>;
        const TranslateElement = gt.translate.TranslateElement as new (
          opts: Record<string, unknown>,
          id: string
        ) => void;
        const InlineLayout = (TranslateElement as unknown as Record<string, Record<string, unknown>>)
          .InlineLayout;

        new TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false,
            layout: InlineLayout?.SIMPLE,
          },
          "google_translate_element"
        );
        setLoaded(true);
      }
    };

    // If script already loaded (e.g. after navigation), re-init
    if (
      window.google &&
      (window.google as Record<string, unknown>).translate
    ) {
      window.googleTranslateElementInit();
    }
  }, []);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        {open && (
          <div className="mb-2 rounded-xl border border-border bg-card p-4 shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="flex items-center justify-between mb-2">
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
            <div id="google_translate_element" className="min-w-[160px]" />
            {!loaded && (
              <p className="text-xs text-muted-foreground mt-2">Loading...</p>
            )}
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
          font-family: inherit !important;
        }
        .goog-te-gadget .goog-te-combo {
          font-size: 13px !important;
          padding: 6px 8px;
          border: 1px solid hsl(0 0% 90%);
          border-radius: 8px;
          background: hsl(0 0% 100%);
          color: hsl(0 0% 9%);
          cursor: pointer;
          outline: none;
          width: 100%;
          min-width: 160px;
        }
        .goog-te-gadget .goog-te-combo:focus {
          border-color: hsl(0 0% 64%);
        }
        .goog-te-banner-frame,
        .goog-te-ftab-frame {
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
      `}</style>
    </>
  );
}
