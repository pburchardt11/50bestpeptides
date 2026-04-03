import Link from "next/link";
import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ArrowRight, ArrowLeftRight } from "lucide-react";
import { comparisons } from "@/data/comparisons";

export const metadata: Metadata = {
  title: "Peptide Comparisons — Side-by-Side Analysis",
  description:
    "Compare popular peptides head-to-head. Detailed side-by-side analysis of BPC-157 vs TB-500, Semaglutide vs Tirzepatide, and more.",
};

export default function ComparePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Compare Peptides" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Peptide Comparisons
      </h1>
      <p className="mt-3 text-lg text-muted-foreground">
        Head-to-head comparisons of the most popular peptides.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {comparisons.map((comp) => (
          <Link key={comp.slug} href={`/compare/${comp.slug}`}>
            <Card className="flex items-center gap-4 p-5 h-full transition-colors hover:bg-accent/50">
              <ArrowLeftRight className="h-8 w-8 shrink-0 text-primary" />
              <div className="min-w-0 flex-1">
                <h2 className="font-semibold text-sm">
                  {comp.peptide1Name} vs {comp.peptide2Name}
                </h2>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                  {comp.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {comp.categories.map((cat) => (
                    <Badge key={cat} variant="secondary" className="text-[10px]">
                      {cat}
                    </Badge>
                  ))}
                </div>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
