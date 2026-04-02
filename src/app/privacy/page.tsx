import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for 50 Best Peptides, operated by 50 Best Limited.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Last updated: April 1, 2025
      </p>

      <Separator className="my-8" />

      <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
        <section>
          <p>
            This Privacy Policy describes how 50 Best Limited (&ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and
            protects information when you visit 50 Best Peptides
            (www.50bestpeptides.com).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">
            1. Information We Collect
          </h2>
          <p>
            <strong className="text-foreground">
              Automatically Collected Information:
            </strong>{" "}
            When you visit our Website, we may automatically collect certain
            information about your device, including your IP address, browser
            type, operating system, referring URLs, and pages viewed. This
            information is collected through standard web server logs and
            analytics tools.
          </p>
          <p className="mt-3">
            <strong className="text-foreground">
              Voluntarily Provided Information:
            </strong>{" "}
            If you contact us via email, we will collect the information you
            provide, including your name, email address, and the content of your
            message.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">
            2. How We Use Your Information
          </h2>
          <p>We use the information we collect to:</p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>Operate, maintain, and improve our Website.</li>
            <li>Understand how visitors use our Website.</li>
            <li>Respond to your inquiries and communications.</li>
            <li>Comply with legal obligations.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">
            3. Cookies and Analytics
          </h2>
          <p>
            Our Website may use cookies and similar tracking technologies to
            enhance your browsing experience and collect analytics data. You can
            control cookie settings through your browser. Disabling cookies may
            affect the functionality of certain parts of the Website.
          </p>
          <p className="mt-3">
            We may use third-party analytics services (such as Vercel Analytics)
            to help us understand how visitors interact with our Website. These
            services may collect information about your use of the Website
            through cookies and similar technologies.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">
            4. Third-Party Links
          </h2>
          <p>
            Our Website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of these websites.
            We encourage you to review the privacy policies of any third-party
            websites you visit.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">
            5. Data Security
          </h2>
          <p>
            We take reasonable measures to protect the information we collect.
            However, no method of transmission over the Internet or electronic
            storage is completely secure, and we cannot guarantee absolute
            security.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">
            6. Children&apos;s Privacy
          </h2>
          <p>
            Our Website is not directed to children under the age of 18. We do
            not knowingly collect personal information from children. If you
            believe we have collected information from a child, please contact us
            so we can take appropriate action.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">
            7. Your Rights
          </h2>
          <p>
            Depending on your jurisdiction, you may have certain rights regarding
            your personal information, including the right to access, correct,
            delete, or restrict processing of your data. To exercise any of
            these rights, please contact us using the information below.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">
            8. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated revision date. Your
            continued use of the Website after any changes constitutes
            acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">
            9. Contact Us
          </h2>
          <p>
            If you have questions about this Privacy Policy, please contact us
            at:
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
            <br />
            Website: www.50bestpeptides.com
          </p>
        </section>
      </div>
    </div>
  );
}
