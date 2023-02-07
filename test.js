import chai from "chai";
import device_convertion from "./device_convertion.js";


const assert = chai.assert

describe('Test of device conversion', () => {
    describe('#device_conversion()', () => {
        it('should return 10.70$ US', () => {
            assert.equal(device_convertion(10, '$'), 10 * 1.07);
        });

        it('should return 0 if device is not string', () => {
            assert.equal(device_convertion(10, 0), 0);
        })
    })
})