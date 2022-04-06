import * as React from 'react';

import {Box, styled} from '@mui/material';

import {getArrayOfHexNumbers} from '../../helpers/hexHelper';
import {ItemLineNumber} from './ItemLineNumber';
import {HeaderItem} from './HeaderItem';

const Wrapper = styled(Box)(({theme}) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(17, 1fr)',
    backgroundColor: theme.palette.grey[700],
    color: theme.palette.grey[100],
    height: '36px',
}));

export const Header: React.FC = React.memo(() => {
    const numbers = getArrayOfHexNumbers();

    return (
        <Wrapper>
            <ItemLineNumber/>
            {numbers.map((hexNumber: string): React.ReactNode => {
                return (
                    <HeaderItem
                        key={'header-' + hexNumber}
                        value={hexNumber}
                    />
                );
            })}
        </Wrapper>
    );
});
