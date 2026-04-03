import { Suspense } from "react";
import type { Metadata } from "next";
import { DisclaimerBanner } from "@/components/disclaimer-banner";
import { PeptideList } from "@/components/peptide-list";
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
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            All {peptides.length} Peptides Ranked
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            The most comprehensive peptide database on the web, ranked by
            research interest and real-world popularity. Filter by category below.
          </p>
        </div>

        <Suspense fallback={null}>
          <PeptideList peptides={peptides} categories={categories} />
        </Suspense>
      </div>
    </>
  );
}
