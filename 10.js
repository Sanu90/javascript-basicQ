const prompt = require("prompt-sync")();

var size=parseInt(prompt("Enter the size of the array:"));
const array1=[]
const array2=[]
console.log("Enter elements of array 1: ")
for(let i=0;i<size;i++)
{   array1.push(prompt())
}
console.log("Array 1 elements: " +array1)
console.log("\n")
console.log("Enter elements of array 2: ")
for(let i=0;i<size;i++)
{   array2.push(prompt())
}
console.log("Array 2 elements: " +array2)
console.log("\n")

for(let i=0;i<size;i++)
{
    let temp=array1[i];
    array1[i]=array2[i];
    array2[i]=temp;
}
console.log("Array 1 elements after swapping: " +array1);
console.log("Array 2 elements after swapping: " +array2);