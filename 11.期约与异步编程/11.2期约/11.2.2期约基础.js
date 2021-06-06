/*
  ECMAScript 6 新增的引用类型 Promise，可以通过 new 操作符来实例化。
  创建新期约时需要传入执行器（executor）函数作为参数.
*/
// let p = new Promise(() => { })
// setTimeout(console.log, 0, p) // Promise { <pending> }

/*
  1.期约状态机
  期约有三种状态：待定(pending)，兑现(fulfilled)，拒绝(rejected)。

  待定(pending)是期约最初始的状态。
    成功状态会改变为兑现(fulfilled)，失败状态为拒绝(rejected)。
      状态是不可逆的。也不能保证期约必然会脱离待定状态。因此三种状态都要具有恰当的行为。

  期约的状态是私有的，不能直接通过js检测到。
    主要是为了避免根据读取到的期约状态，以同步的方式处理期约对象。

  期约的状态也不能被外部 JavaScript 代码修改。
    这与不能读取该状态的原因是一样的：期约故意将异步行为封装起来，从而隔离外部的同步代码。
*/

/* 
  2.解决值、拒绝理由及期约用例
  期约主要有两大用途。首先是抽象地表示一个异步操作。期约的状态代表期约是否完成。“待定”
    表示尚未开始或者正在执行中。“兑现”表示已经成功完成，而“拒绝”则表示没有成功完成。

  期约状态切换为兑现，就会有一个私有的内部值(value)。状态切换为拒绝，就会有一个私有的内部理由(reason).
    他们都是包含原始值或对象的不可修改的引用。二者都是可选的，默认值为undefined。
      在期约到达某个落定状态时执行的异步代码始终会收到这个值或理由。
*/

/* 
  3.通过执行函数控制期约状态
  由于期约的状态是私有的，所以只能在内部进行操作。内部操作在期约的执行器函数中完成。执行
    器函数主要有两项职责：初始化期约的异步行为和控制状态的最终转换。
      控制期约状态的转换是通过调用resolve()和 reject()。
        resolve()会把状态切换为兑现，调用 reject()会把状态切换为拒绝和抛出错误。
*/
// let p1 = new Promise((resolve, reject) => resolve());
// setTimeout(console.log, 0, p1); // Promise <resolved>

// let p2 = new Promise((resolve, reject) => reject());
// setTimeout(console.log, 0, p2); // Promise <rejected>
// // Uncaught error (in promise)

// 上面例子中，在初始化期约时，执行器函数已经改变了每个期约的状态。
// 执行器函数是同步执行的。这是因为执行器函数是期约的初始化程序。
// 通过下面的例子可以看出上面代码的执行顺序。
// new Promise(() => setTimeout(console.log, 0, 'executor'));
// setTimeout(console.log, 0, 'promise init')
// executor
// promise init

// 添加setTimeout可以推至切换状态
// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve()
//   }, 1000)
// })
// setTimeout(console.log, 1000, p)

// 无论 resolve()和 reject()中的哪个被调用，状态转换都不可撤销了。于是继续修改状态会静默失败
// let p = new Promise((resolve, reject) => {
//   resolve();
//   reject()
// })
// setTimeout(console.log, 0, p)

// 为了避免期约卡在待定状态，可以添加一个定时推出功能
let p = new Promise((resolve, reject) => {
  setTimeout(reject, 10000) // 十秒后调用reject()
  // 执行函数的逻辑
})
// setTimeout(console.log, 0, p); // Promise <pending>
// setTimeout(console.log, 11000, p); // 11 秒后再检查状态

/*
  4.Promise.resolve()，实例化一个解决的期约。
    可以把任何值都转换成一个期约。
    如果传入的参数本身是一个期约，那它的行为就类似于一个空包装。
*/
// 下面两个期约实际上是一样的
// let p1 = new Promise((resolve, reject) => resolve());
// let p2 = Promise.resolve();

/*
  5.Promise.reject(),实例化一个拒绝的期约并抛出一个异步错误，不能通过try/catch捕获，只能通过
    拒绝处理程序捕获。
    如果传入一个期约，则这个期约会成为他返回的拒绝期约的理由
*/
// 下面两个期约实际上是一样的
// let p1 = new Promise((resolve, reject) => reject());
// let p2 = Promise.reject();

/*
  6.同步/异步执行的二元性
  Promise 的设计很大程度上会导致一种完全不同于 JavaScript 的计算模式。下面的例子完美地展示
    了这一点，其中包含了两种模式下抛出错误的情形
  期约异步特性：他们是同步对象（在同步执行模式中使用），但也是异步执行模式的媒介。
*/
// try {
//   throw new Error('foo')
// } catch (error) {
//   console.log(error);
// }
// try {
//   Promise.reject(new Error('bar'))
// } catch (e) {
//   console.log(e);
// }
