// JS Arrow Function

const greet = (name) => {
    return `Hello ${name}`;
};

// console.log(greet("Samir"));

const sumNum = (a, b) => {
    return a + b;
};

// console.log(sumNum(70, 30));
// console.log(this);

let person1 = {
    name: "Virat",
    game: "Cricket",
    age: 38,
    showName: function () {
        return this.name;
    },
};

let person2 = {
    name: "Messi",
    game: "Football",
    age: 39,
    showName: function () {
        return this.name;
    },
    showAge: () => {
        return this.age;
    },
};

// console.log(person1.showName());
console.log(person2.showAge());
