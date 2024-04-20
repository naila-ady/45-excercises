//78692
// 1st Method


//array of five usernames including admin
let userName: string[] = ["Admin","User1","User2","User3","User4"];
// Loop through the array, and printing a greeting to each user:
userName .forEach(userName=> {
if(userName ==="Admin"){
        console.log(" Hello Admin, would you like to see a status report?");
}else{
        console.log(`Hello ${userName}, thank you for logging in again.`);
}
})

//2nd method
for(let i=0; i<userName.length; i++){
    if(userName[i] ==='Admin'){
        console.log(" Hello Admin, would you like to see a status report?");
    }
    else{console.log(`Hello ${userName[i]}, thank you for logging in again?`);
}

    }
    
    
