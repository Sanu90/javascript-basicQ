const prompt=require("prompt-sync")()
let marks=parseFloat(prompt("Enter your total marks: "));
if(marks<=100 && marks>=90)
console.log("Your grade is A")
else if(marks<=89 && marks>=80)
console.log("You got B Grade");
else if(marks<=79 && marks>=70)
console.log("You got C Grade");
else if(marks<=69 && marks>=60)
console.log("You got D Grade");
else if(marks<=59 && marks>=50)
console.log("You got E Grade");
else if(marks<50)
console.log("Sorry, you have FAILED")