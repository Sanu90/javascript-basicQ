// Program to accept an array and display it on the console using functions
const prompt = require('prompt-sync')()

function main(){
    let array =[];
    getArray(array);
    displayArray(array);
}

main();
function getArray(array){
    
    let size =parseInt(prompt('Enter the size of array: '));
    console.log("Enter the elements of Array: ");
    for(let i=0;i<size;i++){
        array[i]=parseInt(prompt(""));
    }
}

function displayArray(array){
    console.log("Entered Array is: " +array);  
}
