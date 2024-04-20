//78692
//array of five current users
let current_users = ["Husain", "Muhammad", "Adnan", "Zahid", "Saad"];
//array of  new users and two from current user arrray
let new_users = ["Adnan", "Usman ", "Muhammad", "Rizwan", "Qadir"];
//loop through new users to check user availiblity using foreach method 
new_users.forEach(n_users => {
    //making condition for username already exist and 
    //converting to lowercase then copmaring and save it to our_condition variable 
    let our_condition = current_users.some(c_users => c_users.toLowerCase() === n_users.toLowerCase());
    //using if else and printing different message for both conditions
    if (our_condition) {
        console.log(`sorry ${n_users} is already used!`);
    }
    else {
        console.log(`This username${n_users} is available!`);
    }
});
export {};
