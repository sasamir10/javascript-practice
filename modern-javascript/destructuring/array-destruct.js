const favPlayers = ["virat", ["dhoni", "messi"]];

let x = 18;
let y = 7;
let z = 10;

[x, y, z] = [z, x, y]; //swapping

const [first, second] = favPlayers; //basic array destructuring

console.log(first);
console.log(second);

console.log(x, y, z);
