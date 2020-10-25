const fp = require('lodash/fp')

class MyWrapper {
  constructor (value) {
    this._wrapped = value
    this._actions = []
  }

  chain (value) {
    this._wrapped = value
    return this
  }

  filter (fn) {
    this._actions.push(fp.filter(fn))
    return this
  }

  map (fn) {
    this._actions.push(fp.map(fn))
    return this
  }

  sum () {
    this._actions.push(fp.sum)
    return this
  }

  value () {
    // fp.flowRight()
    // fp.compose()
    let fn = fp.compose(...this._actions.reverse())
    return fn(this._wrapped)
  }
}

let _ = {
  chain: function chain (value) {
    return new MyWrapper(value)
  }
}

let employees = [
  { name: 'lin7', age: 25, sex: 'male', salary: 43210 },
  { name: 'ze', age: 30, sex: 'male', salary: 34567 },
  { name: 'cJJ', age: 26, sex: 'male', salary: 22222 },

]

let salary = _.chain(employees)
  .filter(e => e.age >= 20)
  .map(e => e.salary)
  .sum()
  .value()
console.log(salary)
