import * as React from 'react';

import {Box, styled} from '@mui/material';

import {convertArrayToHexString} from '../../helpers/hexHelper';
import {Item} from './Item';
import {Header} from './Header';
import {ItemLineNumber} from './ItemLineNumber';
import {ISectionProps} from './interfaces';

const ViewerWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

const HexViewContentWrapper = styled(Box)(() => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(17, 1fr)',
}));

export const HexView: React.FC<ISectionProps> = (props: ISectionProps) => {
    const renderLine = (line: string, lineNumber: number): React.ReactNode => {
        const result: React.ReactNode[] = [];

        let lineString = line;
        let byteNumber = 0;

        result.push(
            <ItemLineNumber
                key={'line-' + lineNumber.toString()}
                lineNumber={lineNumber}
            />
        );

        while (byteNumber < 16) {

            result.push(
                <Item
                    line={lineNumber}
                    column={byteNumber}
                    isSelected={props.selectedByte?.line === lineNumber && props.selectedByte.column === byteNumber}
                    onClick={props.onSelectedByteChange}
                    key={lineNumber.toString() + '-' + byteNumber.toString()}
                    value={lineString.substring(0, 2).toUpperCase()}
                />
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
            <HexViewContentWrapper>
                {result}
            </HexViewContentWrapper>
        );
    };

    return (
        <ViewerWrapper>
            <Header/>
            {renderContent()}
        </ViewerWrapper>
    );
};
