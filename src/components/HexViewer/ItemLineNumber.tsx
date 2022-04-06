import * as React from 'react';

import {Box, styled} from '@mui/material';

import {getLineNumberHex} from '../../helpers/hexHelper';

const ItemLineNumberWrapper = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    fontFamily: '"Courier new"',
    fontSize: '16px',
    padding: theme.spacing(0.5) + ' ' + theme.spacing(1),
    backgroundColor: theme.palette.grey[700],
    color: theme.palette.grey[100],
}));

interface IItemLineNumberProps {
    lineNumber?: number;
}

const DEFAULT_LINE_LENGTH = 10;

export const ItemLineNumber: React.FC<IItemLineNumberProps> = React.memo((props: IItemLineNumberProps) => {
    const lineNumber = props.lineNumber !== undefined ? getLineNumberHex(props.lineNumber, DEFAULT_LINE_LENGTH) : '';

    return (
        <ItemLineNumberWrapper>
            {lineNumber}
        </ItemLineNumberWrapper>
    );
});
