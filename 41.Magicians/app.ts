//78692
//making magicians array
let magicians:string[]=["Alpha","Bravo","Charlie"];
//creating function and passing the above array init
function show_magicians(magicians:string[]){
    //using foreach to call the names in array
    magicians.forEach(magician=>{
        console.log(magician);

    });
}
//calling the function show_magician and priniting the array
show_magicians(magicians);
