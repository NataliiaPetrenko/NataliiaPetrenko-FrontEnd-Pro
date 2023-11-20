let userArrayLength = prompt("Kindly specify the length of your array: ", "15");
let userArray = [];
let userArrayElement;

for (let i = 0; i < userArrayLength; i++) {
    userArrayElement = prompt("Kindly enter the element to your array " + (i + 1) + ":");
    userArray.push(userArrayElement);
}

console.log(`Initial array: ${userArray}`);

// sort array

userArray.sort(function (a,b) {
    return a - b;
});

console.log(`Sorted array: ${userArray}`);

//delete elements from array (from 2 to 4 including)

userArray.splice(1, 3);

console.log(`Edited array without deleted elements: ${userArray}`);
