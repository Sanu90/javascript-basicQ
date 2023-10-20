//program to add two dimensional arrays

const prompt = require('prompt-sync')()
let size = prompt('Enter the size of arrays:');
let array1=[];
let array2=[];
let add=[];
console.log("Enter the elements of Array 1 :");
for(let i=0;i<size;i++){
    array1[i]=[]
    for(j=0;j<size;j++){
        array1[i][j]=parseInt(prompt(""));
    }
}
console.log("Enter the array 2 elements :");
for(let i=0;i<size;i++){
    array2[i]=[]
    for(j=0;j<size;j++){
        array2[i][j]=parseInt(prompt(""));
    }
}

for(let i=0;i<size;i++) {
    add[i]=[]
    for(let j=0;j<size;j++){
        add[i][j]=array1[i][j]+array2[i][j] ;
    }
}
console.log("Sum of two array is ");
console.log(add);