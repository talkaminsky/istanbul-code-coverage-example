function multiplier() {
    this.multiple = function (numberA, numberB) {
        if(!numberA || !numberB) return;

        return  numberA * numberB;
    }
}

module.exports = new multiplier();