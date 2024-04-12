var objectList = [
    { id: 1, amount: 30 },
    { id: 2, amount: 20 },
    { id: 3, amount: -40 },
]

var addNumberFromNumber = 0
const totalSumValue = objectList.reduce(
     ( totalSumValue, currentItemFromObjectList ) =>  
        totalSumValue +  currentItemFromObjectList.amount, addNumberFromNumber
)

console.log(totalSumValue)
