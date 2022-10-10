const find = require('./find');
const items = [1,2,3,4,5,5];

const result = find(items,(num)=>{
    if (num%2===0){
        return true;
    }
    return false;
    
});

console.log("First Even Number in given Array is : ",result);