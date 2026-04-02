import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, Globe, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the 50 Best Peptides team. Questions, corrections, or partnership inquiries.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Contact Us
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Have a question, correction, or inquiry? We&apos;d love to hear from
        you.
      </p>

      <Separator className="my-8" />

      <div className="grid gap-6 sm:grid-cols-2">
        <Card className="p-6">
          <Mail className="h-6 w-6 text-primary mb-3" />
          <h2 className="font-semibold">Email</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            For general inquiries, corrections, or feedback:
          </p>
          <a
            href="mailto:info@50bestpeptides.com"
            className="mt-2 inline-block text-sm font-medium text-primary hover:underline"
          >
            info@50bestpeptides.com
          </a>
        </Card>

        <Card className="p-6">
          <Globe className="h-6 w-6 text-primary mb-3" />
          <h2 className="font-semibold">Website</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Visit our website for the latest peptide research and rankings:
          </p>
          <span className="mt-2 inline-block text-sm font-medium text-primary">
            www.50bestpeptides.com
          </span>
        </Card>
      </div>

      <Card className="mt-6 p-6">
        <Building2 className="h-6 w-6 text-primary mb-3" />
        <h2 className="font-semibold">Company Information</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          50 Best Peptides is operated by:
        </p>
        <p className="mt-2 text-sm font-medium">50 Best Limited</p>
      </Card>

      <Separator className="my-8" />

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3">What to Contact Us About</h2>
          <ul className="space-y-2">
            {[
              "Corrections to peptide information or research data",
              "Suggestions for peptides to add to our rankings",
              "Questions about our editorial process",
              "Partnership or collaboration inquiries",
              "Media and press inquiries",
              "Technical issues with the website",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <Card className="p-4 bg-muted/50">
          <p className="text-sm text-muted-foreground">
            <strong>Please note:</strong> We cannot provide medical advice,
            dosage recommendations, or sourcing information for peptides. For
            health-related questions, please consult a qualified healthcare
            professional.
          </p>
        </Card>
      </div>
    </div>
  );
}
