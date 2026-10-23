const sMethod = {
    technique() {
        console.log("Mumbai cha raja");
    },
};

const rohit = Object.create(sMethod);

// rohit.technique();

/* ---------------------------------- */

const animal = {
    name1: "kutta",
    name2: "Bilai",
    name3: "Makichu",
    eat() {
        console.log("Eating...");
    },
};

const dog = Object.create(animal);

dog.eat();
console.log(dog.name1);
console.log(dog.name3);
