
const prompt=require('prompt-sync')();
let userHeight = parseInt(prompt("Enter your height : "));
try{
    if (isNaN(userHeight)){
        throw("notANumberError");
    }else if(userHeight>200){
        throw("HugeHeightError");
    }else if(userHeight<40){
        throw("TinyHeight Error");
    }
    else{
        console.log("Valid Height entered.");
    }
}catch(err){
    console.log(err);
}