export const convertArrayToHexString = (data: Uint8Array): string => {
    return Array.from(data, (byte: number): string => {
        return ('0' + (byte & 0xFF).toString(16)).slice(-2);
    }).join('');
};

export const convertFileDataToArray = (data: string | ArrayBuffer | null): Uint8Array => {
    if (!data) {
        return new Uint8Array([]);
    }

    if (typeof data === 'string') {
        return (new TextEncoder()).encode(data);
    }

    return new Uint8Array(data);
};
