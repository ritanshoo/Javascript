

// convert to Word Number
let convertToWord = (str) => {
    let numbersArray = ['ZERO', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE'];
    let tempStr = '';
    for (let i = 0; i < str.length; i++) { // '123' "1234567"
        let char = str.charAt(i);
        let digit = Number.parseInt(char);
        tempStr += `${numbersArray[digit]} `;
        console.log("inner", numbersArray[digit])
    }
    console.log("outer", { tempStr })
    return tempStr;
};

let numberBox = document.querySelector('#number');
let displayText = document.querySelector('#text-number');
numberBox.addEventListener('keyup', () => {
    let numberString = numberBox.value.toString();
    console.log("numberString", numberString)
    let word = convertToWord(numberString);
    displayText.innerText =  word;
    console.log("displayText.innerText",word)
});