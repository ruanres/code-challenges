import containsCommonItem from "../contains-common-item";

describe('containsCommonItem', () => { 
  const arr1 = ['a', 'b', 'c', 'x'];

  it('should be false', () => {
    const arr2 = ['z', 'y', 'i'];
    expect(containsCommonItem(arr1, arr2)).toBeFalsy();
  });

  it('should be true', () => {
    const arr2 = ['z', 'y', 'x'];
    expect(containsCommonItem(arr1, arr2)).toBeTruthy();
  });
 })