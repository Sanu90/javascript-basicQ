//program to find the number of even numbers in an array

const prompt = require("prompt-sync")();
let count=0;
var size=parseInt(prompt("Enter a number: "));
for(let i=1;i<=size;i++)
{   if(size%i==0)
    {  count=count+1;
     }
}
if(count==2)
{
console.log("PRIME");
}
else
{   console.log("NOT A PRIME");}


