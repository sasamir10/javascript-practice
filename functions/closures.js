// JS closures

function add() {
    let count = 0;

    return function () {
        count += 1;

        return count;
    };
}

let finResult = add();

console.log(finResult());
console.log(finResult());
console.log(finResult());
