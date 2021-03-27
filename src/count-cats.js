const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  for(let i = 0; i < matrix.length; i++) {
    while (matrix[i].indexOf("^^") > -1) {
      count++;
      matrix[i].splice(matrix[i].indexOf("^^"), 1);
    }
  } return count;
};
