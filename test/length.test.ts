import { test, assert, describe } from 'vitest';
import { min, max, between } from '../src';

describe('String min', () => {
  test('empty string', () => {
    assert.equal(min('', 5), false);
  });
  test('empty string with spaces', () => {
    assert.equal(min(' ', 1), false);
  });

  test('existing string', () => {
    assert.equal(min('This is a sentence', 0), true);
  });
});

describe('Number min', () => {
  test('negative number', () => {
    assert.equal(min(-1, 0), false);
  });
  test('zero', () => {
    assert.equal(min(0, 0), true);
  });
  test('positive number', () => {
    assert.equal(min(1, 0), true);
  });
});

describe('String max', () => {
  test('empty string', () => {
    assert.equal(max('', 5), true);
  });
  test('empty string with spaces', () => {
    assert.equal(max(' ', 1), true);
  });

  test('existing string', () => {
    assert.equal(max('This is a sentence', 0), false);
  });
});


describe('Number max', () => {
  test('negative number', () => {
    assert.equal(max(-1, 0), true);
  });
  test('zero', () => {
    assert.equal(max(0, 0), true);
  });
  test('positive number', () => {
    assert.equal(max(1, 0), false);
  });
});


describe('String between', () => {

  test('empty string', () => {
    assert.equal(between('', 1, 5), false);
  });
  test('empty string with spaces', () => {
    assert.equal(between(' ', 0, 1), true);
  });

  test('existing string', () => {
    assert.equal(between('This is a sentence', 0, 10), false);
    assert.equal(between('This is a sentence', 0, 20), true);
  });

});