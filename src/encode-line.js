const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split(''); // разбиваем строку на массив строк без пробелов // [ 'a', 'a', 'b', 'b', 'b', 'c' ]
  let res = [];
  let countSymbol = 1;

  for (let i = 0; i < arr.length; i++ ) {
    let encode;
    if (arr[i] === arr[i + 1]) { // берем символ и считает сколько раз он встретился
      countSymbol++;
    }
    else {
      // если символ один, то пишем только его, иначе - количесвто символов и сам символ
      countSymbol === 1 ? encode = `${arr[i]}` : encode = `${countSymbol}${arr[i]}`;
      res.push(encode); // полученные данные добавляем в массив
      countSymbol = 1;
    }
  }
  return res.join(''); // разделяем массив на строку без пробелов

}
// console.log(encodeLine('aabbbc'));

module.exports = {
  encodeLine
};
