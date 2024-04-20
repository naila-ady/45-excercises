var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//78692
//making an array of five places to visit
var places = ["Saudia Arabia", "Jordan", "Doha", "Burj Khlaifa", "China",];
//printing thearray in original order
console.log("Original Order:", places);
//printing array in alphabetical order without changing the original array 
//and copying the array and arranging
console.log("Alphabetical Order;", __spreadArray([], places, true).sort());
//again printing array in original order without changing               
console.log("Original Order:", places);
//printing array in reverse alphabetical order without changing the original array 
console.log("Reverse Alphabetical Order;", __spreadArray([], places, true).sort().reverse());
//again printing array in original order without changing      
console.log("Original Order:", places);
//priniting original array in reverse order 
places.reverse();
console.log("Reversed orignal array:", places);
//sorting and printing alphabetical order array
places.sort();
console.log("Alphabetical Order:", places);
//sorting and printing reverse alphabetical array
places.reverse();
console.log("Reverse Alphabetical Order:", places);
