const filter = (elements, cb) => {
    const newArr = [];
    for (let i = 0; i < elements.length; i++) {
      if (cb(elements[i])) {
        newArr.push(elements[i]);
      }
    }
    return newArr;
  };

module.exports=filter;