// 带⼀个函数参数 和 该函数的部分参数
const partial = (f, ...args) =>
  (...moreArgs) =>
  f(...args, ...moreArgs);

// 声明一个函数
const add3 = (a, b, c) => a + b + c;

// 偏应⽤ `2` 和 `3` 到 `add3` 给你⼀个单参数的函数 fivePlus
const fivePlus = partial(add3, 2, 3);

// 最终会调用
// 本质上还是在调用:(a, b, c) => a + b + c, 2,3,4
const res1 = fivePlus(4);


// console.log(res1)


const add4 = (a, b, c, d) => a + b + c  + d;

const addWithFive1 = partial(add4, 1, 2, 2);
const addWithFive2 = partial(add4, 1, 4); 

const res51 = addWithFive1(10);
const res52 = addWithFive2(8, 2);

console.log('res51, ', res51)
console.log('res52, ', res52)

