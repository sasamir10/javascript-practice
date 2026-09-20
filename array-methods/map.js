// Problem 1 — Double the numbers
const numbers = [34, 56, 89, 90, 12, 65, 40, 50];

const doubled = numbers.map((number) => {
    return number * 2;
});

console.log(doubled);

// Problem 2 — Convert names to uppercase
const names = ["samir", "rahim", "karim", "hasan"];

const upperCase = names.map((name) => {
    return name.toUpperCase();
});

console.log(upperCase);

// Problem 3 — Get names from objects
const users = [
    { name: "Samir", age: 25 },
    { name: "Rahim", age: 22 },
    { name: "Karim", age: 28 },
];

const names = users.map((object) => {
    return object.name;
});

console.log(names);

// Problem 4 - Find the length of every name
const names = ["Samir", "Rahim", "Karim", "Hasan"];

const nameLength = names.map((name) => {
    return name.length;
});

console.log(nameLength);

// Problem 5 - Get only the ages
const users = [
    { name: "Samir", age: 25 },
    { name: "Rahim", age: 22 },
    { name: "Karim", age: 21 },
];

const getAge = users.map((object) => {
    return object.age;
});

console.log(getAge);

// Problem 6 - Get Get product names
const products = [
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 },
];

const productNames = products.map((object) => {
    return object.name;
});

console.log(productNames);

// Problem 7 - Add 100 to every product price
const products = [
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 },
];

const finalPrice = products.map((object) => {
    return object.price + 100;
});

console.log(finalPrice);

// Problem 8 - Create a sentence from each user
const users = [
    { name: "Samir", age: 25 },
    { name: "Rahim", age: 22 },
    { name: "Karim", age: 28 },
];

const sentence = users.map((object) => {
    return `${object.name} is ${object.age} years old`;
});

console.log(sentence);

// Problem 9 - Increase every student's marks by 10
const students = [
    { name: "Samir", marks: 70 },
    { name: "Rahim", marks: 80 },
    { name: "Karim", marks: 65 },
];

const finalMarks = students.map((object) => {
    return object.marks + 10;
});

console.log(finalMarks);

// Problem 10 - Convert prices to strings with ৳
const prices = [500, 1000, 1500];

const pricesTk = prices.map((price) => {
    return `৳${price}`;
});

console.log(pricesTk);

// Problem 11 - Create a new array of objects
const users = [
    { name: "Samir", age: 25 },
    { name: "Rahim", age: 12 },
];

const newObject = users.map((object) => {
    return {
        name: object.name,
        isAdult: object.age > 18,
    };
});

console.log(newObject);
