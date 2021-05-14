"use strict";

/* 
  函数的参数有且只有按值传递的。
  函数外的值会被复制到函数内部的参数中。

  按值传参时，值会被复制到局部变量arguments中。
  按引用传递参数时，值再内存中的位置会被保存在一个局部变量，
*/

// 原始值
function addTen(num) {
  num += 100;
  return num;
}
let count = 20;
let res = addTen(count);
console.log(count); // 20，没有变化
console.log(res);

console.log("=========================");

// 引用值
/* 
  即使对象是按值传进函数的，obj也会通过引用访问对象。
  obj指向的对象保存在全局作用域的堆内存上
*/
// function setName(obj) {
//   obj.name = "gzl";
// }
// let p = new Object();
// setName(p); // 在函数内部，p和obj都指向同一个对象
// console.log(p.name); // gzl

// console.log('=========================');

// 证明对象是按值传递
function setName(obj) {
  obj.name = "gzl";
  obj = new Object();
  obj.name = "yzq";
}
let p = new Object();
setName(p);
/* 
  如果p是按照引用传递，那么p应该自动将指针改为指向name为"gzl"对象。
  函数中参数的值改变之后，原始的引用仍然没变。
  当obj在函数中被重写，它变成了一个指向本地对象的指针。那个本地对象在函数执行结束时就被销毁了。
*/
console.log(p.name);
