// http://courses.ics.hawaii.edu/ics314s18/morea/coding-standards/inclass-five-problems-3.html

function fib() {
  const numbers = [0, 1];

  for (let i = 0; i < 98; i++) {
    numbers.push(numbers[numbers.length - 2] + numbers[numbers.length - 1]);
  }

  return numbers;
}

function numsToStrings(numbers) {
  return _.map(numbers, number => number.toString());
}

function numEvenNums(numbers) {
  return _.reduce(numbers, (memo, number) => (number % 2 === 0 ? memo + 1 : memo), 0);
}

console.log(fib());
console.log(numsToStrings(fib()));
console.log(numEvenNums(fib()));
