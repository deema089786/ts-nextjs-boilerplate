import NextI18Next from 'next-i18next';

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'ua',
  otherLanguages: ['ru', 'en'],
  localeSubpaths: {
    en: 'en',
    ru: 'ru',
    ua: 'ua',
  },
});

export default NextI18NextInstance;

/* Optionally, export class methods as named exports */
export const {
  appWithTranslation,
  withTranslation,
  useTranslation,
  Link,
  Router,
  Trans,
  initPromise,
} = NextI18NextInstance;
