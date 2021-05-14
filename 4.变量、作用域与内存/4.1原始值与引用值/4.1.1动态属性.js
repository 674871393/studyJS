"use strict";
/* 
     引用值，可以随时添加、修改和删除其属性和方法 
  */
let person = new Object();
person.name = "gzl";
console.log(person.name);

/* 
      原始值不能有属性
      原始类型初始化可以只使用字面量形式。如果使用new关键字，
        js就会创建一个Object的实例，行为类似原始值
   */
let name1 = "gzl";
let name2 = new String("yzq");
name1.age = 22; // 在严格模式下会报错
name2.age = 20;
console.log(name1.age);
console.log(name2.age);
console.log(typeof name1); // string
console.log(typeof name2); // object