import { combine } from "effector"

export const allFalsy = (...stores) =>
  combine(...stores, (...states) => states.every(_ => !_))
