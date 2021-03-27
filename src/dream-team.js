const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let newCode = [];
  if (!(Array.isArray(members))) {
    return false;
  }
  for(let i = 0; i < members.length; i++) {
    if (typeof(members[i]) === 'string') {
      newCode.push(members[i].trim()[0].toUpperCase());
    }
  } return newCode.sort().join('');
};
