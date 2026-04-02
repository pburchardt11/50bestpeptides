"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowRight, X } from "lucide-react";
import type { Peptide } from "@/data/all-peptides";

export function PeptideList({
  peptides,
  categories,
}: {
  peptides: Peptide[];
  categories: string[];
}) {
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = selected
    ? peptides.filter((p) => p.category === selected)
    : peptides;

  return (
    <>
      {/* Category filter */}
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setSelected(null)}
          className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
            selected === null
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-background text-muted-foreground hover:bg-accent"
          }`}
        >
          All ({peptides.length})
        </button>
        {categories.map((cat) => {
          const count = peptides.filter((p) => p.category === cat).length;
          const isActive = selected === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelected(isActive ? null : cat)}
              className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                isActive
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-muted-foreground hover:bg-accent"
              }`}
            >
              {cat} ({count})
              {isActive && <X className="h-3 w-3" />}
            </button>
          );
        })}
      </div>

      {/* Result count */}
      {selected && (
        <p className="mb-4 text-sm text-muted-foreground">
          Showing {filtered.length} peptide{filtered.length !== 1 ? "s" : ""} in{" "}
          <strong className="text-foreground">{selected}</strong>
        </p>
      )}

      {/* Desktop table */}
      <div className="hidden md:block rounded-xl border border-border bg-card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground w-16">
                Rank
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Peptide
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground w-40">
                Category
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground hidden lg:table-cell">
                Description
              </th>
              <th className="px-4 py-3 w-10" />
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filtered.map((peptide) => (
              <tr
                key={peptide.slug}
                className="group transition-colors hover:bg-accent/30"
              >
                <td className="px-4 py-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-muted text-xs font-bold">
                    {peptide.rank}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <Link
                    href={`/peptides/${peptide.slug}`}
                    className="group-hover:text-primary transition-colors"
                  >
                    <span className="font-medium">{peptide.name}</span>
                    {peptide.aliases.length > 0 && (
                      <span className="ml-2 text-xs text-muted-foreground">
                        ({peptide.aliases[0]})
                      </span>
                    )}
                  </Link>
                </td>
                <td className="px-4 py-3">
                  <Badge variant="outline" className="text-xs">
                    {peptide.category}
                  </Badge>
                </td>
                <td className="px-4 py-3 hidden lg:table-cell">
                  <p className="text-sm text-muted-foreground line-clamp-1 max-w-md">
                    {peptide.shortDescription}
                  </p>
                </td>
                <td className="px-4 py-3 text-right">
                  <Link
                    href={`/peptides/${peptide.slug}`}
                    className="text-muted-foreground hover:text-primary"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden grid gap-3">
        {filtered.map((peptide) => (
          <Link key={peptide.slug} href={`/peptides/${peptide.slug}`}>
            <Card className="flex items-center gap-3 p-3 transition-colors hover:bg-accent/50">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted font-bold text-xs">
                #{peptide.rank}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h2 className="text-sm font-medium truncate">
                    {peptide.name}
                  </h2>
                  <Badge variant="outline" className="text-[10px] shrink-0">
                    {peptide.category}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground truncate">
                  {peptide.shortDescription}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
