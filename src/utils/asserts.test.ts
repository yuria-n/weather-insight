import { assert } from './asserts';

describe('asserts > assert', () => {
  test('should not throw an error if value is true', () => {
    expect(() => assert(true)).not.toThrow();
  });

  test('should throw an error if value is false', () => {
    expect(() => assert(false)).toThrow();
  });

  test('should throw an error with the provided message if value is false', () => {
    const message = 'This is an error message';
    expect(() => assert(false, message)).toThrow(message);
  });

  test('should not throw an error if value is true with a message', () => {
    const message = 'This should not throw';
    expect(() => assert(true, message)).not.toThrow();
  });
});
