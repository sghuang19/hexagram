const map = ["", "1st", "2nd", "3rd", "4th", "5th", "Topmost"];

/**
 * @param {number} index From 1 to 6, as 0 is reserved for no selection
 * @param {boolean} type true or false
 * @return The text corresponding to the line name
 */
export default function getLineName(index, type) {
  const indexName = map[index];
  const typeName = type ? "NINE" : "SIX";
  return `${indexName} ${typeName}`;
}
