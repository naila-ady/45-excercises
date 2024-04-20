//1st method
var transportation = ["aeroplane", "helicopter", "car", "bike",];
for (var i = 0; i < transportation.length; i++) {
    console.log("I would like to own a " + transportation[i]);
}
//2nd method
var transportationMode = ["Jet plane", "Helipad", "Honda125", "Feerari"];
//putting the transportation in (mode) to print one by one
transportationMode.forEach(function (mode) { return console.log("I would like to own a ".concat(mode)); });
