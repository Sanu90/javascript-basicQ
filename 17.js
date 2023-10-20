//program to perform basic mathematical arithmetic operations
const prompt = require('prompt-sync')()
function main(){
    let num1=parseFloat(prompt("Enter first number: "));
    let num2 =parseFloat(prompt("Enter second number: "));
    console.log(" 1.Addition\n 2.subtraction\n 3.multiplication\n 4.division\n Please choose an option from 1-4 :")
    let option=prompt("");

    if(option==1){
        addition(num1,num2);
    }else if(option==2){
        subtraction(num1,num2);
    }else if(option==3){
        multiplication(num1,num2);
    }else if(option==4){
        division(num1,num2);
    }
}
main();
function addition(num1,num2){
    let result = (num1+num2);
    console.log("Result after adding is "+result);
}
function subtraction(num1,num2){
    let result = num1-num2;
    console.log("Result after subtracting is "+result);
}

function multiplication(num1,num2){
    let result = num1*num2;
    console.log("Result after multiplying is "+result);
}

function division(num1,num2){
    let result = num1/num2;
    console.log("Result after division is "+result);
}



