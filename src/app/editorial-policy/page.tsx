import type { Metadata } from 'next';
import InfoPage from '../../components/InfoPage';

export const metadata: Metadata = {
  title: 'Editorial Policy',
  description: 'The principles Chic Trend Life uses when researching, publishing, correcting, and funding editorial content.',
  alternates: { canonical: '/editorial-policy' },
};

export default function EditorialPolicyPage() {
  return (
    <InfoPage
      eyebrow="Our standards"
      title="Editorial Policy"
      description="These principles guide how Chic Trend Life selects topics, presents recommendations, and handles corrections."
    >
      <section>
        <h2>Selection and research</h2>
        <p>
          We focus on products and trends that may be useful or interesting to our audience. Articles may draw on product documentation, merchant information, public sources, and direct experience where expressly stated.
        </p>
      </section>
      <section>
        <h2>Commercial relationships</h2>
        <p>
          Some articles contain affiliate links or are promotional reports. Commercial relationships help fund the site and are disclosed on relevant pages. A commission does not change the price paid by the reader.
        </p>
      </section>
      <section>
        <h2>Changing information</h2>
        <p>
          Prices, specifications, rankings, availability, and promotions can change. Readers should verify time-sensitive information with the relevant merchant before acting on it.
        </p>
      </section>
      <section>
        <h2>Corrections</h2>
        <p>
          We welcome specific correction requests. Email <a href="mailto:admin@chictrendlife.com?subject=Correction%20request">admin@chictrendlife.com</a> with the page URL, the statement in question, and supporting information. Material corrections may result in an updated page date or explanatory note.
        </p>
      </section>
    </InfoPage>
  );
}
