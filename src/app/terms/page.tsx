import type { Metadata } from 'next';
import InfoPage from '../../components/InfoPage';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms governing access to and use of Chic Trend Life.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <InfoPage
      eyebrow="Effective August 11, 2026"
      title="Terms of Use"
      description="By using chictrendlife.com, you agree to these terms. If you do not agree, please do not use the site."
    >
      <section>
        <h2>Informational content</h2>
        <p>
          Content is provided for general informational and editorial purposes. It is not medical, legal, financial, or other professional advice. Product specifications, prices, availability, promotions, and merchant terms can change and should be confirmed with the seller before a purchase.
        </p>
      </section>
      <section>
        <h2>Affiliate relationships</h2>
        <p>
          Chic Trend Life may earn commissions from qualifying purchases made through certain links. See our <a href="/affiliate-disclosure">Affiliate Disclosure</a> for details.
        </p>
      </section>
      <section>
        <h2>External websites</h2>
        <p>
          We do not control third-party merchants, affiliate networks, delivery services, prices, products, warranties, or privacy practices. A link does not guarantee that a product, promotion, or destination will remain available.
        </p>
      </section>
      <section>
        <h2>Permitted use</h2>
        <p>
          You may use the site for lawful, personal purposes. You may not interfere with its operation, attempt unauthorized access, distribute malicious code, or reproduce substantial portions of the site without permission.
        </p>
      </section>
      <section>
        <h2>Availability and liability</h2>
        <p>
          The site is provided on an “as available” basis. To the extent permitted by applicable law, Chic Trend Life disclaims implied warranties and is not responsible for indirect or consequential loss arising from use of the site or a third-party product or service.
        </p>
      </section>
      <section>
        <h2>Changes and contact</h2>
        <p>
          These terms may be updated from time to time. Questions can be sent to <a href="mailto:admin@chictrendlife.com">admin@chictrendlife.com</a>.
        </p>
      </section>
    </InfoPage>
  );
}
