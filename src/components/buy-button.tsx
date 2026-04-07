import { Card } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

export function BuyButton() {
  return (
    <Card className="p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <div className="flex-1">
        <p className="text-sm font-medium">Purchase for Research</p>
        <p className="text-xs text-muted-foreground mt-0.5">
          For laboratory and research purposes only. Not intended for human or
          animal consumption.
        </p>
      </div>
      <a
        href="https://luma-peptides.com/?ref=50Best"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors shrink-0"
      >
        <ShoppingCart className="h-4 w-4" />
        Buy Research Peptides
      </a>
    </Card>
  );
}
