"use strict";
/* 
  增强作用域链  
  try/catch语句的catch块
  with语句
  这两种情况下，都会在作用域链前端添加一个变量对象。
*/

function buildUrl() {
  let qs = "?debug=true";
  with (location) {
    let url = href + qs;
  }
  return url;
}
