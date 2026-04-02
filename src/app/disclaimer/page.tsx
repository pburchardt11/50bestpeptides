import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description:
    "Important medical disclaimer for 50 Best Peptides. This website is for informational purposes only and does not constitute medical advice.",
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex items-start gap-3 mb-2">
        <AlertTriangle className="h-8 w-8 text-destructive shrink-0 mt-1" />
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Medical Disclaimer
        </h1>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        Last updated: April 1, 2025
      </p>

      <Separator className="my-8" />

      <Card className="p-6 mb-8 border-destructive/30 bg-destructive/5">
        <p className="text-sm font-medium text-foreground">
          THE INFORMATION PROVIDED ON THIS WEBSITE IS FOR GENERAL INFORMATIONAL
          AND EDUCATIONAL PURPOSES ONLY. IT IS NOT INTENDED AS A SUBSTITUTE FOR
          PROFESSIONAL MEDICAL ADVICE, DIAGNOSIS, OR TREATMENT.
        </p>
      </Card>

      <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">
            No Medical Advice
          </h2>
          <p>
            50 Best Peptides (www.50bestpeptides.com), operated by 50 Best
            Limited, provides information about peptide research for educational
            purposes. The content on this Website, including but not limited to
            peptide profiles, research summaries, blog articles, and rankings, is
            not intended to be and should not be interpreted as medical advice.
          </p>
          <p className="mt-3">
            Nothing on this Website should be used to diagnose, treat, cure, or
            prevent any disease or medical condition. The information presented
            does not create a doctor-patient relationship between you and 50
            Best Limited or any of its contributors.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">
            Consult a Healthcare Professional
          </h2>
          <p>
            Always seek the advice of a qualified healthcare provider with any
            questions you may have regarding a medical condition, treatment, or
            medication. Never disregard professional medical advice or delay
            seeking it because of something you have read on this Website.
          </p>
          <p className="mt-3">
            If you think you may have a medical emergency, call your doctor or
            emergency services immediately. 50 Best Limited does not recommend or
            endorse any specific tests, physicians, products, procedures, or
            opinions that may be mentioned on the Website.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">
            Research Information Only
          </h2>
          <p>
            The peptide information presented on this Website is compiled from
            published scientific research, clinical studies, and other publicly
            available sources. This information is presented for educational
            context and does not represent clinical recommendations.
          </p>
          <p className="mt-3">
            Many of the peptides discussed on this Website are subjects of
            ongoing research and may not be approved by regulatory agencies
            (such as the FDA, EMA, or other national authorities) for human use.
            The inclusion of a peptide on this Website does not imply that it is
            safe, effective, or legal for any specific use.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">
            No Endorsement of Self-Administration
          </h2>
          <p>
            50 Best Limited does not promote, endorse, encourage, or recommend
            the purchase, sale, or self-administration of any peptide,
            supplement, or compound discussed on this Website. Information about
            administration routes and methods is provided solely for educational
            context regarding how peptides are studied in research settings.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">
            Accuracy and Currency
          </h2>
          <p>
            While we make every effort to ensure that the information on this
            Website is accurate and up-to-date, peptide research is a rapidly
            evolving field. New studies may change the understanding of a
            peptide&apos;s effects, safety profile, or legal status. We cannot
            guarantee that all information is current, complete, or accurate at
            any given time.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">
            Assumption of Risk
          </h2>
          <p>
            Your use of any information provided on this Website is solely at
            your own risk. 50 Best Limited, its directors, employees, and
            affiliates shall not be held liable for any damages, injuries, or
            adverse effects resulting from the use or misuse of information
            presented on this Website.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">
            Third-Party Content
          </h2>
          <p>
            This Website may reference or link to third-party studies,
            publications, or resources. We do not control and are not responsible
            for the accuracy, completeness, or opinions expressed in third-party
            content. References to research studies are provided for
            informational context and do not constitute endorsement of their
            conclusions.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">
            Contact
          </h2>
          <p>
            If you have questions about this disclaimer or the content on our
            Website, please contact us at:
          </p>
          <p className="mt-3">
            <strong className="text-foreground">50 Best Limited</strong>
            <br />
            Email:{" "}
            <a
              href="mailto:info@50bestpeptides.com"
              className="text-primary hover:underline"
            >
              info@50bestpeptides.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
