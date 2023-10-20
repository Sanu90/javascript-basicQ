const prompt=require("prompt-sync")()
let marks=parseFloat(prompt("Enter the marks: "));
if(marks>50&&marks<=100)
console.log("PASS")
else if(marks>100)
console.log("Marks can be a maximum of 100.")
else
console.log("FAIL")