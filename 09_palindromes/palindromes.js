const palindromes = function (string) {
    const letters = new Set("abcdefghijklmnopqrstuvwxyz");
    let left = 0;
    let right = string.length - 1;
    while (left < right) {
        const left_char = string[left].toLowerCase();
        const right_char = string[right].toLowerCase();
        if (!letters.has(left_char)) {
            left++;
            continue;
        } else if (!letters.has(right_char)) {
            right--;
            continue;
        };
        if (left_char === right_char) {
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
