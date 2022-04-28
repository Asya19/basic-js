const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

const SEASONS = ["winter", "winter", "spring", "spring", "spring", "summer", "summer", "summer", "autumn", "autumn", "autumn",  "winter"];

function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";

  // если массив не пустой, или если поступающие значение не дата - вернуть название месяца
  if (Object.getOwnPropertyNames(date).length > 0 || !(date instanceof Date))
    throw Error("Invalid date!");
  return SEASONS[date.getMonth()];
}

module.exports = {
  getSeason
};
