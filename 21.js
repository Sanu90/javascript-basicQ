//Program to multiply the adjacent values of an array and store it in an another array


const prompt = require('prompt-sync')();
let size = prompt("Enter the array limit : ");
let array = [];
let sArray = [];
let i;
console.log("Enter the values of array:");
for (i=0; i<size; i++) {
    array.push(prompt(""));
}
for(i=0;i<size-1;i++){
    sArray[i] = array[i]*array[i+1];
}
console.log("Resultant Array is: "+sArray);