import {convertFileDataToArray} from '../fileHelper';

describe('FileHelper', () => {
    it('should convert string file data to an array', () => {
        expect(convertFileDataToArray('asdasda'))
            .toEqual(new Uint8Array([97, 115, 100, 97, 115, 100, 97]));
    });
});
