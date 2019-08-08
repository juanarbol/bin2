'use strict'

const test = require('ava')
const reverse = require('../src/helpers/reverseString.js')

test.serial('# Reverse string', t => {
  const strs = ['foo', 'bar', 'baz']
  strs.forEach(word => {
    t.is(reverse(word).length, word.length, 'Should return same string length')
    t.is(reverse(word), word.split('').reverse().join(''), 'Should return string reversed')
  })
})

test('Fails with no args', t => {
  const error = t.throws(() => { reverse() }, TypeError)
  t.is(error.message, 'Must provide a valid argument')
})
