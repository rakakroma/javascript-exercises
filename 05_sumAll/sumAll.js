const sumAll = function (num1, num2) {
    if (num1 < 0 || num2 < 0
        || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR"
    }
    let greaterNum = num1 > num2 ? num1 : num2;
    let smallerNum = num1 < num2 ? num1 : num2;
    let total = 0;
    for (let i = smallerNum; i <= greaterNum; i++) {
        total += i;
    } return total
};


//只處理正整數
//設一個數 從小的+1+到大的
//先判斷誰大誰小


// Do not edit below this line
module.exports = sumAll;
