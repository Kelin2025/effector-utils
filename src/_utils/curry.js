export const curryN = (length, fn) => {
  let remainingLen = length
  let args = []

  const curried = function() {
    remainingLen -= arguments.length
    args.push(...arguments)

    if (remainingLen <= 0) {
      return fn.apply(fn, args)
    } else {
      return curried
    }
  }

  return curried
}
