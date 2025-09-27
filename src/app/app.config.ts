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
import card from '../../public/theme/card';
import { definePreset } from '@primeuix/themes';

const preset = definePreset(Aura, {
  components: {
    card,
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
        preset: preset,
        options: {
          darkModeSelector: '.dark-mode',
        },
      },
    }),
  ],
};
