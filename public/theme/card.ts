import {
  CardDesignTokens,
  CardTokenSections,
} from '@primeuix/themes/types/card';

export const root: CardTokenSections.Root = {
  borderRadius: '0.5rem',
  shadow: 'none',
};

export const body: CardTokenSections.Body = {
  padding: '1rem',
};

export default {
  root,
  body,
} satisfies CardDesignTokens;
