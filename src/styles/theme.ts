import { Roboto } from '@next/font/google';
import type { PaletteMode } from '@mui/material';
import {
  green,
  greenDark,
  mauve,
  mauveDark,
  orange,
  orangeDark,
  red,
  redDark,
} from '@radix-ui/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          common: {
            black: mauve.mauve12,
            white: mauve.mauve1,
          },
          primary: {
            main: mauve.mauve9,
          },
          secondary: {
            main: red.red9,
          },
          warning: {
            main: orange.orange9,
          },
          success: {
            main: green.green9,
          },
          text: {
            primary: mauve.mauve12,
            secondary: mauve.mauve11,
            disabled: mauve.mauve10,
          },
          divider: mauve.mauve6,
          background: {
            default: mauve.mauve1,
            paper: mauve.mauve1,
          },
        }
      : {
          // palette values for dark mode
          common: {
            black: mauveDark.mauve1,
            white: mauveDark.mauve12,
          },
          primary: {
            main: mauveDark.mauve9,
          },
          secondary: {
            main: redDark.red9,
          },
          warning: {
            main: orangeDark.orange9,
          },
          success: {
            main: greenDark.green9,
          },
          text: {
            primary: mauveDark.mauve12,
            secondary: mauveDark.mauve11,
            disabled: mauveDark.mauve10,
          },
          divider: mauveDark.mauve6,
          background: {
            default: mauveDark.mauve1,
            paper: mauveDark.mauve1,
          },
        }),
  },
});

export default getDesignTokens;
