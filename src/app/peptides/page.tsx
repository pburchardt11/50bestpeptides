import Link from "next/link";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { DisclaimerBanner } from "@/components/disclaimer-banner";
import { ArrowRight, FlaskConical } from "lucide-react";
import { allPeptides as peptides } from "@/data/all-peptides";

export const metadata: Metadata = {
  title: "All 150+ Peptides Ranked by Popularity",
  description:
    "Complete ranking of 150+ peptides by popularity. Browse by category, explore research findings, and learn about uses, risks, and administration for every peptide.",
};

export default function PeptidesPage() {
  const categories = [...new Set(peptides.map((p) => p.category))].sort();

  return (
    <>
      <DisclaimerBanner />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            All {peptides.length} Peptides Ranked
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            The most comprehensive peptide database on the web, ranked by
            research interest and real-world popularity.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((cat) => {
              const count = peptides.filter((p) => p.category === cat).length;
              return (
                <Badge key={cat} variant="outline" className="text-xs">
                  {cat} ({count})
                </Badge>
              );
            })}
          </div>
        </div>

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
              {peptides.map((peptide) => (
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
          {peptides.map((peptide) => (
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
      </div>
    </>
  );
}
