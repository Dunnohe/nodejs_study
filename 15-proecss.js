
/*// case1：对象解构常见变量 运行测试命令：node --inspect 15-proecss.js --test a=1 b=2
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
console.log('execPath:' + execPath);*/

/*//case2: env变量
const {env} = process;
console.log(env);
console.log(env['PATH']);*/

//case3: cwd方法
console.log(process.cwd());

