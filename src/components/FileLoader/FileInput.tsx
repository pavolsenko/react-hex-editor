import * as React from 'react';
import {Button, Container, styled, TextField} from '@mui/material';
import {FormattedMessage, useIntl} from 'react-intl';

const InputWrapper = styled(Container)(({theme}) => ({
    marginTop: theme.spacing(2),
    textAlign: 'center',
}));

interface IFileInputProps {
    loadFromUrl: (url: string) => Promise<void>;
}

export const FileInput: React.FC<IFileInputProps> = (props: IFileInputProps) => {
    const intl = useIntl();
    const [inputValue, setInputValue] = React.useState<string>('');

    return (
        <>
            <InputWrapper>
                <TextField
                    fullWidth
                    label={intl.formatMessage({id: 'Url'})}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)}
                    variant='outlined'
                />
            </InputWrapper>

            <InputWrapper>
                <Button
                    onClick={() => props.loadFromUrl(inputValue)}
                    size={'large'}
                    variant={'contained'}
                >
                    <FormattedMessage id={'Submit'}/>
                </Button>
            </InputWrapper>
        </>
    );
};
