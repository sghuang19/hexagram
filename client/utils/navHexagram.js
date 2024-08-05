/**
 * I'm not completely following the original order set by King Wen here.
 * For the first two hexagrams, 111 111 -> 111 110 (top line changes),
 * therefore binary decrement is used to calculate the next hexagram.
 */

/**
 * Get the next hexagram.
 * @param current The current hexagram, a string of 6 binary digits.
 * @return The string for the next hexagram.
 */
export function nextHexagram(current) {
  let number = parseInt(current, 2);
  number--;
  if (number < 0) {
    number = 63; // back to 111 111
  }
  return number.toString(2).padStart(6, "0");
}

/**
 * Get the next hexagram.
 * @param current The current hexagram, a string of 6 binary digits.
 * @return The string for the next hexagram.
 */
export function prevHexagram(current) {
  let number = parseInt(current, 2);
  number++;
  if (number > 63) {
    number = 0; // back to 000 000
  }
  return number.toString(2).padStart(6, "0");
}
