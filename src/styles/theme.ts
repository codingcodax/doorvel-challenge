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
  violet,
  violetDark,
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
            main: violet.violet9,
          },
          error: {
            main: red.red9,
          },
          warning: {
            main: orange.orange9,
          },
          success: {
            main: green.green9,
          },
          divider: mauve.mauve6,

          background: {
            default: mauve.mauve1,
            paper: mauve.mauve1,
            subtle: mauve.mauve2,
          },
          componentBackground: {
            default: mauve.mauve3,
            hover: mauve.mauve4,
            active: mauve.mauve5,
          },
          border: {
            disable: mauve.mauve6,
            default: mauve.mauve7,
            hover: mauve.mauve8,
          },
          solidBackground: {
            default: violet.violet9,
            hover: violet.violet10,
          },
          text: {
            primary: mauve.mauve12,
            secondary: mauve.mauve11,
            disabled: mauve.mauve10,
          },
        }
      : {
          // palette values for dark mode
          common: {
            black: mauveDark.mauve1,
            white: mauveDark.mauve12,
          },
          primary: {
            main: violetDark.violet9,
          },
          error: {
            main: redDark.red9,
          },
          warning: {
            main: orangeDark.orange9,
          },
          success: {
            main: greenDark.green9,
          },
          divider: mauveDark.mauve6,

          background: {
            default: mauveDark.mauve1,
            paper: mauveDark.mauve1,
            subtle: mauveDark.mauve2,
          },
          componentBackground: {
            default: mauveDark.mauve3,
            hover: mauveDark.mauve4,
            active: mauveDark.mauve5,
          },
          border: {
            disable: mauveDark.mauve6,
            default: mauveDark.mauve7,
            hover: mauveDark.mauve8,
          },
          solidBackground: {
            default: violetDark.violet9,
            hover: violetDark.violet10,
          },
          text: {
            primary: mauveDark.mauve12,
            secondary: mauveDark.mauve11,
            disabled: mauveDark.mauve10,
          },
        }),
  },
});

export default getDesignTokens;
