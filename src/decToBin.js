'use strict'

const reverse = require('./helpers/reverseString.js')

/**
 * This function will conver an hec number to bin
 * NOTE: this function returns the bin number backwards (eg: 001 instead of 100)
 */
function decToBin (dec) {
  if (!dec || isNaN(dec)) {
    const error = new TypeError('A number must be provided')
    throw error
  }

  let reversedBinNumber = ''
  while (dec) {
    reversedBinNumber += parseInt(dec % 2)
    dec = parseInt(dec / 2)
  }

  const binNumber = reverse(reversedBinNumber)
  return binNumber
}

module.exports = decToBin
