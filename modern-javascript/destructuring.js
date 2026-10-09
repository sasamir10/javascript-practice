// Array Destructuring

let arr = [40, 89, 56, 70, 45, 10];

let [ty, , tr, , ew] = arr;

// console.log(ty, tr, ew);

// object destructuring

let person = {
    name: "Samir",
    role: "Unemployer",
    age: 25,
    friend: {
        names: "Hridi",
        role: "Special Friend",
        ages: 22,
    },
};

// let { age: boyosh, role } = person;
let {
    name,
    friend: { names, role, ages },
    age,
} = person;

console.log(name, names, role, ages, age);
// console.log(role);
