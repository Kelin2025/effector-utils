export const isEmpty = store =>
  store.map(
    state => typeof state !== "boolean" && (state === null || !state.length)
  )
