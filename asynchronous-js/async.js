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
