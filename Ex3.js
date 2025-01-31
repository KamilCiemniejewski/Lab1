//boolean
var flag = true;
console.log("Value assigned to flag is: " + flag);
//string
var myName = "Kamil";
console.log("Hello, " + myName);
//number
var val = 6.25;
console.log("The value is: " + val);
//generic
var unKnown = "gdsjkawponm";
console.log("The value of unKnown is " + unKnown);
//array
var myArray = ["nzsl", "sdjaio", "dsadsa"];
var mySecondArray = [1, 3, 4];
for (var i = 0; i < mySecondArray.length; i++) {
    console.log("Item: " + mySecondArray[i] + " is in my SecondArray.");
}
mySecondArray.forEach(function (elem) {
    console.log("Element: " + elem);
});
