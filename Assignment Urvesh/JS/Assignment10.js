//5: Dynamic Number Processor

const numbers = [23, 12, 34, 45, 56, 67, 78, 89, 90];
function dynamicNumberProcessor(...numbers) {
  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  const oddNumbers = numbers.filter((num) => num % 2 !== 0);

  const sumEven = evenNumbers.reduce((total, num) => total + num, 0);
  const sumOdd = oddNumbers.reduce((total, num) => total + num, 0);

  return { evenNumbers, oddNumbers, sumEven, sumOdd };
}

const result = dynamicNumberProcessor(...numbers);
console.log(result);