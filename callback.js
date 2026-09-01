// Callback structure
/* const sayHello = () => {
    return "Hello";
};

const runFunction = (callback) => {
    return callback();
};

console.log(runFunction(sayHello)); */

// p-1
/* const sayHello = () => {
    return "Hello";
};

const runCallback = (callback) => {
    return callback();
};

console.log(runCallback(sayHello));

// p-2
const greetUser = (name) => {
    return `Hello ${name}`;
};

const processUser = (name, callback) => {
    return callback(name);
};

console.log(processUser("Samir", greetUser));

// p-3
const doubleNumber = (number) => {
    return number * 2;
};

const squareNumber = (number) => {
    return number * number;
};

const calculate = (number, callback) => {
    return callback(number);
};

console.log(calculate(5, doubleNumber));
console.log(calculate(5, squareNumber));

// p-4
const checkEven = (number) => {
    if (number % 2 === 0) {
        return "Even";
    }

    return "Odd";
};

const checkPositive = (number) => {
    if (number > 0) {
        return "Positive";
    }

    return "Not Positive";
};

const checkNumber = (number, callback) => {
    return callback(number);
};

console.log(checkNumber(10, checkEven));
console.log(checkNumber(-5, checkPositive));

// p-5
const add = (a, b) => {
    return a + b;
};

const multiply = (a, b) => {
    return a * b;
};

const calculateNumbers = (a, b, callback) => {
    return callback(a, b);
};

console.log(calculateNumbers(10, 5, add));
console.log(calculateNumbers(10, 5, multiply));
 */

// level-2
//p-1 - Format a Name
/* const makeUpperCase = (name) => {
    return name.toUpperCase();
};

const formatName = (name, callback) => {
    return callback(name);
};

console.log(formatName("samir", makeUpperCase));

// p-2 - Check Age with Callback
const checkAdult = (age) => {
    if (age >= 18) {
        return "Adult";
    }

    return "Minor";
};

const processAge = (age, backCall) => {
    return backCall(age);
};

console.log(processAge(7, checkAdult));

// p-3 - Calculate Discount with Callback
const tenPercentDiscount = (price) => {
    return price - (price * 10) / 100;
};

const twentyPercentDiscount = (price) => {
    return price - (price * 20) / 100;
};

const calculatePrice = (price, callBack) => {
    return callBack(price);
};

console.log(calculatePrice(1000, tenPercentDiscount));
console.log(calculatePrice(1000, twentyPercentDiscount));

// p-4 - Two Numbers + Result Checker
const addNumbers = (a, b) => {
    return a + b;
};

const multiplyNumbers = (a, b) => {
    return a * b;
};

const processNumbers = (a, b, callback) => {
    return callback(a, b);
};

console.log(processNumbers(8, 4, addNumbers));
console.log(processNumbers(8, 4, multiplyNumbers));

// p-5 - Callback Inside a Loop
const printNumber = (number) => {
    console.log(number);
};

const processArray = (numbers, callback) => {
    for (let number of numbers) {
        callback(number);
    }
};

processArray([10, 20, 30], printNumber); */

// level-3
// p-1 - Greet With an Inline Callback
/* const processName = (name, callback) => {
    return callback(name);
};

const callbackResult = processName("Samir", (names) => {
    return `Hello ${names}`;
});

console.log(callbackResult);

// p-2 - Double a Number Inline
const processNumber = (number, callback) => {
    return callback(number);
};

const result = processNumber(5, (num) => {
    return num * num;
});

console.log(result);

// p-3 - Check Even or Odd Inline
const checkValue = (number, callback) => {
    return callback(number);
};

const res = checkValue(894, (num) => {
    if (num % 2 === 0) {
        return "Even";
    }

    return "Odd";
});

console.log(res);

// p-4 - Custom Calculator
const calculate = (x, y, callback) => {
    return callback(x, y);
};

const add = calculate(5, 8, (num1, num2) => {
    return num1 + num2;
});

const sub = calculate(50, 35, (num1, num2) => {
    return num1 - num2;
});

const mul = calculate(6, 4, (num1, num2) => {
    return num1 * num2;
});

console.log(add);
console.log(sub);
console.log(mul); */

// p-5 - Process Every Array Item
/* const processArray = (arr, callback) => {
    return callback(arr);
};

const arrPrint = processArray([10, 20, 30], (arr) => {
    for (let number of arr) {
        // BUJHTESINA..will be back
    }
}); */

/* const processNumber = (number, callback) => {
    return callback(number);
};

const result = processNumber(5, (num) => {
    return num * 2;
});

console.log(result); */

// Triple Every Number
/* const sumFunction = (x, y) => {
    return x + y;
};

const myFunction = (a, b, callback) => {
    return callback(a, b);
};

console.log(sumFunction(12, 9, myFunction)); */
/* const arrFunction = (number) => {
    return number * 3;
};

const myFunction = (numbers, callback) => {
    const result = [];

    for (let number of numbers) {
        result.push(callback(number));
    }

    return result;
};

const result = myFunction([1, 5, 2], arrFunction);

console.log(result); */

/* const arrFunction = (number) => {
    return number;
};

const myFunction = (numbers, callback) => {
    const result = [];

    for (let number of numbers) {
        result.push(callback(number));
    }

    return result;
};

console.log(myFunction([34, 76, 89], arrFunction)); */

// p-2
/* const arrayFunction = (name) => {
    return name.toUpperCase();
};

const myFunction = (names, callback) => {
    const result = [];

    for (let name of names) {
        result.push(callback(name));
    }

    return result;
};

console.log(myFunction(["samir", "hridy"], arrayFunction));

// p-3
const arrayFunction = (number) => {
    return number > 0;
};

const myFunction = (numbers, callback) => {
    const result = [];

    for (let number of numbers) {
        result.push(callback(number));
    }

    return result;
};

console.log(myFunction([5, -2, 8], arrayFunction));

// p-4
const doubleFunction = (number) => {
    return number * 2;
};

const squareFunction = (number) => {
    return number * number;
};

const myFunction = (numbers, callback) => {
    const result = [];

    for (let number of numbers) {
        result.push(callback(number));
    }

    return result;
};

console.log(myFunction([4, 8, 2], doubleFunction));
console.log(myFunction([4, 8, 2], squareFunction)); */

// p-5
/* const arrrayFunction = (number) => {
    return number % 2 === 0;
};

const myFunction = (numbers, callback) => {
    const result = [];

    for (let number of numbers) {
        if (callback(number)) {
            result.push(number);
        }
    }

    return result;
};

console.log(myFunction([10, 15, 22, 31], arrrayFunction)); */

const arrayFunction = (number) => {
    return number % 2 === 0;
};

const myFunction = (numbers, callback) => {
    const result = [];

    for (let number of numbers) {
        if (callback(number)) {
            result.push(number);
        }
    }

    return result;
};

console.log(myFunction([89, 36, -29, 30, 12, 16, 19], arrayFunction));
