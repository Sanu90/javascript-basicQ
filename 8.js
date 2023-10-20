const prompt=require("prompt-sync")()
let number=parseInt(prompt("Please enter a number as limit: "));
let sum=0
for(let i=1;i<=number;i++)
{   if(i%2!=0)
    sum=sum+i
}

console.log("The sum of odd numbers in the limit is " +sum)