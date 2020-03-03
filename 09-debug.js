// 先输入（brk代表启动时卡主） node --inspect-brk 09-debug.js
// 再访问 chrome://inspect/#devices

function add(a, b) {
    console.log(a);

    console.log(b);

    return a + b;
}

let result = add(1, 2);

console.log(result);
