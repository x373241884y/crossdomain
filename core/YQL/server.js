var express = require('express');
var path = require('path');
//==================================server first start==================================
var mainApp = express();
mainApp.use(express.static(path.join(__dirname, 'static')));
mainApp.listen(3000);
console.log('mainApp listen on:http://127.0.0.1:3000');
//==================================server first end==================================