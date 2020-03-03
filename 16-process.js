//process 对象是一个全局变量，它提供有关当前 Node.js 进程的信息并对其进行控制。
//作为一个全局变量，它始终可供 Node.js 应用程序使用，无需使用 require()。 它也可以使用 require() 显式地访问：
//process 对象是 EventEmitter 的实例。
//把process理解成系统容器的监听事件，让你想处理系统的时间，就用process

// case1：对象解构常见变量 运行测试命令：node --inspect 16-process.js --test a=1 b=2
const {argv, argv0, execArgv, execPath} = process;

//固定值
argv.forEach(item => {
    console.log('argv:' + item);
});

//传进来的参数列表
console.log('argv0:' + argv0);

//传进来的执行命令
console.log('exec:' + execArgv);

//node执行路径
console.log('execPath:' + execPath);

//case2: env变量
const {env} = process;
console.log(env);
console.log(env['PATH']);

//case3: cwd方法
console.log(process.cwd());

