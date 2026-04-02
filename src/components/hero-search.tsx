"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, FlaskConical, Tag, X } from "lucide-react";
import type { Peptide } from "@/data/all-peptides";

export function HeroSearch({
  peptides,
  categories,
}: {
  peptides: { name: string; slug: string; category: string }[];
  categories: string[];
}) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const q = query.toLowerCase().trim();

  const matchedPeptides = q
    ? peptides.filter((p) => p.name.toLowerCase().includes(q)).slice(0, 8)
    : [];

  const matchedCategories = q
    ? categories.filter((c) => c.toLowerCase().includes(q))
    : [];

  const hasResults = matchedPeptides.length > 0 || matchedCategories.length > 0;
  const showDropdown = open && q.length > 0;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function navigate(href: string) {
    setQuery("");
    setOpen(false);
    router.push(href);
  }

  return (
    <div ref={wrapperRef} className="relative w-full max-w-lg mx-auto">
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
              setQuery("");
            }
            if (e.key === "Enter" && matchedPeptides.length > 0) {
              navigate(`/peptides/${matchedPeptides[0].slug}`);
            }
          }}
          placeholder="Search peptides or categories..."
          className="w-full rounded-xl border border-border bg-card pl-10 pr-10 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setOpen(false);
            }}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {showDropdown && (
        <div className="absolute top-full left-0 right-0 z-50 mt-2 rounded-xl border border-border bg-card shadow-lg overflow-hidden">
          {!hasResults && (
            <div className="px-4 py-6 text-center text-sm text-muted-foreground">
              No results for &ldquo;{query}&rdquo;
            </div>
          )}

          {matchedCategories.length > 0 && (
            <div>
              <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider bg-muted/50">
                Categories
              </div>
              {matchedCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => navigate(`/peptides?category=${encodeURIComponent(cat)}`)}
                  className="flex w-full items-center gap-2.5 px-3 py-2.5 text-sm text-left hover:bg-accent transition-colors"
                >
                  <Tag className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                  {cat}
                </button>
              ))}
            </div>
          )}

          {matchedPeptides.length > 0 && (
            <div>
              <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider bg-muted/50">
                Peptides
              </div>
              {matchedPeptides.map((p) => (
                <button
                  key={p.slug}
                  onClick={() => navigate(`/peptides/${p.slug}`)}
                  className="flex w-full items-center gap-2.5 px-3 py-2.5 text-sm text-left hover:bg-accent transition-colors"
                >
                  <FlaskConical className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                  <span className="font-medium">{p.name}</span>
                  <span className="ml-auto text-xs text-muted-foreground">
                    {p.category}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
