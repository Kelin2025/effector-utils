import { combine } from "effector"
import { curryN } from "../_utils/curry"

export const allPass = curryN(2, (cb, ...stores) =>
  combine(...stores, (...states) => states.every(cb))
)
