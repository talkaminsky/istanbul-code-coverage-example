function adder() {
    this.add = function (numberA, numberB) {
        if(!numberA || !numberB) return;

        return  numberA + numberB;
    }
}

module.exports = new adder();