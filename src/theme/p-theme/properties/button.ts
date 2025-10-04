import {
  ButtonDesignTokens,
  ButtonTokenSections,
} from '@primeuix/themes/types/button';

export const root: ButtonTokenSections.Root = {
  focusRing: {
    width: '0',
  },
};

export const colorScheme: ButtonTokenSections.ColorScheme = {
  light: {
    outlined: {
      primary: {
        borderColor: 'black',
        color: 'black',
        hoverBackground: 'oklch(0.94 0 0)',
        activeBackground: 'oklch(0.94 0 0)',
      },
    },
  },
};

export default {
  root,
  colorScheme,
} satisfies ButtonDesignTokens;
