"use strict";

// 1.使用 var 的函数作用域声明
// function add(num1, num2) {
//   var sum = num1 + num2;
//   return sum;
// }
// let res = add(10, 20); // 30
// console.log(sum); // 报错：sum未定义

// 如果省略上面例子中的关键字var，sum在add()被调用后就变成可以访问的
// 如果开启了严格模式，未经声明就初始化变量会报错
// function add(num1, num2) {
//   sum = num1 + num2;
//   return sum;
// }
// let res = add(10, 20); // 30
// console.log(sum); // 报错：sum未定义

/* 
  var声明会被拿到函数或全局作用域的顶部，位于作用域中所有代码之前。(提升)
  提升会让同意作用域中的代码不必考虑变量是否已经声明就可以直接使用。
*/
// var name = 'gzl'
// // 等价于：
// name = 'gzl';
// var name;
// console.log(name);

// 通过在声明之前打印变量，可以验证变量会被提升。
//  声明的提升意味着会输出 undefined 而不是Reference Error：
// console.log(name);
// var name = 'gzl'

// 2.使用let的块级作用域声明
// let的作用域是块级的。块级作用域由最近的一堆包含花括号{}界定。
//    if 块、while 块、function 块，甚至连单独的块也是 let 声明变量的作用域。
// if(true){
//   let a;
// }
// console.log(a); //  ReferenceError: a没有定义

// let在同一作用域不能声明两次。重复声明的let会抛出SyntaxError(语法错误)
// let在js运行时也会被提升，但由于“暂时性死区”（temporal dead zone）的缘故，实际上不能在声明之前使用 let 变量

// 3.使用const的常量声明
// 使用const声明的变量必须同时初始化为某个值。一旦声明，在其生命周期的任何时候都不能再重新赋予新值。
// const a; // SyntaxError: 常量声明时没有初始化
// const b = 3;
// console.log(b); // 3
// b = 4 // TypeError: 给常量赋值
// 赋值为对象的const变量不能再被重新赋值为其他引用值，但对象的键则不受限制
// const o1 = {};
// o1 = {}; // TypeError: 给常量赋值

// const o2 = {};
// o2.name = "gzl";
// console.log(o2.name);

// // 如果想让整个对象都不能修改，可以使用Object.freeze()
// const o3 = Object.freeze({});
// o3.name = "gzl";
// console.log(o3.name); // TypeError


