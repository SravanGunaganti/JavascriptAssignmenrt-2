const filter = require('./filter');
const items = [1,2,3,4,5,5];

const result = filter(items,(num)=>{
    if (num%2===0){
        return num;
    }
    
});

console.log("Even Array:",result);

//---------OUTPUT---------
//Even Array: [ 2, 4 ]