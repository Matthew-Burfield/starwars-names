var uniqueRandomArray = require('unique-random-array')
var starWarsNames = require('./star-wars-names.json')
var getRandomItem = uniqueRandomArray(starWarsNames)

const random = num => {
  if (num && Number(num) !== 'NaN') {
    array = []
    for (let i = 0; i < num; i++) {
      array.push(getRandomItem())
    }
    return array
  }
  return getRandomItem()
}

module.exports = {
  all: starWarsNames,
  random: random
}