//78692
let magician = ["Alpha", "Bravo", "Charlie"];
//making function  "copy_array"and return array to call original array in it
function copy_Array(arr) {
    //copying magicians array innew array called(arr)using... and returning it
    return [...arr];
}
//making a function "make-great"and bringing the array magicians inside it
//naming this parameter "magicianArray"
function make_great(magicianArray) {
    //using forloop to call each name with the great
    for (let i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = "The Great" + magicianArray[i];
    }
}
//using function to call the magicians array 
function show_magicians(magicians) {
    //using foreach to call the names in array
    magicians.forEach(element => {
        console.log(element);
    });
}
const copy_MagicianArray = copy_Array(magician);
//calling make_great function and calling the copy array
make_great(copy_MagicianArray);
console.log(`\n\nThis is my original array`);
//calling show_magicians function
show_magicians(magician);
console.log(`\n\nThis is my modified copy of the array`);
//calling show_magicians function
show_magicians(copy_MagicianArray);
export {};
