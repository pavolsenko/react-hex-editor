import * as React from 'react';

import {Box, styled} from '@mui/material';

const ItemWrapper = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: '"Courier new"',
    fontSize: '16px',
    margin: theme.spacing(0.5),
}));

interface IItemProps {
    value: string;
}

export const Item: React.FC<IItemProps> = (props: IItemProps) => {
    return (
        <ItemWrapper>
            {props.value}
        </ItemWrapper>
    );
};
