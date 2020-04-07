/*let testArray = [ 17, 42, 311, 5, 9, 10, 28, 7, 6 ];
let sum = 0;
let newElement = prompt("Enter a number of your choice:");

newElement = parseInt(newElement);
testArray.push(newElement);

for (let position=0;position<testArray.length;position++){
	sum += testArray[position];
}
console.log( " The sum of " + testArray + " is: " + sum);
*/

//Following is the refactored code

let testArray = [];
let sum = 0;

for (let i=0;i<5;i++){
	let newElement = prompt("Enter a number: ");
	newElement = parseInt(newElement);
	testArray.push(newElement);
}
for( let position=0;position<testArray.length;position++){
	sum += testArray[position];
}
console.log("The sum of " + testArray + "is: "+ sum);
