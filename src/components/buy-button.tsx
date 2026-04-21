import { Card } from "@/components/ui/card";
import { ShoppingCart, Tag } from "lucide-react";

export function BuyButton() {
  return (
    <Card className="p-5">
      <p className="text-sm font-medium mb-1">Purchase for Research</p>
      <p className="text-xs text-muted-foreground mb-4">
        For laboratory and research purposes only. Not intended for human or
        animal consumption.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="https://swisschems.is/ref/6621/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <ShoppingCart className="h-4 w-4" />
          Swiss Chems
        </a>
        <a
          href="https://www.limitlesslifenootropics.com/?_ef_transaction_id=&oid=1&affid=10785"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <ShoppingCart className="h-4 w-4" />
          Limitless Life Nootropics
        </a>
      </div>
      <a
        href="https://www.kb6dp3dq.com/50Best/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center gap-2 text-xs text-primary hover:underline"
      >
        <Tag className="h-3.5 w-3.5" />
        Use coupon code &quot;50Best&quot; for a discount
      </a>
    </Card>
  );
}
