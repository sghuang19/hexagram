const map = ["1st", "2nd", "3rd", "4th", "5th", "topmost"];

/**
 * @param index From 0 to 5
 * @param type true or false
 * @return The text corresponding to the line name
 */
export default function getLineName(index, type) {
  const indexName = map[index];
  const typeName = type ? "NINE" : "SIX";
  return indexName + typeName;
}
