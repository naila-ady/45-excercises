"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//78692
//1st method
//making animals array
let animals = ["dog", "cat", "rabbit"];
// using for each to call each animal from array with statement
animals.forEach(animal => {
    console.log(`A ${animal} would make a great pet.`);
});
//prinitng simple message
console.log(`Any of these animals would make a great pet!`);
//2nd method
for (let pet_Animal of animals) {
    console.log(`A ${pet_Animal} would make a great pet.`);
    console.log(`Any of these animals would make a great pet!`);
}
