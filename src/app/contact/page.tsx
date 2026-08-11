import type { Metadata } from 'next';
import InfoPage from '../../components/InfoPage';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Chic Trend Life with reader questions, corrections, or partnership enquiries.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <InfoPage
      eyebrow="Contact"
      title="We would like to hear from you"
      description="Use the email address below for reader questions, corrections, and commercial enquiries."
    >
      <section>
        <h2>General enquiries and corrections</h2>
        <p><a href="mailto:admin@chictrendlife.com">admin@chictrendlife.com</a></p>
      </section>
      <section>
        <h2>Partnerships</h2>
        <p><a href="mailto:admin@chictrendlife.com?subject=Partnership%20enquiry">admin@chictrendlife.com</a></p>
        <p>Please include the brand, campaign dates, target market, and proposed arrangement.</p>
      </section>
      <section>
        <h2>Response and privacy</h2>
        <p>
          We use the information you provide only to respond to your message and manage the related correspondence. Please do not email sensitive personal or payment information.
        </p>
      </section>
    </InfoPage>
  );
}
