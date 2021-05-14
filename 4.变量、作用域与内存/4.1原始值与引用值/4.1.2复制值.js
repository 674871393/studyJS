"use strict";
/* 
      除了存储方式不同，原始值和引用值在通过变量复制时也有所不同

      原始值存储在 栈内存
      通过变量把原始值赋值到另一个变量时，原始值会被复制到新变量的位置(传值)
    */
let num1 = 5;
let num2 = num1;
num1 = 2;
console.log(num1); // 2
console.log(num2); // 5

/* 
      引用值存在 堆内存
      引用值赋给另一个变量是，复制的值时一个指针，指向存储在堆内存中的对象(传址)
    */
let obj1 = new Object();
let obj2 = obj1;
obj1.name = "gzl";
console.log(obj2.name);
