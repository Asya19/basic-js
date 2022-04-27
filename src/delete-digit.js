const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let array = n.toString().split(''); // конвертировали число в строку и создали массив

  let result = array.map((el, idx, copy) => {
    copy = array.slice(0);
    copy.splice(idx, 1);
    return Number(copy.join(''));
  });
  return Math.max(...result);
}

module.exports = {
  deleteDigit
};
