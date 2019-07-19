let Apple = function (weight) {
    this.weight = weight;

    this.decrease =function () {
        this.weight --;
    };

    this.getWeight = function () {
        return this.weight
    }
};