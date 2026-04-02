import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { DisclaimerBanner } from "@/components/disclaimer-banner";
import {
  FlaskConical,
  TrendingUp,
  BookOpen,
  Shield,
  ArrowRight,
  Star,
  Beaker,
  Heart,
  Brain,
  Dumbbell,
  Sparkles,
} from "lucide-react";
import { allPeptides } from "@/data/all-peptides";
import { HeroSearch } from "@/components/hero-search";

const categoryIcons: Record<string, typeof FlaskConical> = {
  "Tissue Repair": Heart,
  "Weight Management": TrendingUp,
  "Growth Hormone": Dumbbell,
  "Sexual Health": Heart,
  "Skin & Anti-Aging": Sparkles,
  Neuroprotective: Brain,
  "Immune Support": Shield,
  "Cognitive Enhancement": Brain,
  "Muscle Growth": Dumbbell,
  Cosmetic: Sparkles,
  Metabolic: Beaker,
};

export default function HomePage() {
  const top3 = allPeptides.slice(0, 3);
  const top50 = allPeptides.slice(0, 50);
  const categories = [...new Set(allPeptides.map((p) => p.category))].sort();

  return (
    <>
      <DisclaimerBanner />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-muted/30" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
              <FlaskConical className="h-3.5 w-3.5" />
              150+ Peptides — Research-Based Rankings
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              The Definitive Guide to
              <br />
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text">
                Peptide Research
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Explore the world&apos;s most comprehensive peptide database.
              Detailed profiles with uses, research findings, safety data, and
              legal status — all ranked by popularity.
            </p>
            <div className="mt-8">
              <HeroSearch
                peptides={allPeptides.map((p) => ({
                  name: p.name,
                  slug: p.slug,
                  category: p.category,
                }))}
                categories={categories}
              />
            </div>
            <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
              <Link
                href="/peptides"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Browse All Peptides
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-3 text-sm font-medium hover:bg-accent transition-colors"
              >
                <BookOpen className="h-4 w-4" />
                Read Our Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { label: "Peptides Ranked", value: "150+" },
              { label: "Categories", value: `${categories.length}` },
              { label: "Blog Articles", value: "22" },
              { label: "Research Sources", value: "500+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold tracking-tight">{stat.value}</p>
                <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top 3 Featured */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Top 3 Most Popular Peptides
            </h2>
            <p className="mt-2 text-muted-foreground">
              The most researched and widely discussed peptides worldwide
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 pt-4">
            {top3.map((peptide, i) => (
              <Link key={peptide.slug} href={`/peptides/${peptide.slug}`}>
                <Card className="group relative h-full p-6 transition-all hover:bg-accent/50 hover:shadow-md overflow-visible">
                  {i === 0 && (
                    <div className="absolute -top-3 left-6">
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
                        <Star className="h-3 w-3" />
                        #1 Most Popular
                      </span>
                    </div>
                  )}
                  <div className="flex items-center gap-3 mb-4 mt-1">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-lg">
                      #{peptide.rank}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {peptide.name}
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        {peptide.category}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {peptide.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
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
                  <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    View full profile <ArrowRight className="h-3 w-3" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top 50 Table */}
      <section className="border-t border-border bg-muted/20 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Top 50 Peptides
              </h2>
              <p className="mt-2 text-muted-foreground">
                Ranked by research interest and real-world popularity
              </p>
            </div>
            <Link
              href="/peptides"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              View all 150+
              <ArrowRight className="h-4 w-4" />
            </Link>
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
                    Key Uses
                  </th>
                  <th className="px-4 py-3 w-10" />
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {top50.map((peptide) => {
                  const Icon =
                    categoryIcons[peptide.category] || FlaskConical;
                  return (
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
                        <div className="flex items-center gap-1.5">
                          <Icon className="h-3.5 w-3.5 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            {peptide.category}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3 hidden lg:table-cell">
                        <div className="flex flex-wrap gap-1">
                          {peptide.uses.slice(0, 2).map((use) => (
                            <Badge
                              key={use}
                              variant="secondary"
                              className="text-[10px] font-normal"
                            >
                              {use}
                            </Badge>
                          ))}
                        </div>
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
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden grid gap-3">
            {top50.map((peptide) => (
              <Link key={peptide.slug} href={`/peptides/${peptide.slug}`}>
                <Card className="flex items-center gap-3 p-3 transition-colors hover:bg-accent/50">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted font-bold text-xs">
                    #{peptide.rank}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-medium truncate">
                      {peptide.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {peptide.category}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/peptides"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              View All 150+ Peptides
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Browse by Category
            </h2>
            <p className="mt-2 text-muted-foreground">
              Find peptides by their primary area of research
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {categories.map((cat) => {
              const count = allPeptides.filter(
                (p) => p.category === cat
              ).length;
              const Icon = categoryIcons[cat] || FlaskConical;
              return (
                <Link key={cat} href={`/peptides?category=${encodeURIComponent(cat)}`}>
                  <Card className="flex flex-col items-center p-4 text-center transition-colors hover:bg-accent/50">
                    <Icon className="h-6 w-6 text-primary mb-2" />
                    <span className="text-sm font-medium">{cat}</span>
                    <span className="mt-1 text-xs text-muted-foreground">
                      {count} peptide{count !== 1 ? "s" : ""}
                    </span>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Us + CTA */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Why 50 Best Peptides?
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We provide the most comprehensive, research-backed peptide
                database on the internet. Every profile is carefully compiled
                from scientific literature to give you accurate, balanced
                information.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  {
                    icon: FlaskConical,
                    title: "Research-Based Profiles",
                    description:
                      "Every peptide entry is backed by published scientific research and clinical studies.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Popularity Rankings",
                    description:
                      "Peptides ranked by real-world usage and research interest to prioritize your learning.",
                  },
                  {
                    icon: Shield,
                    title: "Complete Safety Data",
                    description:
                      "Comprehensive risk profiles, side effects, and legal status for every peptide.",
                  },
                ].map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">{feature.title}</h3>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <Card className="p-6">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                  Latest from Our Blog
                </h3>
                <Separator className="mb-4" />
                <ul className="space-y-3">
                  {[
                    {
                      title: "What Are Peptides? A Complete Beginner's Guide",
                      slug: "what-are-peptides",
                    },
                    {
                      title:
                        "Semaglutide vs Tirzepatide: Which Weight Loss Peptide?",
                      slug: "semaglutide-vs-tirzepatide",
                    },
                    {
                      title: "Peptide Safety: What You Need to Know",
                      slug: "peptide-safety-guide",
                    },
                    {
                      title: "The Science Behind Anti-Aging Peptides",
                      slug: "science-behind-anti-aging-peptides",
                    },
                  ].map((post) => (
                    <li key={post.slug}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {post.title} →
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/blog"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  View all articles <ArrowRight className="h-3 w-3" />
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
