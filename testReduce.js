const reduce = require('./reduce');
const items = [1,2,3,4,5,5];

const result = reduce(items,(initial,next)=>{
    return initial+next;
    
},0);

console.log(result);
//---------OUTPUT---------
//20