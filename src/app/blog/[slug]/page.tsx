import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, User } from "lucide-react";
import { allBlogPosts as blogPosts } from "@/data/all-blogs";
import { ShopBanner } from "@/components/shop-banner";
import { BuyButton } from "@/components/buy-button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { ShareButtons } from "@/components/share-buttons";
import { NewsletterSignup } from "@/components/newsletter-signup";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
    alternates: {
      canonical: `https://www.50bestpeptides.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Structured Data: BlogPosting */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          author: {
            "@type": "Organization",
            name: "50 Best Peptides Editorial Team",
            url: "https://www.50bestpeptides.com",
          },
          publisher: {
            "@type": "Organization",
            name: "50 Best Peptides",
            url: "https://www.50bestpeptides.com",
          },
          mainEntityOfPage: `https://www.50bestpeptides.com/blog/${post.slug}`,
          keywords: post.tags.join(", "),
        }}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <Badge variant="outline" className="mb-4">
        {post.category}
      </Badge>

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {post.title}
      </h1>

      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1">
          <User className="h-3.5 w-3.5" />
          {post.author}
        </span>
        <span className="flex items-center gap-1">
          <Calendar className="h-3.5 w-3.5" />
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" />
          {post.readTime}
        </span>
      </div>

      <div className="my-6">
        <ShareButtons title={post.title} path={`/blog/${post.slug}`} />
      </div>

      <Separator className="my-8" />

      <div
        className="prose prose-sm max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-p:text-muted-foreground prose-li:text-muted-foreground prose-a:text-primary prose-strong:text-foreground"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <Separator className="my-8" />

      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="mt-8">
        <BuyButton />
      </div>

      <div className="mt-8">
        <NewsletterSignup />
      </div>

      <div className="mt-8">
        <ShopBanner />
      </div>

      <div className="mt-8 rounded-lg border border-border bg-muted/50 p-4">
        <p className="text-xs text-muted-foreground">
          <strong>Disclaimer:</strong> This article is for informational and
          educational purposes only. It does not constitute medical advice.
          Always consult a qualified healthcare professional before making any
          health-related decisions.
        </p>
      </div>
    </article>
  );
}
