function numOfDigits(int) {
  if (num === 0) {
    return 1; // Special case for 0
  }
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
}
module.exports = numOfDigits;
