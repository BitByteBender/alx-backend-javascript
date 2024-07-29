export default function cleanSet(set, startString) {
  const str = [];

  if (typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  for (const val of set) {
    if (typeof val === 'string' && val.startsWith(startString)) {
      str.push(val.slice(startString.length));
    }
  }

  return str.join('-');
}
