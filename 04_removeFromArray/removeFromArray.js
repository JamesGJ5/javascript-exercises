const removeFromArray = function(array, valueToRemove) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === valueToRemove) {
            array.splice(i, 1);
        };
    };
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
