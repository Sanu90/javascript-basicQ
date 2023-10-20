
const prompt = require('prompt-sync')()
let my_string =prompt("Enter a input : ")
try{
    let reverse=my_string.split("").reverse().join(); 
    console.log(`Reversed String is : ${reverse}`);
}
catch(err_message){
    console.log(`Error : ${err_message}`);
} 
finally{
    console.log(`Type of ${my_string} is ${typeof my_string}`);
}