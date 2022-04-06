import * as React from 'react';
import axios from 'axios';

import {convertFileDataToArray} from '../helpers/fileHelper';

interface IUseFileLoader {
    data: Uint8Array;
    file?: File,
    isError: boolean;
    isLoading: boolean;
    loadFromUrl: (url: string) => Promise<void>;
    loadFromFile: (file: File) => Promise<void>;
    resetError: () => void;
    resetFile: () => void;
}

export const useFileLoader = (): IUseFileLoader => {
    const [file, setFile] = React.useState<File | undefined>();
    const [data, setData] = React.useState<Uint8Array>(new Uint8Array([]));
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [isError, setIsError] = React.useState<boolean>(false);

    const loadFromUrl = async (url: string): Promise<void> => {
        if (!url) {
            return;
        }

        resetError();
        setIsLoading(true);

        let result;
        try {
            result = await axios.get(url);
        } catch (error) {
            console.warn(error);
            resetFile();
            setIsError(true);
            setIsLoading(false);
            return;
        }

        if (result.data) {
            setFile(new File([], url.substring(url.lastIndexOf('/') + 1)));
            setData(convertFileDataToArray(result.data));
        }

        setIsLoading(false);
    };

    const loadFromFile = async (file: File): Promise<void> => {
        setIsLoading(true);
        setFile(file);
        await loadFileData(file);
        setIsLoading(false);
    };

    const loadFileData = async (file: File): Promise<void> => {
        const reader = new FileReader()

        reader.onabort = () => setIsError(true);
        reader.onerror = () => setIsError(true);
        reader.onloadstart = () => setIsLoading(true);
        reader.onloadend = () => setIsLoading(false);

        reader.onload = async (event: ProgressEvent<FileReader>): Promise<void> => {
            if (event.target?.result) {
                setData(
                    convertFileDataToArray(event.target.result),
                );
            }
        };
        reader.readAsArrayBuffer(file);
    };

    const resetError = React.useCallback((): void => {
        setIsError(false);
    }, []);

    const resetFile = React.useCallback((): void => {
        setFile(undefined);
        setData(new Uint8Array([]));
    }, []);

    return {
        data,
        isError,
        isLoading,
        file,
        loadFromFile,
        loadFromUrl,
        resetError,
        resetFile,
    };
};
