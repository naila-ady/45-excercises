//78692
//creating function of diiferent cities of pakistan(default coountry)
function describe_city( city: string, country:string ="Pakistan"){
// it will ask for city ontime but conutry is given 
    console.log(`The city ${city} is in ${country}.`);
}
//calling city function from describe_city
describe_city("Karachi");
describe_city("Lahore");
//calling city function from describe_city but giving country not in the function
describe_city("Doha" ,"Qatar")