import { curryN } from "../_utils/curry"

export const some = curryN(2, (cb, list) =>
  list.map(list => list.some((...args) => cb(...args)))
)
