const palindromes = function (string) {
    left = 0;
    right = string.length - 1;
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
