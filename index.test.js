const Calculator = require('./index')

test('n equals to itself', () => {
  const calculator = new Calculator()

  expect(calculator.calculate("1")).toStrictEqual([1]);
});

test('1 2 + equals to 3', () => {
  const calculator = new Calculator()

  expect(calculator.calculate("1 2 +")).toStrictEqual([3]);
});

test('empty string equals to empty array', () => {
  const calculator = new Calculator()

  expect(calculator.calculate("")).toStrictEqual([]);
});

test('test operand -', () => {
  const calculator = new Calculator()

  expect(calculator.calculate("3 2 -")).toStrictEqual([1]);
});

test('test operand - | can be negative', () => {
  const calculator = new Calculator()

  expect(calculator.calculate("1 2 -")).toStrictEqual([-1]);
});

test('float result', () => {
  const calculator = new Calculator()

  expect(calculator.calculate("5 2 /")).toStrictEqual([2.5]);
});

test('test operand +', () => {
  const calculator = new Calculator()

  expect(calculator.calculate("1 2 +")).toStrictEqual([3]);
});

test('test operand /', () => {
  const calculator = new Calculator()

  expect(calculator.calculate("4 2 /")).toStrictEqual([2]);
});

test('test operand *', () => {
  const calculator = new Calculator()

  expect(calculator.calculate("6 6 *")).toStrictEqual([36]);
});

test('complex operation', () => {
  const calculator = new Calculator()

  expect(calculator.calculate("5 1 2 + 4 * + 3 -")).toStrictEqual([14]);
});

test('complex operation', () => {
  const calculator = new Calculator()

  expect(calculator.calculate("5 1 2 + 4 * + 3 -")).toStrictEqual([14]);
});

test('complex operation', () => {
  const calculator = new Calculator()

  expect(calculator.calculate("5 1 2 + 4 * + 3 -")).toStrictEqual([14]);
});

test('float operation', () => {
  const calculator = new Calculator()

  expect(calculator.calculate("1.1 1 +")).toStrictEqual([2.1]);
});

/////////////////////////////// PARSING ///////////////////////////////

test('simple parse', () => {
  const calculator = new Calculator()

  expect(calculator.parsing("1")).toStrictEqual([1]);
});

test('complex parse', () => {
  const calculator = new Calculator()

  expect(calculator.parsing("5 1 2 + 4 * + 3 -")).toStrictEqual([5, 1, 2, '+', 4, '*', '+', 3, '-']);
});

test('operand only parse', () => {
  const calculator = new Calculator()

  expect(calculator.parsing("+ - *")).toStrictEqual(['+', '-', '*']);
});

test('numbers only parse', () => {
  const calculator = new Calculator()

  expect(calculator.parsing("1 2 3")).toStrictEqual([1, 2, 3]);
});

test('prefix parse', () => {
  const calculator = new Calculator()

  expect(calculator.parsing("+ - 1 2 3")).toStrictEqual(['+', '-', 1, 2, 3]);
});
