import plusOne from "./plus-one";

describe('Plus One', () => { 
  it('should get the value 124', () => {
    expect(plusOne([1,2,3])).toEqual([1,2,4]);
  });

  it('should get the value 1000', () => {
    expect(plusOne([9,9,9])).toEqual([1,0,0,0]);
  });
 })