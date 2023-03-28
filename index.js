const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('HELLO EXPRESS');
});

app.get('/server', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('HELLO AJAX');
});

app.all('/server', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.send('HELLO POST~~~');
});

app.all('/json-server', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    console.log('----------');
    let obj = {a: 12, b:22}
    res.send(JSON.stringify(obj));
});

app.all('/timeout', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    setTimeout(() => {
        res.send('hello world~~~');
    }, 7000);
});

app.all('/juery-server', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    let obj = {a: 'ra', b: 'rb'};
    // res.send('hello ajax');
    setTimeout(() => {
        res.send(JSON.stringify(obj));
    }, 5000);
});

app.listen('8000', () => {
    console.log('服务已经启动，8000 端口监听中……');
});