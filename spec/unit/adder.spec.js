var adder = require('../../services/adder');

describe("adder tests ", function() {
    var _numberA;
    var _numberB;

    beforeEach(function() {
    });

    it("should return numberA pulse numberB", function() {
        _numberA = 1;
        _numberB = 2;
        var result = adder.add(_numberA, _numberB);

        expect(result).toEqual(3);
    });

    it("should return undefined for numberA equals 0", function() {
        _numberA = 0;
        _numberB = 2;
        var result = adder.add(_numberA, _numberB);

        expect(result).toEqual(undefined);
    });

    it("should return undefined for numberB equals 0", function() {
        _numberA = 2;
        _numberB = 0;
        var result = adder.add(_numberA, _numberB);

        expect(result).toEqual(undefined);
    });
});