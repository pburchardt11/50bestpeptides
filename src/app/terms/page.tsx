import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for 50 Best Peptides, operated by 50 Best Limited.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Last updated: April 1, 2025
      </p>

      <Separator className="my-8" />

      <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
        <section>
          <p>
            Welcome to 50 Best Peptides (&ldquo;the Website&rdquo;), accessible
            at www.50bestpeptides.com. The Website is owned and operated by 50
            Best Limited (&ldquo;the Company,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing or using the
            Website, you agree to be bound by these Terms of Service
            (&ldquo;Terms&rdquo;). If you do not agree with any part of these
            Terms, you must not use the Website.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">
            1. Use of Our Website
          </h2>
          <p>
            50 Best Peptides provides peptide research information, rankings,
            and educational content for informational purposes only. The Website
            is intended for adults who are interested in learning about peptide
            research and science. You agree to use the Website only for lawful
            purposes and in accordance with these Terms.
          </p>
          <p className="mt-3">You agree not to:</p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>
              Use the Website in any way that violates any applicable law or
              regulation.
            </li>
            <li>
              Attempt to interfere with the proper functioning of the Website.
            </li>
            <li>
              Use any automated system, including bots, crawlers, or scrapers, to
              access the Website for any purpose without our prior written
              consent.
            </li>
            <li>
              Reproduce, duplicate, copy, sell, or exploit any portion of the
              Website without our express written permission.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">
            2. Content and Accuracy
          </h2>
          <p>
            The peptide rankings, research information, and educational content
            on this Website are compiled from publicly available scientific
            literature, research databases, and other third-party sources. While
            we strive to ensure accuracy, we make no representations or
            warranties regarding the completeness, accuracy, reliability, or
            currency of any information on the Website.
          </p>
          <p className="mt-3">
            Peptide research is an evolving field, and information may change as
            new studies are published. We periodically review and update our
            content, but we cannot guarantee that all information is current at
            any given time.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">
            3. Not Medical Advice
          </h2>
          <p>
            <strong className="text-foreground">
              The content on this Website is for informational and educational
              purposes only. It is not intended to be, and should not be
              construed as, medical advice, diagnosis, or treatment
              recommendations.
            </strong>
          </p>
          <p className="mt-3">
            We do not promote, endorse, or recommend the use of any peptide for
            self-administration. Always consult a qualified healthcare
            professional before making any decisions about your health. Reliance
            on any information provided on this Website is solely at your own
            risk.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">
            4. Third-Party Links and Services
          </h2>
          <p>
            The Website may contain links to third-party websites or services.
            These links are provided for your convenience and do not constitute
            an endorsement or recommendation. We have no control over, and
            assume no responsibility for, the content, privacy policies, or
            practices of any third-party websites or services.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">
            5. Intellectual Property
          </h2>
          <p>
            All content on this Website, including but not limited to text,
            graphics, logos, icons, images, and software, is the property of 50
            Best Limited or its content suppliers and is protected by
            international copyright, trademark, and other intellectual property
            laws.
          </p>
          <p className="mt-3">
            You may access and view the content on this Website for your
            personal, non-commercial use. You may not reproduce, distribute,
            modify, create derivative works from, publicly display, or otherwise
            exploit any content without our prior written consent.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">
            6. Disclaimer of Warranties
          </h2>
          <p>
            THE WEBSITE AND ALL CONTENT ARE PROVIDED &ldquo;AS IS&rdquo; AND
            &ldquo;AS AVAILABLE&rdquo; WITHOUT ANY WARRANTIES OF ANY KIND,
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT.
          </p>
          <p className="mt-3">
            We do not warrant that the Website will be uninterrupted, secure, or
            error-free, or that any defects will be corrected. We do not warrant
            the accuracy, completeness, or usefulness of any information on the
            Website.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">
            7. Limitation of Liability
          </h2>
          <p>
            TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
            SHALL 50 BEST LIMITED, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS,
            OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
            CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO
            LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES,
            ARISING FROM OR RELATED TO YOUR USE OF OR INABILITY TO USE THE
            WEBSITE.
          </p>
          <p className="mt-3">
            OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATED TO
            THE WEBSITE SHALL NOT EXCEED FIFTY US DOLLARS (USD $50.00).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">
            8. Indemnification
          </h2>
          <p>
            You agree to indemnify, defend, and hold harmless 50 Best Limited
            and its directors, officers, employees, agents, and affiliates from
            and against any and all claims, liabilities, damages, losses, costs,
            and expenses (including reasonable legal fees) arising out of or
            related to your use of the Website, your violation of these Terms,
            or your violation of any rights of a third party.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">
            9. Arbitration Agreement and Class Action Waiver
          </h2>
          <p>
            Any dispute, controversy, or claim arising out of or relating to
            these Terms or your use of the Website shall be settled by binding
            arbitration administered in Hong Kong in accordance with the rules of
            the Hong Kong International Arbitration Centre (HKIAC). The language
            of arbitration shall be English.
          </p>
          <p className="mt-3">
            YOU AND 50 BEST LIMITED AGREE THAT EACH MAY BRING CLAIMS AGAINST
            THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY, AND NOT AS A
            PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE
            PROCEEDING.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">
            10. Governing Law
          </h2>
          <p>
            These Terms shall be governed by and construed in accordance with the
            laws of Hong Kong Special Administrative Region, without regard to
            its conflict of law provisions.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">
            11. Severability
          </h2>
          <p>
            If any provision of these Terms is held to be invalid, illegal, or
            unenforceable, the remaining provisions shall continue in full force
            and effect. The invalid or unenforceable provision shall be modified
            to the minimum extent necessary to make it valid and enforceable.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">
            12. Changes to These Terms
          </h2>
          <p>
            We reserve the right to modify or replace these Terms at any time at
            our sole discretion. If a revision is material, we will make
            reasonable efforts to provide notice prior to any new terms taking
            effect. Your continued use of the Website after any changes
            constitutes acceptance of the new Terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">
            13. Contact Us
          </h2>
          <p>
            If you have any questions about these Terms, please contact us at:
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
