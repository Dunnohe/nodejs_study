//在JavaScript里，不为空 "" 的字符串、不为 0 的数字、不为 null 的对象、不为 undefined
//的对象属性、布尔型 true，单独作为判断式里的一个表达式时 JavaScript 通通认定为真（true），反之则为假（false）

//case1:捕捉异常
// JavaScript 的 throw 机制的任何使用都会引起异常，异常必须使用 try…catch 处理，否则 Node.js 进程会立即退出。
try {
    const m = 1;
    const n = m + z;
} catch (err) {
    // 在这里处理错误。
    console.log(err);
}

//case2:异步中的异常捕捉
/*const fs = require('fs');
try {
    fs.readFile('一个不存在的文件', (err, data) => {
        if (err) {
            console.error('读取文件出错！', err);
        }
        // 否则处理数据
    });
} catch (e) {
    //这里捕捉没有任何意义
}*/

