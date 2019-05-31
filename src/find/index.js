import { combine } from "effector"
import { curryN } from "../_utils/curry"

export const find = curryN(3, (cb, data, list) =>
  combine(data, list, (data, list) => {
    const res = list.find((...args) => cb(data, ...args))
    if (res === undefined) {
      return null
    }
    return res
  })
)
