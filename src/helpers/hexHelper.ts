export const convertArrayToHexString = (data: Uint8Array): string => {
    return Array.from(data, (byte: number): string => {
        return ('0' + (byte & 0xFF).toString(16)).slice(-2);
    }).join('');
};

export const generateArrayOfHexNumbers = (): string[] => {
    const result: string[] = [];
    for (let i = 0; i < 16; i++) {
        result.push(
            i.toString(16).toUpperCase(),
        );
    }

    return result;
};

export const getLineNumberHex = (lineNumber: number): string => {
    let line = lineNumber.toString(16).toUpperCase() + '0';

    for (let i = 0; i <= 16 - line.length; i++) {
        line = '0' + line;
    }

    return line;
};
