const express = require('express');

const app = express();

app.all('/cors-server', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('hello world');
});

app.listen(8000, function() {
    console.log('服务已启动-----');
});