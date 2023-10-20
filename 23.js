const prompt = require('prompt-sync')()
class array{
    main(){
        const array = [];
        this.getArray(array);
        this.displayArray(array);
    }
    
    getArray(array){ 
        let size = prompt("Enter the size of array: ");
        for(let i=0;i<size;i++){
            array[i] = [];
            for(let j=0;j<size;j++){
                array[i][j]=prompt(`Enter a value for array[${i}][${j}]:`);
            }
        }
    }
    displayArray(array){
        console.log(array);
    }
}

let object = new array();
object.main();