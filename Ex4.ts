function countString(value: string)
{
    return value.length;
}

console.log(countString(" test 1 "));

function removeSpaces(value:string):number{
    return value.trim().length;
}

console.log(removeSpaces(" test 1 "));

function countBoth(value: string, spaces?:boolean):number
{
    let num:number;
    if (spaces)
    {
        num = value.length;
    }
    else
    {
        num = value.trim().length;
    }

    return num;
}

console.log(countBoth(" test 1 ", true));
console.log(countBoth(" test 1 ", false));
console.log(countBoth(" test 1 "));