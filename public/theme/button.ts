import {
  ButtonDesignTokens,
  ButtonTokenSections,
} from '@primeuix/themes/types/button';

export const colorScheme: ButtonTokenSections.ColorScheme = {
  light: {
    outlined: {
      primary: {
        borderColor: 'black',
        color: 'black',
        hoverBackground: 'transparent',
        activeBackground: 'transparent',
      },
    },
  },
  dark: {
    outlined: {
      primary: {
        borderColor: 'white',
        color: 'white',
      },
    },
  },
};

export default {
  colorScheme,
} satisfies ButtonDesignTokens;
