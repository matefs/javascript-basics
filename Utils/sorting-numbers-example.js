const recursiveRandomNumbersGenerator = (numberOfTimes) => {
    if (numberOfTimes === 1) {
        return [Math.floor(Math.random()*100)];
    } else {
        numberOfTimes = numberOfTimes - 1;
        const randomNumber = Math.floor(Math.random()*100);
        return [randomNumber].concat(recursiveRandomNumbersGenerator(numberOfTimes));
    }
}


var listOfRandomNumbers =  recursiveRandomNumbersGenerator(10);

var orderedNumberList = listOfRandomNumbers.sort((firstNumber,secondNumber) => firstNumber - secondNumber)
console.log(orderedNumberList)