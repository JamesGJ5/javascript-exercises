const removeFromArray = function(array, ...valuesToRemove) {
    for (let i = 0; i < array.length;) {
        if (valuesToRemove.includes(array[i])) {
            array.splice(i, 1);
        } else {
            i++;
        };
    };
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
