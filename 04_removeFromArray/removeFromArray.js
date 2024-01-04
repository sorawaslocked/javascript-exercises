const removeFromArray = function() {
  let args = Array.from(arguments)
  let array = args[0];
  args.shift()
  
  
  for (const argument of args) {
    for (let i = 0, size = array.length; i < size; i++) {
      if (array[i] === argument) {
        array.splice(i, 1);
        size--;
        i--;
      }
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
