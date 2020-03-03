// fs模块，与文件系统打交道的模块
const fs = require('fs');

// 所有文件系统操作都具有同步和异步两种方式。异步的形式总是将完成回调作为其最后一个参数。
// 传给完成回调的参数取决于具体方法，但第一个参数始终预留用于异常。
// 如果操作成功完成，则第一个参数将为 null 或 undefined。
// 注意：使用异步的方法无法保证执行顺序。
// 推荐使用异步调用方式，对性能有帮助。

//case1：读取目录
/*async function printAllDirName(path) {
    const dir = await fs.promises.readdir(path);
    for await (const dirent of dir) {
        console.log(dirent);
    }
}

printAllDirName('./').catch(console.error);*/

//case2：读取文件
/*fs.readFile('resources/file.txt', (err, data) => {
    if(err) {
        console.log(err);
    }

    console.log(data.toString());
});*/

//case3：写文件
/*fs.writeFile('message.txt', 'Hello Node.js', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});*/

//case4:使用fs stat
//fs.Stats 对象提供了关于文件的信息。从 fs.stat()、fs.lstat() 和 fs.fstat() 及其同步的方法返回的对象都属于此类型。
/*fs.stat('resources/file.txt', (err, stats) => {
    if(err) {
        console.log(err);
    }
    console.log(stats);
    console.log(stats.isFile());
});*/

//case5:stream
let rs = fs.createReadStream('resources/file.txt');
rs.pipe(process.stdout);
rs.close();

const ws = fs.createWriteStream('resources/file.txt');
for (let i = 0; i < 3; i++) {
    ws.write("数字：${i}");
}
ws.close();





