import * as React from 'react';
import {HexView} from './HexView';
import {ByteView} from './ByteView';
import {Box, styled} from '@mui/material';
import {ViewerHeader} from './ViewerHeader';

export interface IHexViewerProps {
    data: Uint8Array;
    file: File | null;
    onFileReset: () => void;
}

const HexViewerWrapper = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    border: '3px solid ' + theme.palette.primary.main,
    borderRadius: '5px',
    margin: theme.spacing(3),
}));

const ContentWrapper = styled(Box)(() => ({
    display: 'flex',
}));

export const HexViewer: React.FC<IHexViewerProps> = (props: IHexViewerProps) => {
    if (!props.file) {
        return null;
    }

    return (
        <HexViewerWrapper>
            <ViewerHeader
                fileName={props.file.name}
                onCloseClick={() => props.onFileReset()}
            />
            <ContentWrapper>
                <HexView data={props.data}/>
                <ByteView data={props.data}/>
            </ContentWrapper>
        </HexViewerWrapper>
    );
};
