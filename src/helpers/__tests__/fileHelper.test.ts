import {convertFileDataToArray} from '../fileHelper';

describe('FileHelper', () => {
    it('should convert string file data to an array', () => {
        const result = convertFileDataToArray('asdasda');
        const expected = new Uint8Array([97, 115, 100, 97, 115, 100, 97]);

        expect(result).toEqual(expected);
        expect(result).toHaveLength(7);
    });
});
