import * as React from 'react';
import axios from 'axios';
import {convertFileDataToArray} from '../helpers/string';

interface IUseFileLoader {
    data: Uint8Array;
    file: File | null,
    isError: boolean;
    isLoading: boolean;
    loadFromUrl: (url: string) => Promise<void>;
    loadFromFile: (file: File) => Promise<void>;
    resetError: () => void;
    resetFile: () => void;
}

export const useFileLoader = (): IUseFileLoader => {
    const [file, setFile] = React.useState<File | null>(null);
    const [data, setData] = React.useState<Uint8Array>(new Uint8Array([]));
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [isError, setIsError] = React.useState<boolean>(false);

    const loadFromUrl = async (url: string): Promise<void> => {
        resetError();
        setIsLoading(true);

        let result;
        try {
            result = await axios.get(url);
        } catch (error) {
            console.warn(error);
            resetFile()
            setIsError(true);
            setIsLoading(false);
            return;
        }


        if (result.data) {
            setFile(result.data);
            await loadFileData(result.data)
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
        reader.onload = async (event: ProgressEvent<FileReader>): Promise<void> => {
           if (event.target?.result) {
               setData(
                   convertFileDataToArray(event.target.result)
               );
           }
        };
        reader.readAsArrayBuffer(file);
    }

    const resetError = (): void => {
        setIsError(false);
    };

    const resetFile = (): void => {
        setFile(null);
    };

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
