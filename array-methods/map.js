// p-1
const number = [2, 5, 6, 9, 10];

const double = number.map((number) => {
    return number * 2;
});

console.log(double);

// p-2
const names = ["samir", "maya", "leo"];

const uppercaseNames = names.map((name) => {
    return name.toUpperCase();
});

console.log(uppercaseNames);

// p-3
const prices = [15, 25, 40];

const fixedPrices = prices.map((price) => {
    return price + 10;
});

console.log(fixedPrices);

// p-4
const temperatures = [0, 20, 30];

const toFahrenheit = temperatures.map((temp) => {
    return (temp * 9) / 5 + 32;
});

console.log(toFahrenheit);

// p-5
const person = [
    { first: "Ava", last: "Khan" },
    { first: "Noah", last: "Ali" },
];

const fullName = person.map((name) => {
    return `${name.first} ${name.last}`;
});

console.log(fullName);

// p-6
const product = [
    { name: "Pen", price: 1.5 },
    { name: "Book", price: 12 },
];

const productDetails = product.map((product) => {
    return {
        name: product.name,
        price: "$" + product.price.toFixed(2),
    };
});

console.log(productDetails);

// p-7
const arrays = [
    [1, 2],
    [3, 4, 5],
];

const newArrays = arrays.map((innerArray) => {
    return innerArray.map((num) => {
        return num + 1;
    });
});

console.log(newArrays);

// p-8
const userDetails = [
    { name: "Mina", age: 20 },
    { name: "Rafi", age: 16 },
];

const userStatus = userDetails.map((person) => {
    return {
        name: person.name,
        status: person.age >= 18 ? "adult" : "minor",
    };
});

console.log(userStatus);

// p-9
const order = [
    {
        id: 1,
        items: [
            { quantity: 2, price: 5 },
            { quantity: 1, price: 8 },
        ],
    },
];

const lineTotals = order.map((order) => {
    return {
        id: order.id,
        items: order.items,
        lineTotals: order.items.map((item) => {
            return item.quantity * item.price;
        }),
    };
});

console.log(lineTotals);

// p-10
const users = [
    {
        id: 1,
        name: "  Maya Khan ",
        active: "yes",
        tags: ["STUDENT", "Art"],
    },
];

const userRecords = users.map((user) => {
    return {
        id: user.id,
        displayName: user.name.trim().toUpperCase(),
        isActive: user.active === "yes" ? true : false,
        tags: user.tags.map((tag) => {
            return tag.toLowerCase();
        }),
    };
});

console.log(userRecords);
