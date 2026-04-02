import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export function DisclaimerBanner() {
  return (
    <div className="bg-muted border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground text-center">
          <AlertTriangle className="h-3 w-3 shrink-0" />
          <span>
            This website is for informational purposes only and does not
            constitute medical advice.{" "}
            <Link href="/disclaimer" className="underline hover:text-foreground">
              Read disclaimer
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}
