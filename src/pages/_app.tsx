import type { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';

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
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
