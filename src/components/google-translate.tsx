"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: new (
          options: { pageLanguage: string; autoDisplay: boolean; layout: unknown },
          element: string
        ) => void;
      };
    };
  }
}

export function GoogleTranslate() {
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false,
            layout:
              (window.google.translate.TranslateElement as unknown as Record<string, Record<string, unknown>>)
                .InlineLayout?.HORIZONTAL,
          },
          "google_translate_element"
        );
      }
    };
  }, []);

  return (
    <>
      <div id="google_translate_element" className="translate-widget" />
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
      <style jsx global>{`
        .translate-widget .goog-te-gadget {
          font-size: 0 !important;
        }
        .translate-widget .goog-te-gadget .goog-te-combo {
          font-size: 12px !important;
          padding: 4px 6px;
          border: 1px solid hsl(var(--border));
          border-radius: 6px;
          background: transparent;
          color: hsl(var(--muted-foreground));
          cursor: pointer;
          outline: none;
        }
        .translate-widget .goog-te-gadget .goog-te-combo:focus {
          border-color: hsl(var(--ring));
        }
        .goog-te-banner-frame {
          display: none !important;
        }
        body {
          top: 0 !important;
        }
        .skiptranslate {
          display: none !important;
        }
        .translate-widget .skiptranslate {
          display: block !important;
        }
      `}</style>
    </>
  );
}
