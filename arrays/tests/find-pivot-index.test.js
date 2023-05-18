import pivotIndex from "../find-pivot-index";

describe('Find Pivot', () => { 
  it('should get the pivot 3', () => {
    expect(pivotIndex([1,7,3,6,5,6])).toBe(3);
  });

  it('should get the pivot 0', () => {
    expect(pivotIndex([2, -1, 1])).toBe(0);
  });

  it('should get the pivot -1', () => {
    expect(pivotIndex([-1,-1,-1,1,1,1])).toBe(-1);
  });
 })