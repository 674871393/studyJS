"use strict";

/* 
  typeof是判断一个变量是否为字符串、数值、布尔值或undefined的最好方式。
  值是对象或者null时，typeof返回”object“
*/
let u;
console.log(typeof "哈喽world"); // string
console.log(typeof 66); // number
console.log(typeof true); // boolean
console.log(typeof u); // undefined
console.log(typeof null); // object
console.log(typeof {}); // object
console.log(typeof function () {}); // function

console.log("=========================");

/* 
  
  想知道是什么类型的对象 可以使用 instanceof。
  如果变量是给定引用类型(由其原型链决定),instanceof则返回true。
  所有引用值都是Object的实例。此通过 instanceof 操作符检测任何引用值和Object构造函数都会返回 true。
  instanceof 检测原始值，则始终会返回 false，因为原始值不是对象。
*/
let arr = [];
let obj = {};
console.log(arr instanceof Array); // true;
console.log(arr instanceof Object); // true
console.log(obj instanceof Array); // false
console.log(obj instanceof Object); // true
