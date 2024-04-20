//78692
//Store the numbers 1 through 9 in a array.
let numbers = [1,2,3,4,5,6,7,8,9];

//using for-loop and creating varaibla one_Number and calling number in it
for(let one_Number of numbers){
    //creating variable ordinal ending and giving it string values "st ,nd, rd ,th"
let ordinalEnding:string
//making if else statement and comapring one_Number to each single digit of number
if(one_Number === 1){
    ordinalEnding ="st"
}
else if(one_Number === 2){
    ordinalEnding ="nd"
}
else if(one_Number === 3){
    ordinalEnding ="rd"
}
else {
    ordinalEnding ="th"
}
//printing  number with its ordinal number
console.log(`${one_Number}${ordinalEnding}`);
}
//2nd method
numbers.forEach(numbers =>{
    let suffix="th";
    if(numbers === 1){
        suffix="st";
    }else
    if(numbers === 2){
        suffix ="nd";
    }else
    if(numbers === 3){
        suffix ="rd";
    }
     console.log(`${numbers}${suffix}`);
    
    }
)