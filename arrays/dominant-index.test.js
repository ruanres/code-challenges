import dominantIndex from "./dominant-index";

describe('Dominant index', () => { 
  it('should get index 1', () => {
    expect(dominantIndex([3,6,1,0])).toBe(1);
  });

  it('should get index -1', () => {
    expect(dominantIndex([1,2,3,4])).toBe(-1);
  });
})