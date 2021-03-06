import { curryN } from "../_utils/curry"

export const lens = curryN(3, (getter, setter, store) => {
  const mapped = store.map(getter)
  mapped.on = cb =>
    store.on((state, payload) => setter(state, cb(getter(state), payload)))

  mapped.setState = newState =>
    store.setState(setter(store.getState(), newState))

  return mapped
})
