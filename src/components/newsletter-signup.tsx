"use client";

import { useState } from "react";
import { Mail, ArrowRight, Check } from "lucide-react";
import { Card } from "@/components/ui/card";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // Store in localStorage for now — can integrate with Mailchimp/Resend later
    const existing = JSON.parse(
      localStorage.getItem("newsletter-signups") || "[]"
    );
    existing.push({ email, date: new Date().toISOString() });
    localStorage.setItem("newsletter-signups", JSON.stringify(existing));
    setSubmitted(true);
    setEmail("");
  }

  if (submitted) {
    return (
      <Card className="p-6 bg-primary/5 border-primary/20">
        <div className="flex items-center gap-3 justify-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
            <Check className="h-4 w-4 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium">You&apos;re subscribed!</p>
            <p className="text-xs text-muted-foreground">
              Thank you for signing up. We&apos;ll keep you updated on peptide research.
            </p>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 bg-primary/5 border-primary/20">
      <div className="flex items-start gap-3 mb-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
          <Mail className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="text-sm font-semibold">Stay Updated on Peptide Research</h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Get the latest peptide research news and updates delivered to your inbox.
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 rounded-lg border border-border bg-card px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <button
          type="submit"
          className="inline-flex items-center gap-1 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Subscribe
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </form>
    </Card>
  );
}
