const fibonacci = function(n) {
    let penultimateAndFinal = [1, 1];
    for (let i = 3; i < n + 1; i++) {
        const newPenultimate = penultimateAndFinal[1];
        const newFinal = penultimateAndFinal[0] + newPenultimate;
        penultimateAndFinal = [newPenultimate, newFinal];
    };
    return penultimateAndFinal[1];
};

// Do not edit below this line
module.exports = fibonacci;
