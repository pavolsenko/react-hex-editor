import {convertArrayToHexString, getArrayOfHexNumbers, getLineNumberHex} from '../hexHelper';

describe('HexHelper', () => {
    it('should convert an array to hex string', () => {
        const testArray = new Uint8Array([255, 14, 44]);

        expect(convertArrayToHexString(testArray))
            .toEqual('ff0e2c');
    });

    it('should return an array of 16 hex numbers', () => {
        const result = getArrayOfHexNumbers();
        const expected = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

        expect(result).toEqual(expected);
        expect(result).toHaveLength(16);
    });

    it('should return an array of 5 hex numbers', () => {
        const result = getArrayOfHexNumbers(5);
        const expected = ['0', '1', '2', '3', '4'];

        expect(result).toEqual(expected);
        expect(result).toHaveLength(5);
    });

    it('should return the first line number in hex with number length of 16', () => {
        const result = getLineNumberHex(0);
        const expected = '0000000000000000';

        expect(result).toEqual(expected);
        expect(result).toHaveLength(16);
    });

    it('should return the 28th line number in hex with number length of 8', () => {
        const result = getLineNumberHex(28, 8);
        const expected = '000001C0';

        expect(result).toEqual(expected);
        expect(result).toHaveLength(8);
    });
});
