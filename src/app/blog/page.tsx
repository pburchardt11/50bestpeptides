import Link from "next/link";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Clock, Calendar } from "lucide-react";
import { allBlogPosts as blogPosts } from "@/data/all-blogs";
import { ShopBanner } from "@/components/shop-banner";

export const metadata: Metadata = {
  title: "Peptide Blog — Research, Guides & News",
  description:
    "Stay informed with our peptide blog. Expert articles on peptide research, safety guides, comparisons, and the latest developments in peptide science.",
};

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Blog</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Expert articles on peptide research, safety, and science.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sortedPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="flex h-full flex-col p-6 transition-colors hover:bg-accent/50">
              <Badge variant="outline" className="w-fit text-xs mb-3">
                {post.category}
              </Badge>
              <h2 className="font-semibold leading-snug line-clamp-2">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3 flex-1">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </span>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-12">
        <ShopBanner />
      </div>
    </div>
  );
}
