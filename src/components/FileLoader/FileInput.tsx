import * as React from 'react';
import {Button, Container, styled, TextField} from '@mui/material';
import {FormattedMessage, useIntl} from 'react-intl';

const InputWrapper = styled(Container)(({theme}) => ({
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
    '&>*': {
        margin: theme.spacing(1),
    }
}));

interface IFileInputProps {
    loadFromUrl: (url: string) => Promise<void>;
}

export const FileInput: React.FC<IFileInputProps> = (props: IFileInputProps) => {
    const intl = useIntl();
    const [inputValue, setInputValue] = React.useState<string>('');

    return (
        <InputWrapper>
            <TextField
                fullWidth
                label={intl.formatMessage({id: 'Url'})}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)}
                variant='outlined'
            />

            <Button
                onClick={() => props.loadFromUrl(inputValue)}
                size={'large'}
                variant={'contained'}
            >
                <FormattedMessage id={'Submit'}/>
            </Button>
        </InputWrapper>
    );
};
