const palindromes = function (string) {
    let left = 0;
    let right = string.length - 1;
    while (right >= left) {
        if (string[left] === string[right]) {
            left++;
            right--;
        } else {
            return false;
        };
    };
    return true;
};

// Do not edit below this line
module.exports = palindromes;
