// const removeFromArray = function (array, ...removeElements) {
//     let removeIndices = [];
//     for (let i = 0; i < removeElements.length; i++) {
//         if (array.indexOf(removeElements[i]) > -1) {
//             removeIndices.push(array.indexOf(removeElements[i]))
//         }
//     } removeIndices = removeIndices.sort((a, b) => a - b)
//     for (let i = 0; i < removeIndices.length; i++) {
//         array.splice(removeIndices[i] - i, 1)
//     } return array
// };


// const removeFromArray = function (...args) {
//     const array = args[0];
//     const newArray = [];
//     array.forEach((item) => {
//         if (!args.includes(item)) {
//             newArray.push(item);
//         }
//     });
//     return newArray;
// }

const removeFromArray = function (...args) {
    const array = args[0];
    return array.filter(val => !args.includes(val))
}

// Do not edit below this line
module.exports = removeFromArray;
