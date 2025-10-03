import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import Aura from '@primeuix/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { definePreset } from '@primeuix/themes';
import card from '../theme/p-theme/properties/card';
import button from '../theme/p-theme/properties/button';
import chip from '../theme/p-theme/properties/chip';

const preset = definePreset(Aura, {
  components: {
    card,
    button,
    chip
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    providePrimeNG({
      theme: {
        preset,
        options: {
          darkModeSelector: '.dark-mode',
        },
      },
    }),
  ],
};
