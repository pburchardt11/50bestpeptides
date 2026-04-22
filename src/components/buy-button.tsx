import { Card } from "@/components/ui/card";
import { ShoppingCart, Tag, Percent } from "lucide-react";

export function BuyButton() {
  return (
    <Card className="p-5">
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
        <div className="flex-1">
          <p className="text-sm font-medium mb-1">Purchase for Research</p>
          <p className="text-xs text-muted-foreground mb-4">
            For laboratory and research purposes only. Not intended for human or
            animal consumption.
          </p>
          <a
            href="https://www.limitlesslifenootropics.com/?_ef_transaction_id=&oid=1&affid=10785"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <ShoppingCart className="h-4 w-4" />
            Buy Research Peptides
          </a>
        </div>

        <a
          href="https://www.kb6dp3dq.com/50Best/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl border-2 border-dashed border-primary/40 bg-primary/5 px-4 py-3 hover:border-primary/60 hover:bg-primary/10 transition-colors sm:max-w-[220px]"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <Percent className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-bold text-primary">15% OFF</p>
            <p className="text-xs text-muted-foreground">
              Use code <span className="font-semibold text-foreground">50Best</span> at checkout
            </p>
          </div>
        </a>
      </div>
    </Card>
  );
}
