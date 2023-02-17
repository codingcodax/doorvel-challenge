import { NextSeo } from 'next-seo';

import { domain } from 'next-seo.config';

type Props = {
  name: string;
  path: string;
  description: string;
  keywords: string;
  ogImage: string;
};

const Seo = ({ name, path, description, keywords, ogImage }: Props) => {
  const title = `${name} | Doorver Challenge`;
  const url = `${domain}${path}`;

  return (
    <NextSeo
      additionalMetaTags={[{ name: 'keywords', content: keywords }]}
      canonical={url}
      description={description}
      openGraph={{
        url,
        title,
        description,
        images: [{ url: ogImage, alt: title }],
      }}
      title={title}
    />
  );
};

export default Seo;
