function randomRangeNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}
randomRangeNumber(1, 10);
console.log(randomRangeNumber(1, 10));
module.export = randomRangeNumber;
