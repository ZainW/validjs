import { test, describe, assert }from 'vitest';
import { email } from './../src/email';

describe('email', () => {
  test('should return true for valid email', () => {
    assert.equal(email('zain@test.com'), true);
  });

  test('should return false for invalid email', () => {
    assert.equal(email('zain@test'), false);
    assert.equal(email('zaintest'), false);
    assert.equal(email('zaintest.com'), false);
  });
});