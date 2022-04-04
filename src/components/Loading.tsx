import * as React from 'react';

import {Box, CircularProgress, styled} from '@mui/material';

const LoadingWrapper = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(15),
}));

export const Loading: React.FC = () => {
    return (
        <LoadingWrapper>
            <CircularProgress disableShrink/>
        </LoadingWrapper>
    );
};
