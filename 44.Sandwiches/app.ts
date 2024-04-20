//78692
//making function with parameter name item
function makeSandwich(item:string[]){
    console.log(`Making your sanwich with:`);
    //calling element(callback function parameter)and using Foreach to call it
    item.forEach(element =>console.log("" +element));
    console.log(`Enjoy your delicious sandwich!\n`);
}
//calling function
makeSandwich([`Tikka`,`Cheeseslice`,`Lettuce`]);
makeSandwich([`Vege`,`Cheeseslice`,`MayoGarlic`]);
makeSandwich([`Cheeseslice`,`Iceberg`,`Brocli`]);