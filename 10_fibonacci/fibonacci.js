const fibonacci = function(n) {
    let currentPenultimate = 1;
    let currentFinal = 1;
    for (let i = 3; i < n + 1; i++) {
        const newFinal = currentPenultimate + currentFinal;
        currentPenultimate = currentFinal;
        currentFinal = newFinal;
    };
    return currentFinal;
};

// Do not edit below this line
module.exports = fibonacci;
