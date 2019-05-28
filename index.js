const clone = o => JSON.parse(JSON.stringify(o))

const realClone = (obj, history = []) => {
  if (history.includes(obj)) return '[Circular]'

  if (Array.isArray(obj)) {
    history.push(obj)
    return obj.map(_ => realClone(_, history))
  }

  if (typeof obj === 'object') {
    history.push(obj)
    const ret = {}

    Object.keys(obj).forEach((key) => {
      ret[key] = realClone(obj[key], history)
    })

    return ret
  }
  return obj
}

module.exports = { clone, realClone }
