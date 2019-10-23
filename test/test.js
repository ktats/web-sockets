var assert = require('assert');
function addition(a, b) {
    return a + b;
}
describe('Array', function() {
    describe('#indexOf', function() {
        it('should return -1 when value is not present', function() {
            assert.equal([1,2,3].indexOf(4), -1);
        });
    });
    describe('#addition', function() {
        it('should add two numbers together', function() {
            assert.equal(addition(5,4), 9);
        })
    });
});

