const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: [],
  getLength() {
   return this.result.length;
  },
  addLink(value) {
    if (value === undefined) value = ' ';
    this.result.push('( ' + value + ' )');
    return this

  },
  removeLink(position) {
    if (position < 0 || position > this.result.length || typeof(position) !== 'number') {
      this.result = [];
      throw Error();
    };
    let newResult = [];
    for (let i = 0; i < this.result.length; i++) {
     if (i !== (position - 1)) {
       newResult.push(this.result[i]);
     }
    }
    this.result = newResult;
    return this
  },
  reverseChain() {
    this.result = this.result.reverse();

    return this

  },
  finishChain() {
    finish =  this.result.join('~~');
    this.result = [];
    return finish;
  }
};

module.exports = chainMaker;
