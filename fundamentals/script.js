/* console.log("Welcome to ES6");

function greet(name = "Your name") {
    return `Hello ${name}`;
}

console.log(greet());
 */
/* let name = "Virat";
let time = 20;
let str = `Hi, ${name}. I think you are the Best player in ${time * 5}'s decade`;

console.log(str); */

let arr = [20, 98, 67, 37, 10];

// console.log(...arr);

/* let maxNum = Math.max(...arr);
console.log(maxNum); */

let num = [...arr, 999, 789];

arr.push(300);

// console.log(arr);
// console.log(num);

let person = {
    name: "Samir",
    age: 25,
    wantTo: "Be a good Programmer",
};

let person2 = { ...person };

// console.log(person2);

function sum(a, b, c, ...restNum) {
    console.log(restNum);
    return a + b + c;
}

// console.log(sum(20, 10, 50, 90, 89));

/* console.log(typeof undefined);
console.log(typeof null);
console.log(typeof 000); */

/* let x = null;
console.log(typeof false); */

// closures
function outer() {
    let message = "Hello";

    function inner() {
        console.log(message);
    }

    return inner;
}

outer();
/* const myFunction = outer();

myFunction(); */
