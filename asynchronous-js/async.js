// setTimeout
console.log("Start");

setTimeout(() => {
    console.log("First");

    setTimeout(() => {
        console.log("Second");
    }, 1000);
}, 3000);

console.log("End");

console.log("Past");

setTimeout(() => {
    console.log("Present");
}, 0);

console.log("Future");

console.log("This is Start");

const myFunc = () => {
    console.log("This is End");
};

setTimeout(myFunc, 3000);

function eat() {
    console.log("Eating");
}

function doSomething(callback) {
    console.log("Start");
    callback();
    console.log("End");
}

doSomething(eat);

// setInterval
console.log("Rohit");

// setInterval(() => {
//     console.log("MS Dhoni");
// }, 3000);

console.log("Virat");

// ....
let count = 0;

const timer = setInterval(() => {
    count++;

    console.log(count);

    if (count === 5) {
        clearInterval(timer);
    }
}, 1000);
