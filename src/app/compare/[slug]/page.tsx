import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { ShareButtons } from "@/components/share-buttons";
import { ShopBanner } from "@/components/shop-banner";
import { ArrowLeftRight, ArrowRight } from "lucide-react";
import { comparisons } from "@/data/comparisons";

export async function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const comp = comparisons.find((c) => c.slug === slug);
  if (!comp) return {};

  return {
    title: comp.title,
    description: comp.description,
    alternates: {
      canonical: `https://www.50bestpeptides.com/compare/${comp.slug}`,
    },
  };
}

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const comp = comparisons.find((c) => c.slug === slug);

  if (!comp) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: comp.title,
          description: comp.description,
          author: {
            "@type": "Organization",
            name: "50 Best Limited",
          },
          publisher: {
            "@type": "Organization",
            name: "50 Best Peptides",
          },
          mainEntityOfPage: `https://www.50bestpeptides.com/compare/${comp.slug}`,
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Compare", href: "/compare" },
          { label: `${comp.peptide1Name} vs ${comp.peptide2Name}` },
        ]}
      />

      <div className="flex items-center gap-3 mb-2">
        <ArrowLeftRight className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {comp.title}
        </h1>
      </div>
      <p className="text-muted-foreground mb-4">{comp.description}</p>

      <ShareButtons
        title={comp.title}
        path={`/compare/${comp.slug}`}
      />

      <Separator className="my-8" />

      {/* Introduction */}
      <div className="prose prose-sm max-w-none text-muted-foreground space-y-4 mb-10">
        {comp.introduction.split("\n\n").map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {/* Peptide summaries */}
      <div className="grid gap-6 sm:grid-cols-2 mb-10">
        <Card className="p-6">
          <h2 className="font-semibold text-lg mb-3">{comp.peptide1Name}</h2>
          <div className="text-sm text-muted-foreground space-y-3">
            {comp.peptide1Summary.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <Link
            href={`/peptides/${comp.peptide1Slug}`}
            className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
          >
            Full profile <ArrowRight className="h-3 w-3" />
          </Link>
        </Card>
        <Card className="p-6">
          <h2 className="font-semibold text-lg mb-3">{comp.peptide2Name}</h2>
          <div className="text-sm text-muted-foreground space-y-3">
            {comp.peptide2Summary.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <Link
            href={`/peptides/${comp.peptide2Slug}`}
            className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
          >
            Full profile <ArrowRight className="h-3 w-3" />
          </Link>
        </Card>
      </div>

      {/* Comparison table */}
      <h2 className="text-xl font-semibold mb-4">Head-to-Head Comparison</h2>
      <div className="rounded-xl border border-border bg-card overflow-hidden mb-10">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Aspect
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {comp.peptide1Name}
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {comp.peptide2Name}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {comp.comparisonPoints.map((point) => (
              <tr key={point.aspect}>
                <td className="px-4 py-3 text-sm font-medium">
                  {point.aspect}
                </td>
                <td className="px-4 py-3 text-sm text-muted-foreground">
                  {point.peptide1}
                </td>
                <td className="px-4 py-3 text-sm text-muted-foreground">
                  {point.peptide2}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Verdict */}
      <h2 className="text-xl font-semibold mb-4">Verdict</h2>
      <div className="prose prose-sm max-w-none text-muted-foreground space-y-4 mb-8">
        {comp.verdict.split("\n\n").map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {comp.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs">
            {tag}
          </Badge>
        ))}
      </div>

      <ShopBanner />

      <div className="mt-8 rounded-lg border border-border bg-muted/50 p-4">
        <p className="text-xs text-muted-foreground">
          <strong>Disclaimer:</strong> This comparison is for informational and
          educational purposes only. It does not constitute medical advice.
          Always consult a qualified healthcare professional before making any
          health-related decisions.
        </p>
      </div>
    </div>
  );
}
