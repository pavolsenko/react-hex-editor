import * as React from 'react';
import {HexSection} from './HexSection';
import {ByteSection} from './ByteSection';

export interface IHexViewerProps {
    data: Uint8Array;
    file: File | null;
    resetFile: () => void;
}

export const HexViewer: React.FC<IHexViewerProps> = (props: IHexViewerProps) => {
    if (!props.file) {
        return null;
    }

    return (
        <>
            <HexSection data={props.data}/>
            <ByteSection data={props.data}/>
            {JSON.stringify(props.file)}
        </>
    );
};
