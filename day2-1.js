'use strict';

const puzzle = `
11-22,95-115,998-1012,1188511880-1188511890,222220-222224,
1698522-1698528,446443-446449,38593856-38593862,565653-565659,
824824821-824824827,2121212118-2121212124
`
const rangeIds = puzzle.split(",").map(id => id.trim());
let invalidIds = 0;

rangeIds.forEach(rangeId => {
    const range = rangeId.split("-");
    const startRange = parseInt(range[0]);
    const endRange = parseInt(range[1]);


    for (let index = startRange; index <= endRange; index++) {
        index = index.toString();
        const splitRange = [index.slice(0, index.length / 2), index.toString().slice(index.length / 2)]

        if (splitRange[0] == splitRange [1]) {
            invalidIds += parseInt(index);
            // console.log("Invalid ID ->", index);
        }
    }
});

console.log("Invalid IDS =", invalidIds);
