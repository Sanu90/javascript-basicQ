const prompt=require("prompt-sync")()
let number=parseInt(prompt("Enter a number from 1-7: "))
switch(number)
{ case 1: console.log("Sunday");
break;
case 2: console.log("Monday");
break;
case 3: console.log("Tuesday");
break;
case 4: console.log("wednesday");
break;
case 5: console.log("Thursday");
break;
case 6: console.log("Friday");
break;
case 7: console.log("Saturday");
break;
default: console.log("Invalid Entry")
}