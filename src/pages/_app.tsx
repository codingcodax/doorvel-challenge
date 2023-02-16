import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { DefaultSeo } from 'next-seo';
import type { EmotionCache } from '@emotion/react';
import { CacheProvider } from '@emotion/react';

import { Layout } from '~/components';
import theme from '~/styles/theme';
import createEmotionCache from '~/utils/createEmotionCache';

import SEO from 'next-seo.config';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) => {
  return (
    <CacheProvider value={emotionCache}>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style global jsx>{`
        #__next {
          min-height: 100vh;
          display: grid;
          grid-template-rows: auto 1fr auto;
        }
      `}</style>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
