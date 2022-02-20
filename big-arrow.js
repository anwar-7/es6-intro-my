// adding with arrow function
const add = (num1, num2) => num1 + num2;
const sum = add(90, 10);
// multiply with arrow function
const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(2, 2, 2);
// ten times calculation with arrow function
const tenTimes = (num) => num * 10;
const output = tenTimes(17);
// five times without parameter bracket arrow function
const fiveTimes = (num) => num * 5;
const value = fiveTimes(10);
// without parameter arrow function
const getName = () => value + output;
const name = getName();
// multiline arrow function
const doMath = (x, y) => {
  const sum = x + y;
  const diff = x - y;
  const result = sum * diff;
  const output = result * 5;
  return output;
};

const total = doMath(10, 12);
console.log(name);
