export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) throw Error('Position outside range');

  const bfr = new ArrayBuffer(length);
  new DataView(bfr).setInt8(position, value);

  return new DataView(bfr);
}
