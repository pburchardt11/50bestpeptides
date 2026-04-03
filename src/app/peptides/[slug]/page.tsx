import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { DisclaimerBanner } from "@/components/disclaimer-banner";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { ShopBanner } from "@/components/shop-banner";
import {
  FlaskConical,
  AlertTriangle,
  Syringe,
  Scale,
  TrendingUp,
  BookOpen,
  ShieldAlert,
  HelpCircle,
  Link2,
  ArrowRight,
} from "lucide-react";
import { allPeptides as peptides } from "@/data/all-peptides";

export async function generateStaticParams() {
  return peptides.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const peptide = peptides.find((p) => p.slug === slug);
  if (!peptide) return {};

  return {
    title: `${peptide.name} — Uses, Research, Risks & More`,
    description: peptide.shortDescription,
    openGraph: {
      title: `${peptide.name} — 50 Best Peptides`,
      description: peptide.shortDescription,
    },
    alternates: {
      canonical: `https://www.50bestpeptides.com/peptides/${peptide.slug}`,
    },
  };
}

function getRelatedPeptides(
  current: (typeof peptides)[0],
  all: typeof peptides
) {
  // Same category, excluding self, sorted by rank
  const sameCategory = all
    .filter((p) => p.category === current.category && p.slug !== current.slug)
    .slice(0, 4);
  // If less than 4, fill with nearby ranks
  if (sameCategory.length < 4) {
    const nearby = all
      .filter(
        (p) =>
          p.slug !== current.slug &&
          !sameCategory.some((s) => s.slug === p.slug)
      )
      .sort((a, b) => Math.abs(a.rank - current.rank) - Math.abs(b.rank - current.rank))
      .slice(0, 4 - sameCategory.length);
    return [...sameCategory, ...nearby];
  }
  return sameCategory;
}

function generateFAQs(peptide: (typeof peptides)[0]) {
  return [
    {
      question: `What is ${peptide.name}?`,
      answer: peptide.shortDescription,
    },
    {
      question: `What are the main uses of ${peptide.name}?`,
      answer: `The primary research applications of ${peptide.name} include: ${peptide.uses.join("; ")}.`,
    },
    {
      question: `What are the risks and side effects of ${peptide.name}?`,
      answer: `Documented risks and side effects include: ${peptide.risks.join("; ")}. Always consult a healthcare professional before considering any peptide.`,
    },
    {
      question: `Is ${peptide.name} legal?`,
      answer: peptide.legalStatus,
    },
    {
      question: `How is ${peptide.name} administered?`,
      answer: peptide.administration,
    },
  ];
}

export default async function PeptidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const peptide = peptides.find((p) => p.slug === slug);

  if (!peptide) notFound();

  const prevPeptide = peptides.find((p) => p.rank === peptide.rank - 1);
  const nextPeptide = peptides.find((p) => p.rank === peptide.rank + 1);
  const relatedPeptides = getRelatedPeptides(peptide, peptides);
  const faqs = generateFAQs(peptide);

  return (
    <>
      <DisclaimerBanner />

      {/* Structured Data: Article */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: `${peptide.name} — Uses, Research, Risks & More`,
          description: peptide.shortDescription,
          author: {
            "@type": "Organization",
            name: "50 Best Limited",
            url: "https://www.50bestpeptides.com",
          },
          publisher: {
            "@type": "Organization",
            name: "50 Best Peptides",
            url: "https://www.50bestpeptides.com",
          },
          mainEntityOfPage: `https://www.50bestpeptides.com/peptides/${peptide.slug}`,
        }}
      />

      {/* Structured Data: FAQPage */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }}
      />

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Peptides", href: "/peptides" },
            { label: peptide.name },
          ]}
        />

        {/* Header */}
        <div className="flex items-start gap-4 mb-8">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-lg">
            #{peptide.rank}
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {peptide.name}
            </h1>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <Badge>{peptide.category}</Badge>
              {peptide.aliases.map((alias) => (
                <Badge key={alias} variant="outline" className="text-xs">
                  {alias}
                </Badge>
              ))}
            </div>
            <p className="mt-3 text-lg text-muted-foreground">
              {peptide.shortDescription}
            </p>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Full description */}
        <section className="mb-10">
          <h2 className="flex items-center gap-2 text-xl font-semibold mb-4">
            <BookOpen className="h-5 w-5 text-primary" />
            Overview
          </h2>
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
            {peptide.fullDescription.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        {/* Uses */}
        <Card className="p-6 mb-6">
          <h2 className="flex items-center gap-2 text-xl font-semibold mb-4">
            <FlaskConical className="h-5 w-5 text-primary" />
            Research Uses &amp; Applications
          </h2>
          <ul className="space-y-2">
            {peptide.uses.map((use) => (
              <li
                key={use}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {use}
              </li>
            ))}
          </ul>
        </Card>

        {/* Research findings */}
        <Card className="p-6 mb-6">
          <h2 className="flex items-center gap-2 text-xl font-semibold mb-4">
            <TrendingUp className="h-5 w-5 text-primary" />
            Key Research Findings
          </h2>
          <ul className="space-y-2">
            {peptide.researchFindings.map((finding) => (
              <li
                key={finding}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {finding}
              </li>
            ))}
          </ul>
        </Card>

        {/* Risks */}
        <Card className="p-6 mb-6 border-destructive/30">
          <h2 className="flex items-center gap-2 text-xl font-semibold mb-4">
            <ShieldAlert className="h-5 w-5 text-destructive" />
            Risks &amp; Side Effects
          </h2>
          <ul className="space-y-2">
            {peptide.risks.map((risk) => (
              <li
                key={risk}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-destructive" />
                {risk}
              </li>
            ))}
          </ul>
        </Card>

        {/* Administration */}
        <Card className="p-6 mb-6">
          <h2 className="flex items-center gap-2 text-xl font-semibold mb-4">
            <Syringe className="h-5 w-5 text-primary" />
            Administration
          </h2>
          <p className="text-sm text-muted-foreground">
            {peptide.administration}
          </p>
        </Card>

        {/* Legal */}
        <Card className="p-6 mb-8">
          <h2 className="flex items-center gap-2 text-xl font-semibold mb-4">
            <Scale className="h-5 w-5 text-primary" />
            Legal Status
          </h2>
          <p className="text-sm text-muted-foreground">
            {peptide.legalStatus}
          </p>
        </Card>

        {/* FAQs */}
        <section className="mb-8">
          <h2 className="flex items-center gap-2 text-xl font-semibold mb-4">
            <HelpCircle className="h-5 w-5 text-primary" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Card key={i} className="p-5">
                <h3 className="text-sm font-semibold mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Related Peptides */}
        <section className="mb-8">
          <h2 className="flex items-center gap-2 text-xl font-semibold mb-4">
            <Link2 className="h-5 w-5 text-primary" />
            Related Peptides
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {relatedPeptides.map((rp) => (
              <Link key={rp.slug} href={`/peptides/${rp.slug}`}>
                <Card className="flex items-center gap-3 p-4 transition-colors hover:bg-accent/50">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted font-bold text-xs">
                    #{rp.rank}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-medium">{rp.name}</h3>
                    <p className="text-xs text-muted-foreground">{rp.category}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Shop banner */}
        <div className="mb-6">
          <ShopBanner />
        </div>

        {/* Disclaimer box */}
        <Card className="p-6 mb-10 bg-muted/50 border-border">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 shrink-0 text-muted-foreground mt-0.5" />
            <div>
              <p className="text-sm font-medium">Important Disclaimer</p>
              <p className="mt-1 text-xs text-muted-foreground">
                The information on this page is for educational and informational
                purposes only. It is not intended as medical advice. Always
                consult a qualified healthcare professional before considering
                any peptide or supplement. 50 Best Limited does not endorse,
                recommend, or promote the use of any peptide for
                self-administration.{" "}
                <Link
                  href="/disclaimer"
                  className="underline hover:text-foreground"
                >
                  Read our full disclaimer
                </Link>
                .
              </p>
            </div>
          </div>
        </Card>

        {/* Prev / Next navigation */}
        <Separator className="mb-6" />
        <div className="flex items-center justify-between">
          {prevPeptide ? (
            <Link
              href={`/peptides/${prevPeptide.slug}`}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              ← #{prevPeptide.rank} {prevPeptide.name}
            </Link>
          ) : (
            <span />
          )}
          {nextPeptide ? (
            <Link
              href={`/peptides/${nextPeptide.slug}`}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              #{nextPeptide.rank} {nextPeptide.name} →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </>
  );
}
