import * as React from 'react';
import {convertArrayToHexString} from '../../helpers/string';
import {Box, styled} from '@mui/material';

interface IHexSectionProps {
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

export const HexSection: React.FC<IHexSectionProps> = (props: IHexSectionProps) => {
    const renderLine = (line: string, lineNumber: number): React.ReactNode => {
        const result: React.ReactNode[] = [];

        let lineString = line;
        let byteNumber = 0;

        while (byteNumber < 16) {
            result.push(
                <Item key={lineNumber.toString() + '-' + byteNumber.toString()}>
                    {lineString.substring(0, 2).toUpperCase()}
                </Item>
            );

            lineString = lineString.slice(2);
            byteNumber++;
        }

        return result;
    };

    const renderContent = () => {
        if (!props.data) {
            return [];
        }

        const result: React.ReactNode[] = [];

        let data = convertArrayToHexString(props.data);
        let lineNumber = 0;

        while (data.length > 0) {
            result.push(
                renderLine(data.substring(0, 32), lineNumber)
            );

            data = data.slice(32);
            lineNumber++;
        }

        return (
            <Wrapper>
                {result}
            </Wrapper>
        );
    };

    return (
        <>
            {renderContent()}
        </>
    );
};
