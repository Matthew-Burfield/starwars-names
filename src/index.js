var uniqueRandomArray = require('unique-random-array')
var starWarsNames = require('./star-wars-names.json')
var getRandomItem = uniqueRandomArray(starWarsNames)

function random(num) {
  if (num && Number(num) !== 'NaN') {
    array = []
    for (var i = 0; i < num; i++) {
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