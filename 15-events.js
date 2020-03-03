//event 事件触发器，可以理解为内部的内部异步事件功能
//类似spring event listener（同步），akka（异步），Disruptor（异步）

//大多数 Node.js 核心 API 构建于惯用的异步事件驱动架构，其中某些类型的对象（又称触发器，Emitter）会触发命名事件来调用函数（又称监听器，Listener）。
//例如，net.Server 会在每次有新连接时触发事件，fs.ReadStream 会在打开文件时触发事件，stream会在数据可读时触发事件。

const EventEmitter = require('events');

class CreateOrderEvent extends EventEmitter {

    constructor(orderNo, userId) {
        super();
        this.orderNo = orderNo;//类中变量
        this.userId = userId;
    }

    toString() {
        return '(' + this.orderNo + ', ' + this.userId + ')';
    }
}

const createOrderEvent = new CreateOrderEvent('123456', '7890');
createOrderEvent.on('createOrder', () => {
    console.log(`获取生单参数, order:{${createOrderEvent.orderNo}}, userId:{${createOrderEvent.userId}}`);
    console.log('插入订单表');
    console.log('返回生单成功');
});

createOrderEvent.emit('createOrder');


//case2: 普通传参
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('event', function(a, b) {
    console.log(a, b, this, this === myEmitter);
    // 打印:
    //   a b MyEmitter {
    //     domain: null,
    //     _events: { event: [Function] },
    //     _eventsCount: 1,
    //     _maxListeners: undefined } true
});
myEmitter.emit('event', 'a', 'b');

