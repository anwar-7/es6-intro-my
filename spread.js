const numbers = [10, 20, 1, 5, 50, 25, 30, 40];

numbers.push(99);
const max = Math.max(...numbers);
const min = Math.min(...numbers);
// console.log(`This is the maximum: ${max}, This is the minimum: ${min}`);

numbers.push(99);
// numbers.pop();
console.log(`This is the maximum: ${max}, This is the minimum: ${min}`);
console.log(numbers);
