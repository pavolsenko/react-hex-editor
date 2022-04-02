import * as en from '../i18n/en.json';
import * as sk from '../i18n/sk.json';

export interface ILocale {
    title: string;
    value: string;
}

export const defaultLocale: string = 'en';

export const availableLocales: ILocale[] = [
    {
        title: 'English',
        value: 'en',
    },
    {
        title: 'Slovensky',
        value: 'sk',
    },
];

export const messages: Record<string, Record<string, string>> = {
    en,
    sk,
};
