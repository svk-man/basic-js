const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (typeof members != "undefined" && members != null && members.length != null && members.length > 0) {
    let memberFirstLetters = [];
    for (let member of members) {
      if (typeof member == 'string') {
        memberFirstLetters.push(member.trim()[0].toUpperCase());
      }
    }

    return memberFirstLetters.sort().join('');
  }

  return false;
};
