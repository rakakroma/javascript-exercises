const palindromes = function (string) {
    const azArray = string.toLowerCase().split("").filter(a => /\w/.test(a));
    const reversedArray = [];
    azArray.forEach(a => reversedArray.unshift(a));
    return azArray.join("") === reversedArray.join("");
};
// Do not edit below this line
module.exports = palindromes;
