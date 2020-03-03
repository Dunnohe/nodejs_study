// require 引入
// /表示绝对路径，./表示相对路径
// 支持js,json,node拓展名，不写依次尝试
// 如果不写路径则认为是build-in模块，它会去找node_module自带的模块


const mod = require('./02-module_test');

//case3：打印全局变量
console.log(globalNumber);

//case4：打印局部变量
console.log(mod.aaa);

//mod._numberOutputMethod();

//case2：打印简写
console.log(mod.B);

//case1：打印覆盖写
console.log(mod.test);

/*//case5：调用模块方法
mod._numberOutputMethod();*/
