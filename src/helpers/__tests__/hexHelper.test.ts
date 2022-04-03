import {convertArrayToHexString} from '../hexHelper';

describe('HexHelper.convertArrayToHexString', () => {
    it('should convert an array to hex string', () => {
        const testArray = new Uint8Array([255, 14, 44]);

        expect(convertArrayToHexString(testArray)).toEqual('ff0e2c');
    });
});
