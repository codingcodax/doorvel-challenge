import type { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import { DefaultSeo } from 'next-seo';
import type { EmotionCache } from '@emotion/react';
import { CacheProvider } from '@emotion/react';

import { Layout } from '~/components';
import createEmotionCache from '~/utils/createEmotionCache';
import { ColorModeProvider } from '~/contexts';

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
      <DefaultSeo {...SEO} />
      <ColorModeProvider>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ColorModeProvider>
    </CacheProvider>
  );
};

export default MyApp;
