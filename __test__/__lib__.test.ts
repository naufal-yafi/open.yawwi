import { describe, expect, test } from '@jest/globals';
import { checkEmpty } from './__lib__/check-empty';

describe('check empty', () => {
  test('true condition', () => {
    expect(checkEmpty<string, string>('not empty', '')).toBe(0);
  });

  test('false condition', () => {
    expect(checkEmpty<string, string>('', '')).toBe(1);
  });
});
