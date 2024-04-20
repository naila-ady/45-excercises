//1st method
let transportation :string[]=["aeroplane","helicopter","car","bike",];
for(let i=0;i<transportation.length; i++){
    console.log(`I would like to own a `+ transportation[i])
}
//2nd method



let transportationMode=["Jet plane","Helipad","Honda125","Feerari"];
//putting the transportation in (mode) to print one by one
transportationMode.forEach(mode => console.log (`I would like to own a ${mode}`));