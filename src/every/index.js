import { curryN } from "../_utils/curry"

export const every = curryN(2, (cb, list) =>
  list.map(list => list.every((...args) => cb(...args)))
)
