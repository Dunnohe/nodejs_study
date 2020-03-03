//path 模块提供用于处理文件路径和目录路径的实用工具
const path = require('path');

/*//case1:获得文件名
let filename = path.basename('/resources/file.txt');
console.log(filename);//return 'file'

let basename = path.basename('/resources/file', 'txt');
console.log(basename);//return 'file'*/

/*//case2:分隔符
console.log(process.env.PATH);
// 打印: '/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin'
console.log(process.env.PATH.split(path.delimiter));
// 返回: ['/usr/bin', '/bin', '/usr/sbin', '/sbin', '/usr/local/bin']*/

//case3:获得目录名
let dirname = path.dirname('/resources/file.txt');
console.log(dirname);//return 'file'


//case4:获得拓展名
let externalName = path.extname('/resources/file.txt');
console.log(externalName);//return 'file'

//case5:format
let format = path.format({
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt'
});
console.log(format);

//case6:parse
let parse = path.parse('/home/user/dir/file.txt');
console.log(parse);

