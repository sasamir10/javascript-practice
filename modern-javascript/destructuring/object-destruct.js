const user = {
    name: "Samir",
    age: 22,
    passion: "Programming",
};

const { name: userName, age: userAge } = user; // using aliases for change property name
const { hobby = "Explore the World" } = user;
const { name, ...rest } = user;

console.log(rest);

// Nested object destructuring
const me = {
    names: "Samir",
    ages: 26,
    dream: {
        hobbys: "Explore the Whole World",
        time: 28,
        destination: "Most adventurues place",
    },
};

const {
    names,
    ages,
    dream: { time },
} = me;

console.log(time);
