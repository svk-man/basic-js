import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
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
}
