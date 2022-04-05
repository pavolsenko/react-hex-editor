import * as React from 'react';

import {Box, styled} from '@mui/material';
import {ISelectedByte} from './interfaces';

const ItemWrapper = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: '"Courier new"',
    fontSize: '16px',
    cursor: 'pointer',
    margin: theme.spacing(0.5),

    '&.active': {
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
    },
}));

interface IItemProps {
    line: number;
    column: number;
    isSelected: boolean;
    onClick: (selectedByte: ISelectedByte) => void;
    value: string;
}

export const Item: React.FC<IItemProps> = React.memo((props: IItemProps) => {
    const onClick = (): void => {
        props.onClick({
            line: props.line,
            column: props.column,
        });
    };

    return (
        <ItemWrapper
            className={props.isSelected ? 'active' : ''}
            onClick={onClick}
        >
            {props.value}
        </ItemWrapper>
    );
});
