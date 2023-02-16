import type { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import { DefaultSeo } from 'next-seo';

import { Layout } from '~/components';

import SEO from 'next-seo.config';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style global jsx>{`
        #__next {
          min-height: 100vh;
          display: grid;
          grid-template-rows: auto 1fr auto;
        }
      `}</style>
      <DefaultSeo {...SEO} />
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
