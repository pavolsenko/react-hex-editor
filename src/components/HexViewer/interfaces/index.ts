export interface ISelectedByte {
    line: number;
    column: number;
}

export interface ISectionProps {
    data: Uint8Array;
    selectedByte?: ISelectedByte;
    onSelectedByteChange: (selectedByte: ISelectedByte) => void;
}
