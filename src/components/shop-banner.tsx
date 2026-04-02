import { Card } from "@/components/ui/card";
import { ArrowRight, Sparkles, Star } from "lucide-react";

export function ShopBanner() {
  return (
    <a
      href="https://50best-spa.myshopify.com"
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <Card className="relative overflow-hidden border-primary/20 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 p-0 transition-all hover:border-primary/40 hover:shadow-lg">
        <div className="flex flex-col items-center gap-4 p-6 sm:flex-row sm:p-8">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
          <div className="text-center sm:text-left flex-1">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-2">
              <Star className="h-3 w-3" />
              Official Store
            </div>
            <h3 className="text-lg font-bold tracking-tight sm:text-xl">
              Experience Peptides on Your Skin
            </h3>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed max-w-xl">
              Shop our curated collection of peptide-infused skincare — Copper
              Peptide serums, anti-aging treatments, hydrogel patches, and more.
            </p>
            <div className="mt-3 flex items-center justify-center gap-3 sm:justify-start flex-wrap">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-5 py-2 text-sm font-medium text-primary-foreground group-hover:bg-primary/90 transition-colors">
                Shop Peptide Skincare
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </div>
        </div>
      </Card>
    </a>
  );
}
