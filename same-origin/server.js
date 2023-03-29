const express = require('express');

const app = express();

app.all('/home', function(req, res) {
    // 响应一个页面
    res.sendFile(__dirname + '/index.html');
});

app.all('/data', function(req, res) {
    res.send('用户数据');
});

app.listen(9000, () => {
    console.log('服务已经启动!!');
});