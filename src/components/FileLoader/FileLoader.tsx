import * as React from 'react';
import {FormattedMessage} from 'react-intl';
import {useDropzone} from 'react-dropzone';

import {Alert, Box, Container, Paper, styled, Typography} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import {Loading} from '../Loading';
import {FileList} from './FileList';
import {FileInput} from './FileInput';

const ContainerWrapper = styled(Container)(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: theme.spacing(10),
}));

const PaperWrapper = styled(Paper)(({theme}) => ({
    margin: theme.spacing(4),
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}));

const DragAndDropBox = styled(Box)(() => ({
    height: '20vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
}));

export interface IFileLoaderProps {
    isError: boolean;
    isLoading: boolean;
    resetError: () => void;
    loadFromUrl: (url: string) => Promise<void>;
    loadFromFile: (file: File) => Promise<void>;
}

export const FileLoader: React.FC<IFileLoaderProps> = (props: IFileLoaderProps) => {
    const loadFromFile = props.loadFromFile;

    const onDrop = React.useCallback(async (acceptedFiles: File[]): Promise<void> => {
        if (acceptedFiles.length > 1) {
            return;
        }

        await loadFromFile(acceptedFiles[0]);
    }, [loadFromFile]);

    const {getRootProps, getInputProps} = useDropzone({onDrop});

    const renderLoading = (): React.ReactNode => {
        if (!props.isLoading) {
            return null;
        }

        return (
            <Loading/>
        );
    }

    const renderError = (): React.ReactNode => {
        if (!props.isError) {
            return null;
        }

        return (
            <Alert severity='error'>
                <FormattedMessage id={'Sorry, something went wrong'}/>
            </Alert>

        );
    }

    const renderContent = (): React.ReactNode => {
        if (props.isLoading) {
            return null;
        }

        return (
            <>
                <PaperWrapper>
                    <Typography
                        variant={'h4'}
                        component={'h2'}
                    >
                        <FormattedMessage id={'Load file from an URL'}/>
                    </Typography>

                    <FileInput loadFromUrl={props.loadFromUrl}/>
                    <FileList loadFromUrl={props.loadFromUrl}/>
                </PaperWrapper>

                <PaperWrapper {...getRootProps()}>
                    <input
                        {...getInputProps()}
                    />

                    <Typography
                        variant={'h4'}
                        component={'h2'}
                    >
                        <FormattedMessage id={'Drag and drop a file'}/>
                    </Typography>

                    <DragAndDropBox>
                        <CloudUploadIcon fontSize={'large'}/>
                    </DragAndDropBox>
                </PaperWrapper>
            </>
        );
    };

    return (
        <ContainerWrapper maxWidth={'md'}>
            {renderLoading()}
            {renderError()}
            {renderContent()}
        </ContainerWrapper>
    );
};
