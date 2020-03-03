// 一旦发生循环引用，比如a require b，b再require a，就只输出已经被执行的部分，不会执行的部分不输出。
const modA = require('./05-cycle_require_a');
const modB = require('./06-cycle_require_b');

// 首先执行 a模块引入
// 执行了 test = 'A' ,
// 然后引入b，执行test = 'B' 然后执行了 引入a，但是a已经被cache了，于是继续执行，test = 'bb'
// 执行完，回来继续执行a的代码


