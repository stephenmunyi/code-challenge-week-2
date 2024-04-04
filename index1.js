function swapCase(str){
    let swapString  = '';

    for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === char.toUpperCase()) {
        swapString += char.toLowerCase();
    } else {
        swapString += char.toUpperCase();
    }
     }
     return swapString;
    }
    function swapCaseandDisplay(){
        let inputText = document.getElementById('textInput').value;
        let swapText = swapCase(inputText);
        document.getElementById('output').textContent = swapText;
    }

