const express = require('express');

const app = express();

app.all('/jquery-jsonp-server', function(req, res) {
    console.log('收到请求');
    const data = {
        name: '尚硅谷',
        city: ['北京', '上海', '深圳']
    };
    let str = JSON.stringify(data);
    let cb = req.query.callback;

    res.end(`${cb}(${str})`);
});

app.listen(9000, function() {
    console.log('服务已经成功启动~~~');
});