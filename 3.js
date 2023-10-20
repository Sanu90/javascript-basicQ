const prompt=require("prompt-sync")()
let principal=parseInt(prompt("Please enter the principal amount: "));
let roi=parseFloat(prompt("Please enter the rate of interest: "));
let years=parseFloat(prompt("Please enter the number of years: "));
const sInterest=(principal*roi*years)/100;
console.log("Simple Interest calculated is:" +sInterest);
