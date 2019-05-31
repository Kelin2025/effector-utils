import { combine } from "effector"
import { curryN } from "../_utils/curry"

export const somePass = curryN(2, (cb, ...stores) =>
  combine(...stores, (...states) => states.some(cb))
)
