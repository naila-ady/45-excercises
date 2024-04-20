//78692
//making array of favourite fruit
var favourite_Fruits = ["Peach", "Cherry", "Avacado"];
// if statement to check a fruit in the array
if (favourite_Fruits.includes("Peach")) {
    console.log('You really like Peach!');
    if (favourite_Fruits.includes("Cherry")) {
        console.log('You really like Cherry!');
        if (favourite_Fruits.includes("Avacado")) {
            console.log("You really like Avacado!");
            if (favourite_Fruits.includes("mango")) {
                console.log("You really like mango!");
                if (favourite_Fruits.includes("Strawbwerry")) {
                    console.log("You really like strawberry!");
                }
            }
        }
    }
}
