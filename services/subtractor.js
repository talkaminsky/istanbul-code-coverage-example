function subtractor() {
    this.subtract = function (numberA, numberB) {
        if(!numberA || !numberB) return;
        
        return  numberA - numberB;
    }
}

module.exports = new subtractor();