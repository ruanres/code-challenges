
// O(n + m)
export default function containsCommonItem(arr1, arr2) {
  const map = new Map();
  for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    map.set(element, null);
  }

  for (let j = 0; j < arr2.length; j++) {
    const element = arr2[j];
    if (map.has(element)) {
      return true;
    }
  }

  return false;
}