const prompt = require('prompt-sync')();

main();
function main(){
    let fArray = [];
    let sArray = [];
    let sum = [];
    let size = getArray(fArray,sArray);
    sum = addArray(fArray,sArray,sum,size);
    displayArray(sum); 
}
function getArray(fArray, sArray){
    let size =parseInt(prompt("Enter the array size: "));
    console.log("Enter the values of array 1:");
    for(let i=0;i<size;i++){
        fArray[i]=[];
        for(let j=0;j<size;j++){
            fArray[i][j] = parseInt(prompt(""));
        }
    }
    console.log("Enter the values of array 2:");
    for(let i=0;i<size;i++){
        sArray[i]=[];
        for(let j=0;j<size;j++){
            sArray[i][j] = parseInt(prompt(""));
        }
    }
    return size;
}
function addArray(fArray,sArray,sum,size){
    for(let i=0;i<size;i++){
        sum[i]=[];
        for(let j=0;j<size;j++){
            sum[i][j] = fArray[i][j] + sArray[i][j];
        }
    }
    return sum;
}

function displayArray(sum) {
   console.log(sum)
}