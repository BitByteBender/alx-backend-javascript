export default function appendToEachArrayValue(array, appendString) {
  const res = [];

  for (const val of array) {
    res[res.length] = `${appendString}${val}`;
  }

  return res;
}
