import type { Metadata } from 'next';

export const SITE_NAME = 'Chic Trend Life';
export const SITE_URL = 'https://chictrendlife.com';
export const SITE_DESCRIPTION =
  'Independent lifestyle guides covering beauty, travel, technology, and modern living.';

type ArticleMetadataInput = {
  slug: string;
  title: string;
  description: string;
  image: string;
  publishedTime: string;
  modifiedTime?: string;
  locale?: string;
};

export function createArticleMetadata({
  slug,
  title,
  description,
  image,
  publishedTime,
  modifiedTime = publishedTime,
  locale = 'en_US',
}: ArticleMetadataInput): Metadata {
  const path = `/posts/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: 'article',
      url: path,
      siteName: SITE_NAME,
      title,
      description,
      locale,
      publishedTime,
      modifiedTime,
      images: [
        {
          url: image,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

type ArticleStructuredDataProps = ArticleMetadataInput;

export function ArticleStructuredData({
  slug,
  title,
  description,
  image,
  publishedTime,
  modifiedTime = publishedTime,
}: ArticleStructuredDataProps) {
  const articleUrl = `${SITE_URL}/posts/${slug}`;
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: [imageUrl],
    datePublished: publishedTime,
    dateModified: modifiedTime,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    author: {
      '@type': 'Organization',
      name: `${SITE_NAME} Editorial Team`,
      url: `${SITE_URL}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/android-chrome-512x512.png`,
      },
    },
    isAccessibleForFree: true,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
      }}
    />
  );
}
