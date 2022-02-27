import { test, assert, describe } from 'vitest';
import { required } from '../src';

test('required base case', () => {
  assert.equal(required(null), false);
});


describe('String required', () => {
  test('empty string', () => {
    assert.equal(required(''), false);
  });
  test('empty string with spaces', () => {
    assert.equal(required(' '), false);
  });

  test('existing string', () => {
    assert.equal(required('This is a sentence'), true);
  });
});