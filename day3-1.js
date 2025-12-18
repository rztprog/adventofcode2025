'use strict';

const puzzle = `
987654321111111
811111111111119
234234234234278
818181911112111
`

const banks = puzzle.split("\n").filter(line => line.trim() !== "");
let totalJoltage = 0;

banks.forEach(bank => {
    const bankArr = bank.split("");
    let largest = 0;
    
    for (let index = 0; index < bankArr.length; index++) {
        for (let yIndex = index + 1; yIndex < bankArr.length; yIndex++) {
            const joltage = parseInt(bankArr[index] + bankArr[yIndex])
            if (largest < joltage) largest = joltage
        }
    }

    totalJoltage += largest;
});

console.log("Total Output Joltage :", totalJoltage)
