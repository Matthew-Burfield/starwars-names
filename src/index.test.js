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

  it('should return a string if not passed a number', () => {
    expect(starWars.random()).to.be.an('string')
  })

  it('should return an array if passed a number', () => {
    expect(starWars.random(5)).to.be.an('array')
  })

  it('should return an array of random items if passed a number', () => {
    var randomItems = starWars.random(3)
    expect(randomItems).to.have.length(3)
    randomItems.forEach(item => {
      expect(starWars.all).to.include(item)
    })
  })
})
