export const convertFileDataToArray = (data: string | ArrayBuffer | null): Uint8Array => {
    if (!data) {
        return new Uint8Array([]);
    }

    if (typeof data === 'string') {
        return (new TextEncoder()).encode(data);
    }

    return new Uint8Array(data);
};
