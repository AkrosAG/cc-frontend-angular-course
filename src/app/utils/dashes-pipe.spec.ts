import { DashesPipe } from './dashes-pipe';

describe('DashesPipe', () => {
  it('create an instance', () => {
    const pipe = new DashesPipe();
    expect(pipe).toBeTruthy();
  });

  it('should replace spaces with dashes', () => {
    const pipe = new DashesPipe();
    const result = pipe.transform('Hello World Test', 0);
    expect(result).toBe('Hello-World-Test');
  });

  it('should not replace spaces for even index', () => {
    const pipe = new DashesPipe();
    const result = pipe.transform('Hello World Test', 1);
    expect(result).toBe('Hello World Test');
  });
});
