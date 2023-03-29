const express = require('express');
const path = require('path');

const app = express();

app.all('/jsonp-server', function(req, res) {
    const pathStr = path.resolve(__dirname, './app.js');
    res.sendFile(pathStr);
    // 以下两种方式也都可以
    // res.sendFile(__dirname + '/app.js');
    // res.send(`handle({name: 'zy'})`);
});



app.listen(9000, () => {
    console.log('服务已经启动!!');
});