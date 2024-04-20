//78692 
//"Testing equality and in equality with strings''"
//1st method
console.log("Testing equality with strings:","laptop"=="laptop");
console.log("Testing inequality with strings:",("laptop" as string)=="Desktop");

//2nd method
console.log("Testing equality with strings:","Apple"==="Apple");
console.log("Testing inequality with strings:",("Apple" as string )!="orange");

//Testing lower case function
console.log("Testing lower case function:","HELLO".toLowerCase() ==="hello");
console.log("Testing lower case function:","HELLO".toLowerCase() ==="Hello");

//Numerical tests involving equality and inequality
console.log("Equality in numbers:",55===55);
console.log("In-Equality in numbers:",55!=55);

//greater than and less than
console.log("greater than",50>25);
console.log("Less than",50<25);

//greater than or equal to, 
console.log("greater than or equal to:",10>=10);
console.log("greater than or equal to:",10>=100);

// less than or equal to
console.log("less than or equal to:",10<=10);
console.log("less than or equal to:",100<=10);

//Tests using "and" operators
console.log("and operators test:",6===6 && 6 >= 6);
console.log("and operators test:",6===6 && 6 > 6);

//Tests using  "or" operators
console.log("or operators test:",6===6 ||6> 6);
console.log("or operators test:",(6===7 as number) || 6> 6);

//Testing whether an item is in a array
let clothes:string[]=["T-shirt", "Jacket","Woodie","Jeans"];
console.log('Test "Jeans" in array:',clothes.includes("Jeans"));
console.log('Test "Coat" in array:',clothes.includes("Coat"));

//Testing whether an item is not in a array
let mobile:string[]=["I-phone", "Nokia","Samsung","I-tel"];
console.log('Test "samsung" in array:',mobile.includes("Samsung"));
console.log('Test "samsung" in array:', !mobile.includes("Samsung"));