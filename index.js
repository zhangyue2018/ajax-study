const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('HELLO EXPRESS');
});

app.get('/server', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('HELLO AJAX');
});

app.post('/server', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('HELLO POST~~~');
});

app.listen('8000', () => {
    console.log('服务已经启动，8000 端口监听中……');
});