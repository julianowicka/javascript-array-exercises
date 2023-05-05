/*Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array. Go to the editor
Test Data :
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
Expected Output :
-2
[9, 0, -2]
[7, 9, 0, -2]*/

function last(arr, n) {
    if (n == null) {
        return arr[arr.length - 1];
    }
    return arr.slice(Math.max(arr.length - n, 0));
}

//Conditional (ternary) operator
function lastElement(arr, n) {
    return n === undefined ? arr[arr.length - 1] : arr.slice(Math.max(arr.length - n, 0));
}