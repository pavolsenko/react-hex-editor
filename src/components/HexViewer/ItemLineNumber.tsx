import * as React from 'react';

import {Box, styled} from '@mui/material';

import {getLineNumberHex} from '../../helpers/hexHelper';

const ItemLineNumberWrapper = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: '"Courier new"',
    fontSize: '16px',
    padding: theme.spacing(0.5),
    width: '120px',
    backgroundColor: theme.palette.grey[700],
    color: theme.palette.grey[100],
}));

interface IItemLineNumberProps {
    lineNumber?: number;
}

export const ItemLineNumber: React.FC<IItemLineNumberProps> = React.memo((props: IItemLineNumberProps) => {
    const lineNumber = props.lineNumber !== undefined ? getLineNumberHex(props.lineNumber) : '';

    return (
        <ItemLineNumberWrapper>
            {lineNumber}
        </ItemLineNumberWrapper>
    );
});
