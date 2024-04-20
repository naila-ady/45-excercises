//78692
//code reused from exercise 14
let guests_List=["Mr.Kamran Tessori","Mr.Zia khan","Mr.Daniyal Nagori","Mr.Faisal Mehmood"]
guests_List .forEach(guests =>console.log(`Respected Sir/Madam,\n${guests}\nIt would be honour for me to have you at a dinner.\nAwiaitng to Welcome You at\nVenue:Bellagio Restaurant\nDated:25-mar-24\nThankyou\n`));

//code for exercise 15
//using .shift to remove a name from the start of array
console.log(`Our Dear ${guests_List.shift()} is unable to come due to an urgent foreign visit.`); 
//using .unshift to add a name
guests_List.unshift("Miss.Hira Khan");
console.log(`New Invitation For:\n`+guests_List);
// sending  new invitation
guests_List.forEach(new_guest=>console.log(`\nRespected Sir/Madam,\n${new_guest}\nIt would be honour for me to have you at a dinner.\nAwiaitng to Welcome You at\nVenue:Bellagio Restaurant\nDated:25-mar-24\nThankyou\n`));

//2nd method un comment if want to run the code
//let g_list=["Adnan","Mustafa","Ali","Zain"];
//let g_unavailable=g_list[0];
//console.log(g_unavailable+' is ill and cannot attend the dinner.');
//g_list.splice(0, 1,"Muhammad");
//g_list.forEach(guests=>console.log (`Dear ${guests}, you are invited at a dinner at my home on coming sunday.`));