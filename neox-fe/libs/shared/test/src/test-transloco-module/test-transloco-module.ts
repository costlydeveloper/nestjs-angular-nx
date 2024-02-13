import {
  TranslocoTestingModule,
  TranslocoTestingOptions,
} from '@ngneat/transloco';
import { KeyValuePairs } from '@team-link/utils';

export function getTestTranslocoModule(
  langStrings: KeyValuePairs<string> = {},
  options: TranslocoTestingOptions = {}
) {
  return TranslocoTestingModule.forRoot({
    langs: {
      en: {
        ...langStrings,
      },
    },
    translocoConfig: {
      availableLangs: ['en'],
      defaultLang: 'en',
    },
    preloadLangs: true,
    ...options,
  });
}
