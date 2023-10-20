//Program to print a number pattern

const prompt=require("prompt-sync")()
let k=0;
for(let i=1;i<=4;i++)
{   
    for(let j=1;j<=i;j++)
    {   k++;
        process.stdout.write(k+" ");  
    } console.log()   
}