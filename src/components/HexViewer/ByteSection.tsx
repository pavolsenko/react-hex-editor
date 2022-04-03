import * as React from 'react';

import {Box, styled} from '@mui/material';

interface IByteSectionProps {
    data: Uint8Array;
}

const Wrapper = styled(Box)(() => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(16, 1fr)',
}));

const Item = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: '"Courier new"',
    fontSize: '12px',
}));

export const ByteSection: React.FC<IByteSectionProps> = (props: IByteSectionProps) => {
    const renderData = (): React.ReactNode[] => {
        const result: React.ReactNode[] = [];
        props.data.forEach((item: number) => {
            result.push(
                <Item>
                    {String.fromCharCode(item)}
                </Item>
            );
        });

        return result;
    };

    return (
        <Wrapper>
            {renderData()}
        </Wrapper>
    );
};
