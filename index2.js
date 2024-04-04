function generateArray(startNumber, endNumber) {
let result = [];
const step = startNumber <= endNumber ? 1 : -1;
    for (let i = startNumber; i !== endNumber + step; i += step) {
        result.push(i);
    }
    return result;
}
function generateandDisplayArray(){ 
    const startNumber = parseInt(document.getElementById('startNumber').value);
    const endNumber = parseInt(document.getElementById('endNumber').value);
    const resultArray = generateArray(startNumber, endNumber);
    document.getElementById('result').textContent = "GenerateArray: " + resultArray.join(', ');
}