// 利用闭包，我们可以搞一个对象，来做参数和值的映射
const memoize = (fn) => {
  let cache = {}
  return function () {
    let key = JSON.stringify(arguments)
    cache[key] = cache[key] || fn.apply(fn, arguments)
    return cache[key]
  }
}