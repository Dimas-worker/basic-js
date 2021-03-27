const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options)  {
  if (options.separator === undefined) options.separator = '+';
  if (options.additionSeparator === undefined) options.additionSeparator = '|';
  if (options.addition === undefined) options.addition = '';
  let add = options.addition;
  if (options.additionRepeatTimes) {
    while (options.additionRepeatTimes - 1) {
      add += ( options.additionSeparator + options.addition);
      options.additionRepeatTimes--;
    };
  }
  str += add;

  if (options.repeatTimes) {
    let addd = '';
    while (options.repeatTimes - 1) {
      addd += (options.separator + str);
      options.repeatTimes--;
    };
    str += addd;
  }
  return str
}