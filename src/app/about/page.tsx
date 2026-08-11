import type { Metadata } from 'next';
import InfoPage from '../../components/InfoPage';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Chic Trend Life, our coverage, and how we approach lifestyle recommendations.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <InfoPage
      eyebrow="About us"
      title="A considered edit of modern life"
      description="Chic Trend Life publishes accessible guides to products and ideas across beauty, travel, technology, and everyday living."
    >
      <section>
        <h2>What we publish</h2>
        <p>
          Our articles are designed to help readers understand products, compare options, and discover trends without having to sort through every release themselves.
        </p>
      </section>
      <section>
        <h2>How the site is funded</h2>
        <p>
          Some pages contain affiliate links. If a reader follows one of these links and makes a qualifying purchase, Chic Trend Life may receive a commission without changing the price paid by the reader.
        </p>
        <p>
          Read our <a href="/affiliate-disclosure">Affiliate Disclosure</a> and <a href="/editorial-policy">Editorial Policy</a> for more detail.
        </p>
      </section>
      <section>
        <h2>Get in touch</h2>
        <p>
          Questions, corrections, and partnership enquiries can be sent through our <a href="/contact">contact page</a>.
        </p>
      </section>
    </InfoPage>
  );
}
