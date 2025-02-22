import { codeToLet, letToNum } from '../Lib/letters_database.js'

const decode = function (code) {
    const letter = codeToLet[code]

    return letter
}



const shiftFour = function (letter) {

    const index = letToNum.indexOf(letter);
    const arrLength = letToNum.length - 1;
    let newIndex = Number(index) + 4;
    if (newIndex > arrLength) {
        const toAdd = Number(newIndex) - 26
        newIndex = 0 + toAdd
    };
    const newLetter = letToNum[newIndex];

    return newLetter;
}

function example(code) {
    const letter = shiftFour(decode(code))
}

example('100')


export { decode, shiftFour }