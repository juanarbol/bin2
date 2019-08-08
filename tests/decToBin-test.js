const test = require('ava')
const decToBin = require('../src/decToBin.js')
const sinon = require('sinon')
const proxyquire = require('proxyquire')

test.serial('# Dec To Bin', t => {
  const numbers = [1, 2, 3, 4, 5]
  numbers.forEach(number => {
    t.is(decToBin(number), number.toString(2), 'Should convert numbers to bin correctly')
  })
})

test('Args eval', t => {
  const wrongArgs = ['foo', null, function () {}, new Set()]
  wrongArgs.map(arg => {
    const error = t.throws(() => { decToBin(arg) })
    t.is(error.message, 'A number must be provided')
  })
})

test('Reverse string usage', t => {
  const reverseStub = sinon.spy()
  const decToBinProxy = proxyquire('../src/decToBin.js', { './helpers/reverseString.js': reverseStub })

  decToBinProxy(100)

  t.truthy(reverseStub.calledOnce)
})
