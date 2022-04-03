import * as React from 'react';
import {IntlProvider} from 'react-intl';

import {CssBaseline, ThemeProvider} from '@mui/material';
import '@fontsource/roboto';
import '@fontsource/press-start-2p';

import {useLocale} from './hooks/useLocale';
import {Main} from './components/Main';
import {themeConfig} from './config/themeConfig';
export const App = () => {
    const {
        locale,
        availableLocales,
        defaultLocale,
        setLocale,
        getMessages,
    } = useLocale();

    return (
        <IntlProvider
            messages={getMessages()}
            locale={locale}
            defaultLocale={defaultLocale}
        >
            <ThemeProvider theme={themeConfig}>
                <CssBaseline />
                <Main
                    availableLocales={availableLocales}
                    locale={locale}
                    setLocale={setLocale}
                />
            </ThemeProvider>
        </IntlProvider>
    );
};
