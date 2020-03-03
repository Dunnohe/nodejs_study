const assert = require('assert');

//定义一个异常对象
const {message} = new assert.AssertionError({
    actual: 1,
    expected: 2,
    operator: 'strictEqual'
});

//验证消息的输出
try {
    assert.strictEqual(1, 2);
} catch (err) {
    //注意：assert模块返回的异常类型都是AssertionError
    assert(err instanceof assert.AssertionError);
    assert.strictEqual(err.message, message);
    assert.strictEqual(err.name, 'AssertionError');
    assert.strictEqual(err.actual, 1);
    assert.strictEqual(err.expected, 2);
    assert.strictEqual(err.code, 'ERR_ASSERTION');
    assert.strictEqual(err.operator, 'strictEqual');
    assert.strictEqual(err.generatedMessage, true);
}
