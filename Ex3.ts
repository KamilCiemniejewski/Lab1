//boolean
let flag: boolean = true;
console.log("Value assigned to flag is: "+flag);

//string
let myName: string = "Kamil";
console.log("Hello, " + myName);

//number
let val: number = 6.25;
console.log("The value is: " + val);

//generic
let unKnown: any = "gdsjkawponm";
console.log("The value of unKnown is " + unKnown);

//array
let myArray: Array<string> = ["nzsl", "sdjaio", "dsadsa"];
let mySecondArray: number[] = [1,3,4];

for(let i = 0; i < mySecondArray.length; i++)
{
    console.log("Item: " + mySecondArray[i] + " is in my SecondArray.");
}

mySecondArray.forEach(
    (elem)=>{
        console.log("Element: "+elem);
    }
)