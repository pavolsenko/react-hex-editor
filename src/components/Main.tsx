import * as React from 'react';

import {Box, styled} from '@mui/material';

import {ILocale} from '../config/localeConfig';
import {useFileLoader} from '../hooks/useFileLoader';
import {TopBar} from './TopBar';
import {FileLoader} from './FileLoader/FileLoader';
import {HexViewer} from './HexViewer/HexViewer';

interface IMainProps {
    locale: string;
    availableLocales: ILocale[];
    setLocale: (locale: string) => void;
}

const ContentWrapper = styled(Box)(({theme}) => ({
    display: 'flex',
    marginTop: theme.spacing(8),
    width: '100%',
}));

export const Main: React.FC<IMainProps> = (props: IMainProps) => {
    const {
        data,
        file,
        isError,
        isLoading,
        loadFromFile,
        loadFromUrl,
        resetError,
        resetFile,
    } = useFileLoader();

    const renderFileLoader = (): React.ReactNode => {
        if (file) {
            return null;
        }

        return (
            <FileLoader
                isError={isError}
                isLoading={isLoading}
                loadFromFile={loadFromFile}
                loadFromUrl={loadFromUrl}
                resetError={resetError}
            />
        );
    };

    const renderHexViewer = (): React.ReactNode => {
        if (!file) {
            return null;
        }

        return (
            <HexViewer
                data={data}
                isError={isError}
                isLoading={isLoading}
                file={file}
                onFileReset={resetFile}
            />
        );
    };

    return (
        <>
            <TopBar
                locale={props.locale}
                availableLocales={props.availableLocales}
                onLocaleChange={props.setLocale}
            />
            <ContentWrapper>
                {renderFileLoader()}
                {renderHexViewer()}
            </ContentWrapper>
        </>
    );
};
