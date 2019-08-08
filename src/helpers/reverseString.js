'use strict'

/**
 * This function just reverse any string
 * by split the string in a array, then reverse that array
 * then just join that array
 */
function reverseString (string) {
  if (!string) {
    const error = new TypeError('Must provide a valid argument')
    throw error
  }

  const reversedString = string.split('').reverse().join('')

  return reversedString
}

module.exports = reverseString
