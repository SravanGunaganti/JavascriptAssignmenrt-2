const each = require('./each');
const items = [1,2,3,4,5,5];
const result= each(items,(num,index)=>{
    console.log(`Number at index'${index}' is ${num} `)
});

//---------OUTPUT---------
// Number at index'0' is 1 
// Number at index'1' is 2 
// Number at index'2' is 3 
// Number at index'3' is 4 
// Number at index'4' is 5 
// Number at index'5' is 5
