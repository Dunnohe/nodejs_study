console.log('this is a module');

const modNumber = 99;
global.globalNumber = 100;

function outputNumber() {
    console.log(globalNumber);
}

//导出变量和函数

//case1:导出局部变量
module.exports.modNumber = modNumber;
//case2：导出全局变量
module.exports.globalNumbers = globalNumber;
//case3：导出函数
module.exports._numberOutputMethod = outputNumber;
//case4：简写，等价于const exports = module.exports;
exports.B = 2;
//case5：覆盖写
module.exports = {
    test : 100
};

