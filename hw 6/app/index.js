//first task

function calculateAverageNumber (numbers) {

    const numericValues = numbers.filter(function(item) {
        return typeof item === 'number';
    });

    if (numericValues.length === 0) {
        return "No numeric values found in this array.";
    }

    const sumElements = numericValues.reduce(function (acc, num) {
        return acc + num;
    },0);

    const averageNumber = sumElements / numericValues.length
    return averageNumber;
}

const randomArray = [1, 88, 30, 4, 'two', 'ten', 93, 'four', 5];
const averageNumber = calculateAverageNumber(randomArray);

console.log(`Average number is ${averageNumber}`);

// second task

function doMath (z, znak, y) {
    switch (znak) {
        case '+':
         return x + y;
        
        case '-':
         return x - y;

        case '*':
         return x * y;

        case '/':
         return x / y;

        case '%':
         return x % y;

        case '^':
         return Math.pow(x, y);

        default:
         return "Invalid operator";
    }
}

const x = parseFloat(prompt("Kindly enter the number x: ", "15"));
const y = parseFloat(prompt("Kindly enter the number y: ", "83"));
const operator = prompt ("Enter the mathemetical operator (+, -, *, /, %, ^): ", "+");
const calculcationResults = doMath (x, operator, y);

console.log(`The result of calculation is: ${calculcationResults}`);

// third task

function fillUserArray (rows, columns) {
    const resultUserArray = [];

    for (let i = 0; i < rows; i++) {
        const draftArray = [];
        for (let l = 0; l < columns; l++) {
            const elementValue = prompt(`Kindly enter the value of the element: `);
            draftArray.push(elementValue);
        }

        resultUserArray.push(draftArray);
    }

    return resultUserArray;
}

const userRows = parseInt(prompt("Kindly enter the number of the rows: ", "3"));
const userColumns = parseInt(prompt("Kindly enter the number of the columns: ", "3"));

const finalUserArray = fillUserArray(userRows, userColumns);

console.log(finalUserArray);

//fourth task

function removeSymbol(inputString, symbolToRemove) {
    let userString = "";

    for (let i = 0; i < inputString.length; i++) {
    if (symbolToRemove.indexOf(inputString[i]) === -1) {
        userString += inputString[i];
    }
}

return userString;

}

const inputString = prompt("Kindly enter the row: ", "Hello, world!");
const symbolToRemove = prompt("Kindly enter the symbols to remove (without space): ", "ld");
const userString = removeSymbol(inputString, symbolToRemove);

console.log(`The result is: ${userString}`);