import type { Metadata } from 'next';
import InfoPage from '../../components/InfoPage';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Chic Trend Life handles information when readers visit the site, contact us, or follow external links.',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <InfoPage
      eyebrow="Effective August 11, 2026"
      title="Privacy Policy"
      description="This policy explains what information may be processed when you use chictrendlife.com and the choices available to you."
    >
      <section>
        <h2>Information we receive</h2>
        <p>
          You may browse the site without creating an account. If you email us, we receive the information included in your message, such as your email address, name, and correspondence.
        </p>
        <p>
          Our hosting and security providers may automatically process technical information such as IP address, browser type, device information, requested pages, timestamps, and security events to deliver and protect the site.
        </p>
      </section>
      <section>
        <h2>How information is used</h2>
        <ul>
          <li>To operate, secure, and troubleshoot the website.</li>
          <li>To respond to messages, correction requests, and commercial enquiries.</li>
          <li>To understand aggregate site performance where analytics are enabled.</li>
          <li>To comply with legal obligations and enforce our terms.</li>
        </ul>
      </section>
      <section>
        <h2>Affiliate links and external websites</h2>
        <p>
          Some links redirect to merchants or affiliate networks. Those third parties may use cookies, identifiers, or similar technologies to attribute a visit or purchase. Their processing is governed by their own privacy policies, not this policy.
        </p>
      </section>
      <section>
        <h2>Retention and disclosure</h2>
        <p>
          Correspondence is kept only as long as reasonably needed for the purpose for which it was received, recordkeeping, dispute resolution, or legal compliance. Information may be processed by service providers that host, secure, or support the site, and may be disclosed when required by law.
        </p>
      </section>
      <section>
        <h2>Your choices</h2>
        <p>
          Depending on where you live, you may have rights to request access, correction, deletion, or restriction of certain personal information. Contact us at <a href="mailto:admin@chictrendlife.com">admin@chictrendlife.com</a>. We may need to verify a request before responding.
        </p>
      </section>
      <section>
        <h2>Children and updates</h2>
        <p>
          The site is intended for a general audience and is not directed to children under 13. We may update this policy when our practices or services change; the effective date above will be revised when that happens.
        </p>
      </section>
    </InfoPage>
  );
}
