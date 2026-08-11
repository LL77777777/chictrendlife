import type { Metadata } from 'next';
import InfoPage from '../../components/InfoPage';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description: 'How affiliate links and commissions support Chic Trend Life.',
  alternates: { canonical: '/affiliate-disclosure' },
};

export default function AffiliateDisclosurePage() {
  return (
    <InfoPage
      eyebrow="Transparency"
      title="Affiliate Disclosure"
      description="Some links on Chic Trend Life are affiliate links. This page explains what that means for readers."
    >
      <section>
        <h2>How affiliate links work</h2>
        <p>
          If you follow an affiliate link and make a qualifying purchase, Chic Trend Life may receive a commission from the merchant or affiliate network. This normally does not increase the price you pay.
        </p>
      </section>
      <section>
        <h2>Redirects and attribution</h2>
        <p>
          Some links first pass through a Chic Trend Life URL and then redirect to a merchant or affiliate-network destination. This allows the referral to be attributed correctly. The final destination, offer, price, availability, and transaction are controlled by the relevant third party.
        </p>
      </section>
      <section>
        <h2>Our disclosure format</h2>
        <p>
          Articles containing affiliate links include a disclosure at the bottom of the article. Promotional or advertorial content may include additional wording describing the commercial relationship.
        </p>
      </section>
      <section>
        <h2>Questions</h2>
        <p>
          Questions about a commercial relationship can be sent to <a href="mailto:admin@chictrendlife.com">admin@chictrendlife.com</a>.
        </p>
      </section>
    </InfoPage>
  );
}
