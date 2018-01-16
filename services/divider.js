function divider() {
    this.divide = function (numberA, numberB) {
        if(!numberA || !numberB || numberB ==0) return;

        return  numberA / numberB;
    }
}

module.exports = new divider();