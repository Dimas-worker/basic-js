const CustomError = require("../extensions/custom-error");

function hasArray(arr) {
  return arr.some(item => Array.isArray(item))
}

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    if (hasArray(arr)) {
      let newArr = arr.flat();
      return count + this.calculateDepth(newArr);
    }
  return count;
  }
};