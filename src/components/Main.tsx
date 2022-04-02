import * as React from 'react';

import {TopBar} from './TopBar';
import {ILocale} from '../config/localeConfig';
import {FileLoader} from './FileLoader';
import {HexViewer} from './HexViewer';
import {useFileLoader} from '../hooks/useFileLoader';

interface IMainProps {
    locale: string;
    availableLocales: ILocale[];
    setLocale: (locale: string) => void;
}

export const Main: React.FC<IMainProps> = (props: IMainProps) => {
    const {
        file,
        isError,
        isLoading,
        resetError,
        resetFile,
    } = useFileLoader();

    return (
        <>
            <TopBar
                locale={props.locale}
                availableLocales={props.availableLocales}
                onLocaleChange={props.setLocale}
            />
            <FileLoader
                file={file}
                isError={isError}
                isLoading={isLoading}
                resetError={resetError}
                resetFile={resetFile}
            />
            <HexViewer file={file} />
        </>
    );
};
