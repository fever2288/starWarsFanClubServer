const sinon = require('sinon')
const expect = require('expect')
const converter = require('../../helper/helperFunctions.js')
const DART_VADER = {
  name: 'Darth Vader',
  height: '202',
  birth_year: '41.9BBY',
  gender: 'male',
  mass: '136',
}
const NAME = 'name'
const GENDER = 'gender'
const EMPTY_STRING = ''
const COLOR = 'color'

describe('#getObjectProperties()', function () {

  it('should return one key-value pair, if only one property is sent', function () {
    var result = converter.getObjectProperties(DART_VADER, NAME)
    expect(result).toStrictEqual({ name: 'Darth Vader' })
  })

  it('should return object with as many key-pair values as it is sent ', function () {
    var result = converter.getObjectProperties(DART_VADER, NAME, GENDER)
    expect(result).toStrictEqual({ name: 'Darth Vader', gender: 'male' })
  })

  it('should add empty property if empty string is sent', function () {
    var result = converter.getObjectProperties(DART_VADER, EMPTY_STRING)
    expect(result).toStrictEqual({ '': undefined })
  })

  it('should add new property if it does not exist with value undefined', function () {
    var result = converter.getObjectProperties(DART_VADER, COLOR)
    expect(result).toStrictEqual({ color: undefined })
  })

  it('should return empty object if null is send', function () {
    var result = converter.getObjectProperties(null)
    expect(result).toStrictEqual({})
  })
  
})
