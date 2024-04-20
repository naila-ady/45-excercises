//78692
let magicians: string[]=["Alpha","Bravo","Charlie"];

 //making a function "make-great"and bringing the array magicians inside it
 //naming this parameter "magicianArray"
function make_great(magicianArray:string[]){
  //using forloop to call each name with the great
    for(let i = 0 ; i < magicianArray.length ; i++){  
        magicians[i]="The Great" + magicianArray [i]
    }
    }
   //using function to call the magicians array 
   function show_magicians(magician:string[]){
//using foreach to call the names in array
   magicians.forEach(element=>{
    console.log(element);
   })
   }
//calling make_great function
make_great(magicians);
//calling show_magicians function
show_magicians(magicians);