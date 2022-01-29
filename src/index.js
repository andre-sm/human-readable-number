module.exports = function toReadable (number) {
  const ones = {0 : 'zero', 1 : 'one', 2 : 'two', 3 : 'three', 4 : 'four', 5 : 'five', 6 : 'six', 7 : 'seven', 8 : 'eight', 9 : 'nine', 
  10 : 'ten', 11 : 'eleven', 12 : 'twelve', 13 : 'thirteen', 14 : 'fourteen', 15 : 'fifteen', 16 : 'sixteen', 17 : 'seventeen', 18 : 'eighteen', 19 : 'nineteen'};
  const tens = {2 : 'twenty', 3 : 'thirty', 4 : 'forty', 5 : 'fifty', 6 : 'sixty', 7 : 'seventy', 8 : 'eighty', 9 : 'ninety'};

  const result = toReadableNum(number);

  function toReadableNum (n) {
    let numString = n.toString();

    if(n < 20) return ones[n];

    if(n < 100) {
      if (n % 10 === 0) {
        return tens[numString[0]];
      } else {
        return tens[numString[0]] + ' ' + toReadableNum(numString[1]);
      }
     }

    if(n < 1000) {
      if(n % 100 === 0) {
        return toReadableNum(numString[0]) + ' hundred';
      } else {
        return toReadableNum(numString[0]) + ' hundred ' + toReadableNum(+numString.slice(-2));
      }
    }
  }
return result;
}
