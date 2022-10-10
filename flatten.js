const each = require('./each');
const flatten = (elements) => {
    let outPut = [];
    each(elements, (num) => {
      if (Array.isArray(num)) {
        outPut = outPut.concat(flatten(num));
      } else {
        outPut.push(num);
      }
    });
    return outPut;
  };

  module.exports=flatten;
  