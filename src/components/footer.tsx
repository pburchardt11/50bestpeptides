import Link from "next/link";
import { FlaskConical } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <FlaskConical className="h-5 w-5 text-primary" />
              <span className="font-bold">50 Best Peptides</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Your comprehensive resource for peptide research information,
              rankings, and educational content.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Explore</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/peptides" className="text-sm text-muted-foreground hover:text-foreground">
                  All Peptides
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-sm text-muted-foreground hover:text-foreground">
                  Medical Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Contact</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Get in Touch
                </Link>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  info@50bestpeptides.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* 50 Best Network */}
        <div className="mb-8">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-center mb-3">
            50 Best Network
          </h3>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            {[
              { name: "50 Best Bar", url: "https://www.50bestbar.com" },
              { name: "50 Best Hotels", url: "https://www.50besthotels.com" },
              { name: "50 Best Spa", url: "https://www.50bestspa.com" },
              { name: "50 Best Museums", url: "https://www.50bestmuseums.com" },
              { name: "50 Best Games", url: "https://www.50bestgames.com" },
            ].map((site) => (
              <a
                key={site.url}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {site.name}
              </a>
            ))}
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} 50 Best Limited. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground text-center">
            This website is for informational and educational purposes only.
            It is not intended as medical advice.{" "}
            <Link href="/disclaimer" className="underline hover:text-foreground">
              Read our full disclaimer
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
