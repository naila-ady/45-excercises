//78692
// making users array
let users:string[] =["Adnan" ,"Mustafa", "zain","Ali","Ayesha"];
// by using if else and .length making array empty
if(users.length === 0){
    //greeting users
    console.log( `We need to find some users!`);
}else{
    //prininting empty array by removing all guest and printing message of removal
//    users=[];
   console.log(`All users have been removed.`+ users.length )
}