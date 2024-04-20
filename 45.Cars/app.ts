//78692
//creating function&spread operator(...extraoptions) with its value string,creating object insideit
//asking key/property value in string and its value/answer in any data type
function store_Carinfo(manufacturer:string ,modelName:string,...extraOptions:{ [key:string]:any} []):object
{
 //making variable and calling store_carinfo values
 //using...objectassign method to define target{} and getting extrainformation insource 
 //which is already define ...extraoptions in above function
  const carInfo={
   manufacturer,
    modelName,
  ...Object.assign({},...extraOptions)
      //options.forEach(([key,value]) =>carInfo[key] =value);
  }

  return carInfo;
}

let answer=store_Carinfo("Toyota","Corolla",{color:"black"},{year:2024});
console.log(answer);