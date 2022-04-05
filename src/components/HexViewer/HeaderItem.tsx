import * as React from 'react';

import {Box, styled} from '@mui/material';

const ItemWrapper = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: '"Courier new"',
    fontSize: '16px',
    margin: theme.spacing(0.5),
    cursor: 'pointer',
}));

interface IItemProps {
    value: string;
}

export const HeaderItem: React.FC<IItemProps> = (props: IItemProps) => {
    return (
        <ItemWrapper>
            {props.value}
        </ItemWrapper>
    );
};
