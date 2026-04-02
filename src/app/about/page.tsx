import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FlaskConical, BookOpen, Shield, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about 50 Best Peptides and our mission to provide comprehensive, research-based peptide information. A project by 50 Best Limited.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        About 50 Best Peptides
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        A comprehensive educational resource dedicated to peptide research
        information.
      </p>

      <Separator className="my-8" />

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            50 Best Peptides was created to provide the public with a clear,
            well-organized, and research-backed resource on the world&apos;s
            most popular peptides. The field of peptide science is rapidly
            evolving, and there is a growing need for accessible, accurate
            information that bridges the gap between scientific literature and
            public understanding.
          </p>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Our goal is to compile and present peptide research data in a way
            that is informative, balanced, and easy to navigate. We rank
            peptides by their popularity and research interest, provide detailed
            profiles covering uses, research findings, risks, and legal status,
            and publish educational blog content to help readers stay informed.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">What We Do</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: FlaskConical,
                title: "Research Compilation",
                description:
                  "We review published scientific literature and compile key findings for each peptide in our database.",
              },
              {
                icon: BookOpen,
                title: "Educational Content",
                description:
                  "Our blog features in-depth articles on peptide science, safety considerations, and industry developments.",
              },
              {
                icon: Shield,
                title: "Safety Information",
                description:
                  "Every peptide profile includes documented risks, side effects, and legal status information.",
              },
              {
                icon: Users,
                title: "Public Resource",
                description:
                  "We believe in making peptide research information accessible to researchers, students, and the curious public.",
              },
            ].map((item) => (
              <Card key={item.title} className="p-4">
                <item.icon className="h-6 w-6 text-primary mb-2" />
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">About 50 Best Limited</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            50 Best Peptides is a project by <strong>50 Best Limited</strong>, a
            company dedicated to creating curated informational resources across
            various industries. Our &ldquo;50 Best&rdquo; brand is focused on
            delivering well-researched rankings and guides that help people make
            informed decisions.
          </p>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            We also operate other informational websites in the &ldquo;50
            Best&rdquo; family, each following the same commitment to quality
            content and thorough research.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Editorial Standards</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            All content on 50 Best Peptides is created with the following
            principles in mind:
          </p>
          <ul className="mt-3 space-y-2">
            {[
              "Information is sourced from peer-reviewed studies and reputable scientific publications wherever possible.",
              "We clearly distinguish between established research findings and preliminary or emerging data.",
              "Risk and safety information is given equal prominence alongside potential benefits.",
              "We do not promote, sell, or endorse the purchase or self-administration of any peptide.",
              "Content is reviewed and updated periodically to reflect new research developments.",
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

        <section>
          <h2 className="text-xl font-semibold mb-3">Important Note</h2>
          <Card className="p-4 bg-muted/50">
            <p className="text-sm text-muted-foreground">
              50 Best Peptides is an informational and educational resource. We
              are not healthcare providers, and the content on this website does
              not constitute medical advice. We strongly encourage all readers
              to consult qualified healthcare professionals before making any
              health-related decisions. Please read our{" "}
              <a href="/disclaimer" className="underline hover:text-foreground">
                full disclaimer
              </a>{" "}
              for more information.
            </p>
          </Card>
        </section>
      </div>
    </div>
  );
}
