import * as React from 'react';

import {Box, styled} from '@mui/material';

import {ISectionProps} from './interfaces';
import {Item} from './Item';

const Wrapper = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.grey[200],
}));

const ContentWrapper = styled(Box)(({theme}) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(16, 1fr)',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    backgroundColor: theme.palette.grey[300],
}));

const Header = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.grey[700],
    color: theme.palette.grey[100],
    height: '36px',
    paddingLeft: theme.spacing(2),
    display: 'flex',
    justifyContent: 'flex-end',
}));

export const ByteView: React.FC<ISectionProps> = (props: ISectionProps) => {
    const renderData = (): React.ReactNode[] => {
        const result: React.ReactNode[] = [];

        props.data.forEach((item: number, index: number) => {
            const line = Math.floor(index / 16);
            const column = index % 16;

            result.push(
                <Item
                    line={line}
                    column={column}
                    isSelected={props.selectedByte?.line === line && props.selectedByte.column === column}
                    onClick={props.onSelectedByteChange}
                    key={index.toString()}
                    value={String.fromCharCode(item)}
                />
            );
        });

        return result;
    };

    return (
        <Wrapper>
            <Header/>
            <ContentWrapper>
                {renderData()}
            </ContentWrapper>
        </Wrapper>
    );
};
