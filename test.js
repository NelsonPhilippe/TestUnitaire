import chai from "chai";
import device_convertion from "./device_convertion.js";
import sorting from "./sorting.js";
import chessboard from "./chessboard.js";


const assert = chai.assert;
const except = chai.expect;

describe('Test of device conversion', () => {
    describe('#device_conversion()', () => {
        it('should return 10.70$ US', () => {
            assert.equal(device_convertion(10, '$'), 10 * 1.07);
        });

        it('should return 0 if device is not string', () => {
            assert.equal(device_convertion(10, 0), 0);
        });

        it('should return 0 if device is not taken into consideration', () => {
            assert.equal(device_convertion(10, '€'), 0);
        });
    })
});


describe('Test sorting', () => {
    describe('#sorting()', () => {
        it('should return [] if array is empty', () => {
            except(sorting([])).to.eql([]);
        });

        it('should return empty array if arg is not array', () => {
           except(sorting('test')).to.eql([]);
        });

        it('should return sorting list in ascending order', () => {
            const array = sorting([1,4,3,2]);
            except(array).to.eql([1,2,3,4]);
        })
    });
});


describe('Test chessboard', () => {
    describe('#chessboard()', () => {

        const lines = chessboard().split('\n');

        it('check if chars is correct', () => {

            lines.forEach((line) => {
                except(line).that.match(/^[#_]/g);
            });
        });

        it('check if contain all char number', () => {
            except(chessboard().replace(/\r?\n|\r/g, '')).to.length(7*7);
        });

        it('check if is alternate char', () => {
            lines.forEach((line) => {
                except(line).that.match(/.*/i);
            });
        });
    });

});
