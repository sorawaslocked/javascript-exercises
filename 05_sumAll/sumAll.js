const sumAll = function(start, end) {
  if (typeof(start) !== 'number' || typeof(end) !== 'number')
    return "ERROR";

  if (start < 0 || end < 0)
    return "ERROR";
  
  let sum = 0;
  if (start > end)
    [start, end] = [end, start]

  for (let number = start; number <= end; number++)
    sum += number;
  
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
