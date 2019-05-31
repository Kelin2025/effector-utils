# Methods

## allFalsy

```javascript
const a = createStore(false)
const b = createStore(true)
const c = createStore(false)

const foo = allFalsy(a, b, c)
foo.getState() // => false

const bar = allFalsy(a, c)
bar.getState() // => true
```

## allPass

```javascript
const a = createStore(6)
const b = createStore(7)
const c = createStore(2)

const gt5 = allPass(n => n > 5)

const foo = gt5(a, b, c)
foo.getState() // => false

const bar = gt5(a, b)
bar.getState() // => true
```

## allTruthy

```javascript
const a = createStore(true)
const b = createStore(true)
const c = createStore(false)

const foo = allTruthy(a, b, c)
foo.getState() // => false

const bar = allTruthy(a, b)
bar.getState() // => true
```

## every

```javascript
const a = createStore([6, 7, 7])
const b = createStore([1, 7, 7])

const gt5 = every(n => n > 5)

const foo = gt5(a)
foo.getState() // => true

const bar = gt5(b)
bar.getState() // => false
```

## filter

```javascript
const letter = createStore("A")
const names = createStore(["Abc", "Def", "Alpha"])

const filterByLetter = filter((letter, name) => name.startsWith(letter))

const foo = filterByLetter(letter, names)
foo.getState() // => ["Abc", "Alpha"]
```

## find

```javascript
const name = createStore("John")
const users = createStore([{ name: "Alex" }, { name: "John" }])

const findByName = find((name, user) => user.name === name)

const foo = findByName(name, users)
foo.getState() // => { name: "John" }
```

## findIndex

```javascript
const name = createStore("John")
const users = createStore([{ name: "Alex" }, { name: "John" }])

const findIdxByName = findIndex((name, user) => user.name === name)

const foo = findIdxByName(name, users)
foo.getState() // => 1
```

## isEmpty

```javascript
const bool = createStore(0)
const bool = createStore(false)
const nullish = createStore(null)
const str = createStore("")
const arr = createStore([])

console.log(
  isEmpty(bool).getState(),
  isEmpty(nullish).getState(),
  isEmpty(str).getState(),
  isEmpty(bool).getState(),
  isEmpty(arr).getState()
)
// => false, false, true, true, true
```

## lens

```javascript
const store = createStore({ a: 1 })

const lensA = lens(
  state => state.a,
  (state, payload) => ({ ...state, a: payload })
)

// Get state.a
const storeA = lensA(store)
storeA.getState() // => 1

// .on method uses setter to update state of target store
const inc = createEvent("Increment")
storeA.on(inc, a => a + 1)
store.watch(console.log)

inc()
// => { a: 2 }
```

## map

```javascript
const names = createStore(["foo", "bar"])

const upper = map(_ => _.toUpperCase())

const foo = upper(names)
foo.getState() // => ["foo", "bar"]
```

## reject

```javascript
const letter = createStore("A")
const names = createStore(["Abc", "Def", "Alpha"])

const rejectByLetter = reject((letter, name) => name.startsWith(letter))

const foo = rejectByLetter(letter, names)
foo.getState() // => ["Def"]
```

## some

```javascript
const a = createStore([6, 7, 2])
const b = createStore([1, 3, 5])

const gt5 = some(n => n > 5)

const foo = gt5(a)
foo.getState() // => true

const bar = gt5(b)
bar.getState() // => false
```

## somePass

```javascript
const a = createStore(1)
const b = createStore(2)
const c = createStore(6)

const gt5 = somePass(n => n > 5)

const foo = gt5(a, b, c)
foo.getState() // => true

const bar = gt5(a, b)
bar.getState() // => false
```
