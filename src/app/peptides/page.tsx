import Link from "next/link";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { DisclaimerBanner } from "@/components/disclaimer-banner";
import { peptides } from "@/data/peptides";

export const metadata: Metadata = {
  title: "All 50 Peptides Ranked by Popularity",
  description:
    "Complete ranking of the 50 most popular peptides. Browse by category, explore research findings, and learn about uses, risks, and administration.",
};

export default function PeptidesPage() {
  const categories = [...new Set(peptides.map((p) => p.category))].sort();

  return (
    <>
      <DisclaimerBanner />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            All 50 Peptides Ranked
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Explore the complete list of the world&apos;s most popular peptides,
            ranked by research interest and real-world usage.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Badge key={cat} variant="outline">
                {cat}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {peptides.map((peptide) => (
            <Link key={peptide.slug} href={`/peptides/${peptide.slug}`}>
              <Card className="flex items-start gap-4 p-5 transition-colors hover:bg-accent/50">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                  #{peptide.rank}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="font-semibold">{peptide.name}</h2>
                    <Badge variant="outline" className="text-xs">
                      {peptide.category}
                    </Badge>
                    {peptide.aliases.length > 0 && (
                      <span className="text-xs text-muted-foreground">
                        ({peptide.aliases.slice(0, 2).join(", ")})
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {peptide.shortDescription}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {peptide.uses.slice(0, 3).map((use) => (
                      <Badge
                        key={use}
                        variant="secondary"
                        className="text-xs font-normal"
                      >
                        {use}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
