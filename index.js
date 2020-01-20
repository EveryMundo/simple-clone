const clone = o => JSON.parse(JSON.stringify(o))

function deepClone (input) {
  if (!(input instanceof Object)) return input

  if (Array.isArray(input)) {
    let iLen = input.length
    const arr = new Array(iLen)

    for (;iLen--;) {
      arr[iLen] = deepClone(input[iLen])
    }

    return arr
  }

  const clObj = {}
  for (const i in input) {
    clObj[i] = deepClone(input[i])
  }

  return clObj
}

const safeClone = (input, history = []) => {
  if (!(input instanceof Object)) return input

  if (history.indexOf(input) > -1) return '[Circular]'

  history.push(input)

  if (Array.isArray(input)) {
    let iLen = input.length
    const arr = new Array(iLen)

    for (;iLen--;) {
      arr[iLen] = safeClone(input[iLen], history)
    }

    return arr
  }

  const ret = {}

  for (const i in input) {
    ret[i] = (input[i] instanceof Object) ? safeClone(input[i], history) : input[i]
  }

  return ret
}

module.exports = { clone, realClone: safeClone, safeClone, deepClone }
