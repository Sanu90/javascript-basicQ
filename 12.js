//program to sort an array in descending order

const prompt = require("prompt-sync")();
var size=prompt("Enter the size of the array:");
const array=[];
console.log("Enter the elements of array: ");
for(let i=0;i<size;i++)
{
       array.push(prompt());
}
for(let i=0;i<size;i++)
{   for(let j=i+1;j<size;j++)
    {
            if(array[i]<array[j])
            {   let temp=array[i];
                array[i]=array[j];
                array[j]=temp;
            }
    }
}
console.log(array);
