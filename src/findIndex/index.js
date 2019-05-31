import { combine } from "effector"
import { curryN } from "../_utils/curry"

export const findIndex = curryN(3, (cb, data, list) =>
  combine(data, list, (data, list) =>
    list.findIndex((...args) => cb(data, ...args))
  )
)
