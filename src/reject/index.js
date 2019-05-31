import { combine } from "effector"
import { curryN } from "../_utils/curry"

export const reject = curryN(3, (cb, data, list) =>
  combine(data, list, (data, list) =>
    list.filter((...args) => !cb(data, ...args))
  )
)
