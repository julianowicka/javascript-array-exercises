/*Write a simple JavaScript program to join all elements of the following array into a string. Go to the editor
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"*/

let myColor = ["Red", "Green", "White", "Black"];

let commaSeparated = myColor.join(",");
console.log(commaSeparated);

let plusSeparated = myColor.join("+");
console.log(plusSeparated);