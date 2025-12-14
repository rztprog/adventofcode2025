'use strict'

const puzzle = `
L68
L30
R48
L5
R60
L55
L1
L99
R14
L82
`

let rotations = puzzle.split("\n").filter(line => line.trim() !== "");
let dial = 50;
let password = 0;

rotations.forEach(rotation => {
    let direction = rotation[0];
    let move = parseInt(rotation.substring(1, rotation.length));

    // Keep the last two numbers because anything above 100 is useless.
    if (move.toString().length >= 3) {
        move = parseInt(move.toString().slice(-2));
    }
  
    if (direction === 'L') {
        let nextPosition = dial - move;
        nextPosition < 0 ? dial = 100 - -nextPosition : dial = nextPosition;
    } else if (direction === 'R') {
        let nextPosition = dial + move;
        nextPosition > 100 ? dial = nextPosition - 100 : dial = nextPosition;
    } else {
        console.log('Error in direction');
    }

    if (dial == 0 || dial == 100) {
        dial = 0;
        password++;
    }
});

console.log(`The password is : ${password}`);
