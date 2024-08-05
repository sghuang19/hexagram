/**
 * Helper functions related to hexagram id.
 * @module idHelper
 */

/**
 * Validate a hexagram id.
 * @param {string} id
 * @return {boolean}
 */
export function isValidId(id) {
  const idRegex = /^[01]{6}$/;
  return idRegex.test(id);
}

/**
 * @returns {string} - A random hexagram id.
 */
export function getRandomId() {
  return Math.floor(Math.random() * 64)
    .toString(2)
    .padStart(6, "0");
}

/**
 * I'm not completely following the original order set by King Wen here.
 * For the first two hexagrams, 111 111 -> 111 110 (top line changes),
 * therefore binary decrement is used to calculate the next hexagram.
 */

/**
 * Get the next hexagram id.
 * @param {string} current - The current hexagram, a string of 6 binary digits.
 * @returns {string} - The string for the next hexagram.
 */
export function nextId(current) {
  let number = parseInt(current, 2);
  number--;
  if (number < 0) {
    number = 63; // back to 111 111
  }
  return number.toString(2).padStart(6, "0");
}

/**
 * Get the previous hexagram id.
 * @param {string} current The current hexagram, a string of 6 binary digits.
 * @returns {string} The string for the next hexagram.
 */
export function prevId(current) {
  let number = parseInt(current, 2);
  number++;
  if (number > 63) {
    number = 0; // back to 000 000
  }
  return number.toString(2).padStart(6, "0");
}
