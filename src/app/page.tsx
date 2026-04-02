import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { DisclaimerBanner } from "@/components/disclaimer-banner";
import { FlaskConical, TrendingUp, BookOpen, Shield } from "lucide-react";
import { peptides } from "@/data/peptides";

export default function HomePage() {
  return (
    <>
      <DisclaimerBanner />

      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-background to-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              Research-Based Rankings
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              The 50 Most Popular
              <br />
              <span className="text-primary">Peptides</span> Ranked
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Your comprehensive guide to the world&apos;s most researched
              peptides. Explore detailed profiles, research findings, safety
              information, and more.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
              <Link
                href="/peptides"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <FlaskConical className="h-4 w-4" />
                Browse All Peptides
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium hover:bg-accent transition-colors"
              >
                <BookOpen className="h-4 w-4" />
                Read Our Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: "Peptides Ranked", value: "50" },
              { label: "Research Articles", value: "500+" },
              { label: "Categories", value: "15" },
              { label: "Blog Posts", value: "22" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top 10 */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Top 10 Peptides
              </h2>
              <p className="mt-2 text-muted-foreground">
                The most popular and widely researched peptides
              </p>
            </div>
            <Link
              href="/peptides"
              className="hidden sm:flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              View all 50
              <TrendingUp className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4">
            {peptides.slice(0, 10).map((peptide) => (
              <Link key={peptide.slug} href={`/peptides/${peptide.slug}`}>
                <Card className="flex items-center gap-4 p-4 transition-colors hover:bg-accent/50">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                    #{peptide.rank}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold">{peptide.name}</h3>
                      <Badge variant="outline" className="text-xs">
                        {peptide.category}
                      </Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
                      {peptide.shortDescription}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-6 text-center sm:hidden">
            <Link
              href="/peptides"
              className="text-sm font-medium text-primary hover:underline"
            >
              View all 50 peptides →
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
            Why 50 Best Peptides?
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: FlaskConical,
                title: "Research-Based",
                description:
                  "Every peptide profile is backed by published scientific research and clinical studies.",
              },
              {
                icon: TrendingUp,
                title: "Popularity Ranked",
                description:
                  "Peptides are ranked by real-world popularity and research interest to help you prioritize learning.",
              },
              {
                icon: Shield,
                title: "Safety First",
                description:
                  "We include comprehensive risk profiles and safety information for every peptide listed.",
              },
            ].map((feature) => (
              <Card key={feature.title} className="p-6">
                <feature.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
