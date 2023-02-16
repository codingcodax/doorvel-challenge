import type { DefaultSeoProps } from 'next-seo';

const title = 'Cat Amenities';
export const description = 'Cat amenities website for doolver challenge';
export const domain = 'doolver-challenge.vercel.app';

const SEO: DefaultSeoProps = {
  title,
  description,
  canonical: domain,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: domain,
    title,
    description,
    siteName: 'title',
    images: [
      {
        url: '/images/og.png',
        alt: 'title',
        width: 1200,
        height: 675,
      },
    ],
  },
  twitter: {
    handle: '@codingcodax',
    site: '@codingcodax',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'msapplication-TileColor',
      content: '#0e0e11',
    },
    {
      name: 'theme-color',
      content: '#0e0e11',
    },
    {
      name: 'keywords',
      content: 'cat amenities, doover challenge',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/favicons/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicons/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicons/favicon-16x16.png',
    },
    {
      rel: 'icon',
      href: '/favicons/favicon.ico',
    },
    {
      rel: 'manifest',
      href: '/favicons/site.manifest',
    },
    {
      rel: 'mask-icon',
      href: '/favicons/safari-pinned-tab.svg',
      color: '#0e0e11',
    },
  ],
};

export default SEO;
