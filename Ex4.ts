//Counting the total number of characters including spaces
function countString(value: string)
{
    return value.length;
}

console.log(countString(" test 1 "));

//Couting the total number of characters excluding spaces
function removeSpaces(value:string):number{
    return value.trim().length; //.trim() to remove counting spaces
}

console.log(removeSpaces(" test 1 "));

//Counting the total number of characters including or excluding spaces
function countBoth(value: string, spaces?:boolean):number
{
    let num:number;
    if (spaces)
    {
        num = value.length; //Include spaces
    }
    else
    {
        num = value.trim().length; //Exclude spaces
    }

    return num;
}

console.log(countBoth(" test 1 ", true)); //If is true it includes spaces
console.log(countBoth(" test 1 ", false)); //If is false it excludes spaces
console.log(countBoth(" test 1 ")); // //If underfined default set to false
