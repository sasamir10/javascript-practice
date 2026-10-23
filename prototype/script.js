const sMethod = {
    technique() {
        console.log("Mumbai cha raja");
    },
};

const rohit = Object.create(sMethod);

rohit.technique();

/* ---------------------------------- */

const animal = {
    eat() {
        console.log("Eating...");
    },
};

const dog = Object.create(animal);

dog.breed = "Labrador";

console.log(dog.breed);
dog.eat();
console.log(dog.sleep);
