//78692
//Store the numbers 1 through 9 in a array.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//using for-loop
for (let one_Number of numbers) {
    let ordinalEnding;
    if (one_Number === 1) {
        ordinalEnding = "st";
    }
    else if (one_Number === 2) {
        ordinalEnding = "nd";
    }
    else if (one_Number === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log(`${one_Number}${ordinalEnding}`);
}
//2nd method
numbers.forEach(numbers => {
    let suffix = "th";
    if (numbers === 1) {
        suffix = "st";
    }
    else if (numbers === 2) {
        suffix = "nd";
    }
    else if (numbers === 3) {
        suffix = "rd";
    }
    console.log(`${numbers}${suffix}`);
});
export {};
