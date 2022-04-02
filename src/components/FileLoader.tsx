import * as React from 'react';

import {CircularProgress} from '@mui/material';

export interface IFileLoaderProps {
    file: File | null;
    isError: boolean;
    isLoading: boolean;
    resetError: () => void;
    resetFile: () => void;
}

export const FileLoader: React.FC<IFileLoaderProps> = (props: IFileLoaderProps) => {

    const renderLoading = (): React.ReactNode => {
        if (!props.isLoading) {
            return null;
        }

        return (
            <CircularProgress/>
        );
    }

    if (props.isError) {
        return (
            <></>
        );
    }

    return (
        <>
            {renderLoading()}
            loading files
        </>
    );
}
