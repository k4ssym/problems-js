function numOfDigits(num) {
  const numStr = Math.abs(num).toString();
  return numStr.length;
}
module.exports = numOfDigits;
