// 蹦床函数
function trampoline(func, a) {
  let result = func.call(func, a);
  while (typeof result === 'function') {
    result = result();
  }
  return result;
}


function sum(x, total = 0) {
  if (x === 1) {
    return x + total;
  }
  return sum(x - 1, x + total);
}

// 测试
const val = trampoline(sum, 6)
console.log(val)