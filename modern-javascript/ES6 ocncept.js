/* // JS Function
// problem-1
function functionName(name) {
    console.log(`Hello, ${name}`);
}

functionName("Samir");
functionName("Virat");
functionName("MS Dhoni");

// problem-2
function sum(a, b) {
    return a + b;
}

let result = sum(45, 98);

console.log(result);

// problem-3
function isAdult(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(isAdult(45));
console.log(isAdult(16));
console.log(isAdult(15));

// problem-4
function findLarger(x, y) {
    if (x > y) {
        return x;
    }

    return y;
}

console.log(findLarger(89, 67));
console.log(findLarger(3, 21));
console.log(findLarger(9, 70));

// problem-5
function calculateTotal(price, quantity) {
    return price * quantity;
}

let total = calculateTotal(500, 3);

console.log(total);

let phoneTotal = calculateTotal(10000, 4);
let mouseTotal = calculateTotal(300, 8);

console.log(phoneTotal);
console.log(mouseTotal);

// next level - problem-1
function chackEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    }

    return "Odd";
}

console.log(chackEvenOdd(89));
console.log(chackEvenOdd(90));
console.log(chackEvenOdd(123));

// problem-2
function calculateDiscount(price, discount) {
    let finalPrice = price - price * (discount / 100);

    return finalPrice;
}

console.log(calculateDiscount(500, 10));
console.log(calculateDiscount(4500, 15));
console.log(calculateDiscount(8000, 25));

// problem-3
function getFullName(fName, lName) {
    return `${fName} ${lName}`;
}

console.log(getFullName("Sabbir", "Ahmed"));
console.log(getFullName("MS", "Dhoni"));
console.log(getFullName("Virat", "kohli"));

// problem-4

function getGrade(marks) {
    if (marks >= 80) {
        return "A";
    } else if (marks >= 70 && marks < 80) {
        return "B";
    } else if (marks >= 60 && marks < 70) {
        return "C";
    } else if (marks >= 50 && marks < 60) {
        return "D";
    }

    return "Fail";
}

console.log(getGrade(79));
console.log(getGrade(96));
console.log(getGrade(65));
console.log(getGrade(49));
 */

// problem-5
/* function calculateTotal(price, quantity) {
    return price * quantity;
}

// console.log(totalPrice);

function getFinalPrice(totalPrice) {
    if (totalPrice >= 5000) {
        return totalPrice - totalPrice * (10 / 100);
    }

    return totalPrice;
}

let totalPrice = calculateTotal(400, 40);
let finalPrice = getFinalPrice(totalPrice);

console.log(finalPrice); */

// more advance
// problem-1
/* function checkNumber(number) {
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    }

    return "Zero";
}

console.log(checkNumber(0));

// problem-2
function calculateInterest(p, r, t) {
    return (p * r * t) / 100;
}

console.log(calculateInterest(500, 5, 2));
console.log(calculateInterest(10000, 5, 2));
console.log(calculateInterest(5000, 8, 3));

// problem-3
function findLargest(a, b, c) {
    let max = a;

    if (max < b) {
        max = b;
    }
    if (max < c) {
        max = c;
    }

    return max;
}

console.log(findLargest(122, 1022, 902)); */

// problem4
/* function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

let fahrenheit = celsiusToFahrenheit(20);

console.log(fahrenheit);

function checkTemperature(fahrenheit) {
    if (fahrenheit >= 86) {
        return "Hot";
    } else if (fahrenheit >= 68) {
        return "Warm";
    }

    return "Cold";
}

console.log(checkTemperature(fahrenheit)); */

/* // problem-5
function calculateAverage(mark1, mark2, mark3) {
    return (mark1 + mark2 + mark3) / 3;
}

let average = calculateAverage(80, 7, 9);

function getResult(average) {
    if (average >= 80) {
        return "Excellent";
    } else if (average >= 60) {
        return "Good";
    } else if (average >= 40) {
        return "Pass";
    }

    return "Fail";
}

console.log(getResult(average)); */

// Arrow Function
// p-1
/* const squareNumber = (number) => {
    return number * number;
};

console.log(squareNumber(8));

// p-2
const checkEvenOdd = (num) => {
    if (num % 2 === 0) {
        return "Even";
    }

    return "Odd";
};

console.log(checkEvenOdd(9));
console.log(checkEvenOdd(18));
console.log(checkEvenOdd(91));

// p-3
const findLarger = (a, b) => {
    if (a > b) {
        return a;
    }

    return b;
};

console.log(findLarger(782, 90));

// p-4
const calculateDiscount = (price, discount) => {
    return price - (price * discount) / 100;
};

console.log(calculateDiscount(200, 50));

// p-5

const getStudentResult = (mark) => {
    if (mark >= 80) {
        return "Excellent";
    } else if (mark >= 60) {
        return "Good";
    } else if (mark >= 40) {
        return "Pass";
    }

    return "Fail";
};

console.log(getStudentResult(23));
console.log(getStudentResult(93));
console.log(getStudentResult(53)); */

// p-6
/* const checkNumber = (num) => {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    }

    return "Zero";
};

console.log(checkNumber(0));

// p-7
const calculateAge = (birthYear, currentYear) => {
    return currentYear - birthYear;
};

console.log(calculateAge(1998, 2056));

// p-8
const canVote = (age) => {
    if (age >= 18) {
        return "Eligible";
    }

    return "Not Eligible";
};

console.log(canVote(6));

// p-9
const calculateArea = (length, width) => {
    let area = length * width;

    return area;
};

console.log(calculateArea(10, 5));

// p-10
const checkPassword = (pass) => {
    let passLength = pass.length;

    if (passLength >= 8) {
        return "Strong";
    }

    return "Weak";
};

console.log(checkPassword("hello12")); */

// level-2
// p-11
/* const findLargest = (a, b, c) => {
    let max = a;

    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }

    return max;
};

console.log(findLargest(203, 70, 452));

// p-12
const calculateTotal = (price, quantity) => {
    let totalPrice = price * quantity;

    return totalPrice;
};

console.log(calculateTotal(900, 5));

// p-13
const checkUsername = (userName) => {
    let length = userName.length;

    if (length < 5) {
        return "Too Short";
    } else if (length > 15) {
        return "Too Long";
    }

    return "Valid Username";
};

console.log(checkUsername("samir123"));

// p-14
const calculateBill = (units) => {
    let unitPrice;

    if (units >= 0 && units <= 100) {
        unitPrice = 5;
    } else if (units > 100 && units <= 200) {
        unitPrice = 7;
    } else {
        unitPrice = 10;
    }

    let totalBill = units * unitPrice;

    return totalBill;
};

console.log(calculateBill(150));

// p-15
const calculateGrade = (mark) => {
    if (mark >= 90) {
        return "A";
    } else if (mark >= 80) {
        return "B";
    } else if (mark >= 70) {
        return "C";
    } else if (mark >= 60) {
        return "D";
    }

    return "F";
};

console.log(calculateGrade(91)); */

// level 3
// p-16
const createFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
};

const fullName = createFullName("Samir", "Ahmed");

const greetUser = (Name) => {
    return `Hello ${Name}`;
};

console.log(greetUser(fullName));

// p-17
const calculateBonus = (salary, percentage) => {
    const bonus = (salary * percentage) / 100;

    return bonus;
};

const calculateFinalSalary = (salary, bonus) => {
    const finalSalary = salary + bonus;

    return finalSalary;
};

const bonus = calculateBonus(50000, 25);

console.log(calculateFinalSalary(50000, bonus));

// p-18
const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
};

const ferenhite = celsiusToFahrenheit(20);

const temperatureStatus = (ferenhit) => {
    if (ferenhit >= 86) {
        return "Hot";
    } else if (ferenhit >= 68) {
        return "Warm";
    }

    return "Cold";
};

// console.log(ferenhite);
console.log(temperatureStatus(ferenhite));

// level-4
// p-19
const calculateSum = (numbers) => {
    let sum = 0;

    for (let i of numbers) {
        sum += i;
    }

    return sum;
};

console.log(calculateSum([10, 20, 30, 40]));

// p-20
const countEvenNumbers = (numbers) => {
    let count = 0;

    for (let i of numbers) {
        if (i % 2 === 0) {
            count++;
        }
    }

    return count;
};

console.log(countEvenNumbers([10, 15, 22, 31, 401]));
