export const convertArrayToHexString = (data: Uint8Array): string => {
    return Array.from(data, (byte: number): string => {
        return ('0' + (byte & 0xFF).toString(16)).slice(-2);
    }).join('');
};

export const getArrayOfHexNumbers = (length: number = 16): string[] => {
    const result: string[] = [];
    for (let i = 0; i < length; i++) {
        result.push(
            i.toString(16).toUpperCase(),
        );
    }

    return result;
};

export const getLineNumberHex = (lineNumber: number, length: number = 16): string => {
    let line = lineNumber.toString(16).toUpperCase() + '0';
    const lineLength = line.length;

    for (let i = 0; i <= length - lineLength; i++) {
        line = '0' + line;
    }

    return line;
};
