//78692
//making an array of five places to visit
let places:string[]=["Saudia Arabia","Jordan","Doha","Burj Khlaifa","China",];
//printing thearray in original order
console.log("Original Order:",places);
//printing array in alphabetical order without changing the original array 
//and copying the array and arranging
console.log("Alphabetical Order;",[...places].sort());
//again printing array in original order without changing               
console.log("Original Order:",places);
//printing array in reverse alphabetical order without changing the original array 
console.log("Reverse Alphabetical Order;",[...places].sort().reverse());
//again printing array in original order without changing      
console.log("Original Order:",places);
//priniting original array in reverse order 
places.reverse();
console.log("Reversed orignal array:",places);
//sorting and printing alphabetical order array
places.sort();
console.log("Alphabetical Order:",places);
//sorting and printing reverse alphabetical array
places.reverse();
console.log("Reverse Alphabetical Order:",places);