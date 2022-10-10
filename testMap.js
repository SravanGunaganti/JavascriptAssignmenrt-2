const map = require('./map');
const items = [1,2,3,4,5,5];

const result = map(items,(num)=>{
    return num*num ;
});

console.log('Squares Of Given Array :',result);

//---------OUTPUT---------
//Squares Of Given Array : [ 1, 4, 9, 16, 25, 25 ]