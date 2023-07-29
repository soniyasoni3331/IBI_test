const arr = [1, 2, 3, 4, 5];

const reversedArr = arr.reduce((accumulator, currentValue) => {
  // Add the current value to the beginning of the accumulator array
  return [currentValue, ...accumulator];
}, []);

console.log(reversedArr); // Output: [5, 4, 3, 2, 1]
