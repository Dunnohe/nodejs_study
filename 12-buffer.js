//Buffer 类是作为 Node.js API 的一部分引入的，用于在 TCP 流、文件系统操作、以及其他上下文中与八位字节流进行交互。

//case1:创建buffer，Buffer 类是一个全局变量，用于直接处理二进制数据。
//目前支持的字符编码有ascii utf8 utf16le ucs2 base64 latin1 binary hex
const buf = Buffer.from('hello world', 'utf8');//ImmutableMap.of /create
console.log(buf);
console.log(buf.toString());

/*
//case2:buffer foreach
const buf1 = Buffer.from([1, 2, 3]);

for (let b of buf1) {
    console.log(b);
}
*/

//case3:分配内存空间
//注意：buffer.allocUnsafe() 和 Buffer.allocUnsafeSlow()是不安全的，原因需要关注一下文档。
/*const buf3 = Buffer.alloc(11, 'aaa=', 'utf8');
console.log(buf3.toString());

const buf4 = Buffer.allocUnsafe(10);
console.log(buf4.toString());*/

//case4:打印字节长度 打印: ½ + ¼ = ¾: 9 个字符, 12 个字节 string.length
/*const str = '\u00bd + \u00bc = \u00be';
console.log(`${str}: ${str.length} 个字符, ` +
    `${Buffer.byteLength(str, 'utf8')} 个字节`);*/


//case5:通过buf[index]的方式获取到指定位置的字节
const website = 'http://nodejs.cn/';
const buf5 = Buffer.allocUnsafe(website.length);

for (let i = 0; i < website.length; i++) {
    buf5[i] = website.charCodeAt(i);
}
console.log(buf5.toString('utf8'));

