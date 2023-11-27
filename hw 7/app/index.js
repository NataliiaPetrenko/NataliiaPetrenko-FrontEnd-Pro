function createSumFunction () {
    let initialSum = 0;

    function sumFunction(value) {
        initialSum += value;
        return initialSum;
    }

    return sumFunction;

}

const finalCount = createSumFunction();

console.log(finalCount(3));
console.log(finalCount(5));
console.log(finalCount(20));