const each =require('./each');

const map = (elements, cb) => {
    const newArray = [];
    each(elements, (element, index) => {

      newArray[index] = cb(element);
    });
    return newArray;
  };

  module.exports = map;