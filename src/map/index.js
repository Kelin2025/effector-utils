import { curryN } from "../_utils/curry"

export const map = curryN(2, (cb, list) =>
  list.map(list => list.map((...args) => cb(...args)))
)
