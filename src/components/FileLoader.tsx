import * as React from 'react';
import {FormattedMessage, useIntl} from 'react-intl';

import {Button, Container, Paper, styled, TextField, Typography} from '@mui/material';

import {Loading} from './Loading';
import {useDropzone} from 'react-dropzone';

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
    marginTop: theme.spacing(15),
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
                <Paper>
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

                    <Button
                        size={'large'}
                        variant={'contained'}
                    >
                        <FormattedMessage id={'Submit'}/>
                    </Button>
                </Paper>

                <Paper {...getRootProps()}>
                    <input
                        {...getInputProps()}
                    />
                    <Typography
                        variant={'h4'}
                        component={'h2'}
                    >
                        <FormattedMessage id={'Drag and drop a file'}/>
                    </Typography>
                </Paper>
            </>
        );
    };

    return (
        <ContainerWrapper>
            {renderLoading()}
            {renderContent()}
        </ContainerWrapper>
    );
};
