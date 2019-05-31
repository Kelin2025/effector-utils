import { combine } from "effector"
import { curryN } from "../_utils/curry"

export const find = curryN(3, (cb, data, list) =>
  combine(data, list, (data, list) => list.find((...args) => cb(data, ...args)))
)
