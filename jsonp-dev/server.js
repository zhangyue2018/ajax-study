const express = require('express');

const app = express();

app.all('/check-username', function(req, res) {
    const data = {
        exsit: 1,
        msg: '用户名已经存在'
    }
    res.end(`handle(${JSON.stringify(data)})`);
    // 下面这种方式也可以
    // res.end(`handle({exist: 1, msg: '用户名已经存在'})`);
});

app.listen(8000, function() {
    console.log('服务已经启动成功~~');
});