var subtractor = require('../../services/subtractor');

describe("subtractor tests ", function() {
    var _numberA;
    var _numberB;

    beforeEach(function() {
    });

    it("should return numberA minus numberB", function() {
        _numberA = 5;
        _numberB = 2;
        var result = subtractor.subtract(_numberA, _numberB);

        expect(result).toEqual(3);
    });

    it("should return undefined for numberA equals 0", function() {
        _numberA = 0;
        _numberB = 2;
        var result = subtractor.subtract(_numberA, _numberB);

        expect(result).toEqual(undefined);
    });

    it("should return undefined for numberB equals 0", function() {
        _numberA = 2;
        _numberB = 0;
        var result = subtractor.subtract(_numberA, _numberB);

        expect(result).toEqual(undefined);
    });
});