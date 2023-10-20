//program to identify whether a string is a palindrome or not

const prompt = require("prompt-sync")();
let count,length;
let name=prompt("Enter a string: ");
let reverse = name.split("").reverse().join("");
if(name==reverse){
    console.log(`${name} is a Palindrome`);
}else{
    console.log(`${name} is not Palindrome`);
}

//The split() method splits a String object into an array of string by separating the string into sub strings.
//The reverse() method reverses an array. 
//The join() method joins all elements of an array into a string.