/* 
  定义回调函数来表明异步操作完成。
  串联多个异步操作是一个常见的问题，通常需要深度嵌套的回调函数（俗称“回调地狱”）来解决。
*/
// function double (value) {
//   setTimeout(() => setTimeout(console.log, 0, value * 2), 1000);
// }
// double(3); // 6

/* 
  1.异步返回值。
  假设 setTimeout 操作会返回一个有用的值。就需要给异步操作提供一个回调，
    这个回调中包含要使用异步返回值的代码（作为回调的参数）。
*/
// function double (value, callback) {
//   setTimeout(() => { callback(value * 2), 1000 })
// }
// double(3, (x) => console.log(x)) // 6

/* 
  2.失败处理
*/
function double (value, success, failure) {
  setTimeout(() => {
    try {
      if (typeof value !== 'number') {
        throw 'Must provide number as first argument';
      }
      success(2 * value)
    } catch (e) {
      failure(e)
    }
  }, 1000)
}
const successCallback = (x) => console.log(`Success:${x}`);
const failureCallback = (e) => console.log(`Failure:${e}`);

double(3, successCallback, failureCallback);
double('b', successCallback, failureCallback);
