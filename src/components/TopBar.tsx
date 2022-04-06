import * as React from 'react';
import {FormattedMessage} from 'react-intl';

import {
    AppBar,
    Box,
    Typography,
    Toolbar,
} from '@mui/material';

import {ILocale} from '../config/localeConfig';
import {LanguageSelector} from './LanguageSelector';

export interface ITopBarProps {
    locale: string;
    availableLocales: ILocale[];
    onLocaleChange: (locale: string) => void;
}

export const TopBar: React.FC<ITopBarProps> = (props: ITopBarProps) => {
    return (
        <AppBar elevation={0}>
            <Toolbar>
                <Typography
                    variant='h6'
                    noWrap
                    component='div'
                >
                    <FormattedMessage id={'React HEX Viewer'} />
                </Typography>

                <Box sx={{flexGrow: 1}} />

                <Box>
                    <LanguageSelector
                        availableLocales={props.availableLocales}
                        locale={props.locale}
                        onLocaleChange={props.onLocaleChange}
                    />
                </Box>
            </Toolbar>
        </AppBar>
    );
};
