// Exaple One

// const person = {
//     name: 'Alexander Earle',
//     age: 1
// }

// The export for the 'person' data object
// module.exports = person;

// Example Two

class Person {

    // Constructor that accepts the user name and age
    constructor(name, age) {

        this.name = name;
        this.age = age;

    }

    // Function that greets the user with their name and age
    greeting() {

        console.log(`My name is ${this.name} and I am ${this.age}`)

    }

}

// The export for the class 'Person'
module.exports = Person;