import { combine } from "effector"

export const allTruthy = (...stores) =>
  combine(...stores, (...states) => states.every(_ => _))
