import * as React from 'react';
import axios from 'axios';

interface IUseFileLoader {
    loadFromUrl: (url: string) => Promise<void>;
    loadFromFile: (file: File) => Promise<void>;
    isLoading: boolean;
    isError: boolean;
    resetError: () => void;
    resetFile: () => void;
    file: File | null,
}

export const useFileLoader = (): IUseFileLoader => {
    const [file, setFile] = React.useState<File | null>(null);
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
        }

        setIsLoading(false);
    };

    const loadFromFile = async (file: File): Promise<void> => {
        setIsLoading(true);

        setFile(file);

        setIsLoading(false);
    };

    const resetError = (): void => {
        setIsError(false);
    };

    const resetFile = (): void => {
        setFile(null);
    };

    return {
        loadFromUrl,
        loadFromFile,
        isLoading,
        isError,
        resetError,
        resetFile,
        file,
    };
};
