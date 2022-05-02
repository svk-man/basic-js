const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chains: [],
  getLength() {
    return this.chains.length;
  },
  addLink(value) {
    if (typeof stringValue == 'string') {
      this.chains.push(value);
    } else {
      value == null ? this.chains.push('null') : this.chains.push(value);
    }

    return this;
  },
  removeLink(position) {
    position--;
    if (position >= 0 && position < this.chains.length) {
      this.chains.splice(position, 1);
    } else {
      this.chains = [];
      throw Error('You can\'t remove incorrect link!');
    }

    return this;
  },
  reverseChain() {
    this.chains.reverse();
    return this;
  },
  finishChain() {
    let chainsStr = "";
    for (let chain of this.chains) {
      chainsStr += '( ' + chain + ' )~~';
    }

    this.chains = [];

    if (chainsStr.endsWith('~~')) {
      return chainsStr.substr(0, chainsStr.length - 2);
    }

    return chainsStr;
  }
};

module.exports = {
  chainMaker
};
