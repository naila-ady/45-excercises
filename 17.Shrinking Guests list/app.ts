//78692
//code reused from exercise 15 2nd method with chnaged guests.
let guest_list=["Mr.kamran Tessori","Mr.Zia khan","Mr.Daniyal Nagori","Mr.Faisal Mehmood" ]
//removing 1st guest  
let guest_unavailable=guest_list[0];
console.log('Our Dear   ' + guest_unavailable+' is unavailable to come due to an urgent foreign visit.\n');
//adding new guest in the beginning
guest_list.splice(0, 1,"Miss.Hira Khan");
//console.log(`\nRespected Sir/Madam,\n${new_guest}\nIt would be honour for me to have you at a dinner.\nAwiaitng to Welcome You at\nVenue:Bellagio Banquet\nDated:25-mar-24\nThankyou\n`));
//coding for exercise 16
console.log("Luckily I found a bigger table for Dinner at Bellagio Restaurant.");
//adding new guest in the beginning
guest_list.unshift("Mr.Bashir Farooqi");
//adding new guest in the last
guest_list.push("Mr.Zafar Abbas");
//getting a  middle index(center of the guest list) of guest list
let middle_Index:number=Math.floor(guest_list.length/2);
//adding a new guest in middle
guest_list.splice(middle_Index, 0, "Mr.Qasim");
console.log('New list of invited guests\n');
//reinvting all added guests
guest_list.forEach(addedguests => console.log(`Respescted Sir/Madam,\n${addedguests}\nIt would be honour for me to have you at a dinner.\nAwiaitng to Welcome You at\nVenue:Bellagio Restaurant\nDated:25-mar-24\nThankyou\n`));
console.log("Unavailbility of space,Only two persons are invited.");
//coding for excecise 17
//removing all  guest except for 2
while(guest_list.length>2){
    let removed_Guest=guest_list.pop();
    console.log(`Sorry,${removed_Guest} for cancelling the invitation for dinner`)
    
}
//making new invitation  for two remaining persons
for(let i=0;i<guest_list.length;i++){
    console.log(`Respected Sir/Madam\n`+ guest_list[i] +`\nYou are still invited\nThankyou`);
}
//removing all guest
guest_list.splice(0,2);
//prininting blank list
console.log(guest_list);