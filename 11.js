//program to find the number of even numbers in an array

const prompt = require("prompt-sync")();
let count=0;
var size=parseInt(prompt("Enter the size of the array:"));
const array=[]
console.log("Enter the elements of array: ")
for(let i=0;i<size;i++)
{   array.push(prompt())
    {   
        if(array[i]%2==0)
{   count++;
}
    }
}

console.log("Number of even numbers in the array:" +count);



