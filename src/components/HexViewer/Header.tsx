import * as React from 'react';

import {Box, styled} from '@mui/material';

import {generateArrayOfHexNumbers} from '../../helpers/hexHelper';
import {Item} from './Item';
import {ItemLineNumber} from './ItemLineNumber';

const Wrapper = styled(Box)(({theme}) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(17, 1fr)',
    backgroundColor: theme.palette.grey[700],
    color: theme.palette.grey[100],
    height: '36px',
}));

export const Header: React.FC = () => {
    const numbers = generateArrayOfHexNumbers();

    return (
        <Wrapper>
            <ItemLineNumber/>
            {numbers.map((hexNumber: string): React.ReactNode => {
                return (
                    <Item
                        key={'header-' + hexNumber}
                        value={hexNumber}
                    />
                );
            })}
        </Wrapper>
    );
};
