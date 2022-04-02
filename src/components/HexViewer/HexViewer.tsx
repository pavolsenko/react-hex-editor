import * as React from 'react';
import {HexSection} from './HexSection';
import {ByteSection} from './ByteSection';

export interface IHexViewerProps {
    data: string | ArrayBuffer | null;
    file: File | null;
    resetFile: () => void;
}

export const HexViewer: React.FC<IHexViewerProps> = (props: IHexViewerProps) => {
    if (!props.file) {
        return null;
    }

    return (
        <>
            <HexSection/>
            <ByteSection/>
            {JSON.stringify(props.file)}
        </>
    );
};
