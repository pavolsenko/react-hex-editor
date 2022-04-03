export const convertFileDataToArray = (data: string | ArrayBuffer | null): Uint8Array => {
    if (!data) {
        return new Uint8Array([]);
    }

    if (typeof data === 'string') {
        let arrayBuffer = new ArrayBuffer(data.length);
        let newUint = new Uint8Array(arrayBuffer);
        newUint.forEach((value: number, index: number) => {
            newUint[index] = data.charCodeAt(index);
        });

        return newUint;
    }

    return new Uint8Array(data);
};
