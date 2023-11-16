// first task

let numberTask = "";
for (let i = 10; i <= 20; i++) {
    numberTask += i + " ";
}

console.log("Numbers from 10 to 20: " + numberTask);

// second task

let numberSquares = "";
for (let j = 10; j <= 20; j++) {
    numberSquares += (j * j) + " ";
}

console.log("Square of numbers from 10 to 20: " + numberSquares);

// third task

let multiplicationTable = "";
for (let s = 1; s <= 10; s++) {
    multiplicationTable += (7 * s) + " ";
}

console.log("Multiplication table for number 7: " + multiplicationTable);

// fourth task

let integerNumber = 0;
for (let n = 1; n <= 15; n++) {
    integerNumber += n;
}

console.log("The sum of all integer numbers from 1 to 15: " + integerNumber);

// fifth task

let numberAddition = 1;
for (let k = 15; k <= 35; k++) {
    numberAddition *= k;
}

console.log("The product of numbers from 15 to 35: " + numberAddition);

// sixth task

let generalNumber = 0;
for (d = 1; d <= 500; d++) {
    generalNumber += d;
}

let averageNumber = generalNumber / 500;

console.log("The average of all integer numbers from 1 to 500: " + averageNumber);

// seventh task

let sumNumber = 0;
for (w = 30; w <= 80; w++) {
    if (w % 2 === 0) {
        sumNumber += w;
    }
}

console.log("The sum of only even numbers from 30 to 80: " + sumNumber);

// eighth task

let numberMultipleToThree = "";
for (let p = 100; p <= 200; p++) {
    if (p % 3 === 0) {
        numberMultipleToThree += p + " ";
    }
}

console.log("All numbers in the range from 100 to 200 multiples of 3: " + numberMultipleToThree);

// ninth task

let randomNumber = 15;
let divisorNumber = "";
for (let x = 1; x <= randomNumber; x++) {
    if (randomNumber % x === 0) {
        divisorNumber += x + " "
    }
}

console.log("All divisors of a number: " + divisorNumber);

// tenth task

let evenDivisorNumber = 0;
for (c = 1; c <= randomNumber; c++) {
    if (c % 2 === 0) {
        evenDivisorNumber++;
    }
}

console.log("The quantity of even divisor numbers " + evenDivisorNumber);

// eleventh task

let sumOfEvenDivisorNumber = 0;
for (g = 1; g <= randomNumber; g++) {
    if (g % 2 === 0) {
        sumOfEvenDivisorNumber += g;
    }
}

console.log("The sum of even divisor numbers " + sumOfEvenDivisorNumber);

// twelveth task

for (t = 1; t <= 10; t++) {
    for (let n = 1; n <= 10; n++) {
        console.log(t + "*" + n + "=" +(t*n));    
    }
}