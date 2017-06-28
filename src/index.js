import uniqueRandomArray from 'unique-random-array'
import starWarsNames from './star-wars-names.json'
var getRandomItem = uniqueRandomArray(starWarsNames)

const random = num => {
  if (num !== undefined && Number(num) !== 'NaN') {
    const array = []
    for (let i = 0; i < num; i++) {
      array.push(getRandomItem())
    }
    return array
  }
  return getRandomItem()
}

module.exports = {
  all: starWarsNames,
  random
}