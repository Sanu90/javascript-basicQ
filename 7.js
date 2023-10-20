const prompt=require("prompt-sync")()
let number=parseInt(prompt("Enter a number: "))
for(let i=1;i<11;i++)
{   let sum=number*i
    console.log(`${number} * ${i} = ${sum}`);
}
