var expect = require('chai').expect
var starWars = require('./index')

describe('starwars-names', function() {
  it('should work!', function() {
    expect(true).to.be.true
  })
})

describe('all', () => {
  it('should be an array of strings', () => {
    const isArrayOfStrings = array => (
      array.every(item => typeof item === 'string')
    )

    expect(starWars.all).to.satisfy(isArrayOfStrings)
  })

  it('should contain Luke Skywalker', () => {
    expect(starWars.all).to.include('Luke Skywalker')
  })
})

describe('random', () => {
  it('should return a random item from the starwars.all', () => {
    const randomItem = starWars.random()
    expect(starWars.all).to.include(randomItem)
  })
})
