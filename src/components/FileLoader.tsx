import * as React from 'react';
import {FormattedMessage, useIntl} from 'react-intl';
import {useDropzone} from 'react-dropzone';

import {Box, Button, Container, Paper, styled, TextField, Typography} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import {Loading} from './Loading';

export interface IFileLoaderProps {
    isError: boolean;
    isLoading: boolean;
    resetError: () => void;
    loadFromUrl: (url: string) => Promise<void>;
    loadFromFile: (file: File) => Promise<void>;
}

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

export const FileLoader: React.FC<IFileLoaderProps> = (props: IFileLoaderProps) => {
    const intl = useIntl();
    const loadFromFile = props.loadFromFile;

    const onDrop = React.useCallback(async (acceptedFiles: File[]): Promise<void> => {
        if (acceptedFiles.length > 1) {
            return;
        }

        await loadFromFile(acceptedFiles[0]);
    }, [loadFromFile]);

    const {getRootProps, getInputProps} = useDropzone({onDrop})

    const renderLoading = (): React.ReactNode => {
        if (!props.isLoading) {
            return null;
        }

        return (
            <Loading/>
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

                    <TextField
                        label={intl.formatMessage({id: 'Url'})}
                        variant='outlined'
                    />

                    <Box>
                        <Button
                            size={'large'}
                            variant={'contained'}
                        >
                            <FormattedMessage id={'Submit'}/>
                        </Button>
                    </Box>
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
            {renderContent()}
        </ContainerWrapper>
    );
};
