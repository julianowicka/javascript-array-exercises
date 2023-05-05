/*Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number.
 For example if you accept 025468 the output should be 0-254-6-8.*/

function insertDashes(num) {
    num = num.toString();
    let result = "";
    for (let i = 0; i < num.length; i++) {
        result += num[i];
        if (num[i] % 2 === 0 && i !== num.length - 1) {
            result += "-";
        }
    }
    return result;
}
let test = insertDashes(25468);
console.log(test);