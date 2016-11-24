'use strict'

function addPrestr (data, prestr) {
  for (let key in data) {
    if (typeof data[key] === 'object') {
      addPrestr(data[key], prestr)
    } else if (typeof data[key] === 'string') {
      data[key] = prestr + data[key]
    }
  }
}

function deepCopy (target, source) {
  for (let key in source) {
    if (typeof source[key] === 'object') {
      target[key] = {}
      deepCopy(target[key], source[key])
    } else {
      target[key] = source[key]
    }
  }
}

module.exports = function (_data, _prestr) {
  let __data = {}
  deepCopy(__data, _data)
  addPrestr(__data, _prestr ? _prestr : '')
  return __data
}