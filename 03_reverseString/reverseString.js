const reverseString = function(string) {
  const charArr = string.split('');
  let reversedString = "";

  for (let i = charArr.length - 1; i >= 0; i--)
    reversedString += charArr[i];

  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
