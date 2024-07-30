export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const counter = weakMap.get(endpoint) || 0;

  if (counter >= 4) throw new Error('Endpoint load is high');

  weakMap.set(endpoint, counter + 1);
}
