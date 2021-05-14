"use strict";

/* 
  变量或函数的上下文决定他们可以访问那些数据，以及他们的行为。
  每个上下文都有一个惯量的 变量对象，上下文中定义的所有变量都存在于这个对象上

  全局上下文是最外层的上下文。
  根据js代码运行环境不同，表示的全局上下文可能不一样。

  在浏览器中，全局上下文是window对象，
    所有通过var定义的全局变量和函数都会成为window对象的方法和属性，
    使用let和const的顶级声明不会定义在全局上下文中，作用域链解析效果是一样的。

  上下文在其所有代码都执行完毕后会被销毁，包括定义在它上面的所有变量和函数。
  全局上下文在应用程序退出前才会被销毁。
  
  每个函数调用都有自己的上下文。代码执行流进入函数时，函数的上下文会被推到一个上下文栈上，
    在函数执行完之后，上下文栈会弹出改函数上下文，将控制权返还给之前的执行上下文。JS程序的执行流程就是
      通过这个上下文栈进行控制。

  上下文代码在执行的时候，会创建变量对象的一个作用域链。
  作用域链决定了各级上下文中代码在访问变量和函数时的顺序。
  代码正在执行的上下文的变量对象始终位于作用域链的最前端。
  如果上下文是函数，则其活动对象用作变量对象。活动对象最初只有
    一个定义变量：arguments。（全局上下文中没有这个变量。）
  作用域链中的下一个变量对象来自包含上下文，再下一个对象来自再下一个包含上下文。以此类推直至全局上下文，
    全局上下文的变量对象始终是作用域链的最后一个变量对象。

  代码执行时的标识符解析是通过沿作用域链逐级搜索标识符名称完成的。搜索过程始终从作用域链
    的最前端开始，然后逐级往后，直到找到标识符。（如果没有找到标识符，那么通常会报错。）

  函数参数被认为是当前上下文中的变量，因此也跟上下文中的其他变量遵循相同的访问规则
*/

/* 
  changeColor()的作用域链包含两个对象：arguments和全局上下文变量对象
    这个函数内部之所以能够访问变量color，就是因为可以在作用域链中找到它
*/
var color = "blue";
function changeColor() {
  if (color === "blue") {
    color = "red";
  } else {
    color = "blue";
  }
}
changeColor();
console.log(color);

// 局部作用域中定义的变量可以用在局部上下文中替全局变量
var color = "blue";
function changeColor() {
  let anotherColor = "red";

  function swapColors() {
    let tempColor = anotherColor;
    anotherColor = color;
    color = tempColor;
    // 这里可以访问 color、anotherColor、tempColor
  }

  // 这里可以访问color和anotherColor，但是访问不到tempColor
  swapColors();
}
// 这里只能访问color
changeColor();
