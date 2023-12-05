import {increment} from "./type";

describe('Basic 1 - Types ', () => {
  it('should  be return 30', () => {
    const res: number = increment(29);
    expect(res).toBe(30);
  });
});
