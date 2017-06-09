var express = require('express');
var path = require('path');
var fs = require('fs');
//==================================server first start==================================
var mainApp = express();
mainApp.use(express.static(path.join(__dirname, 'static')));
mainApp.listen(3000);
console.log('mainApp listen on:http://127.0.0.1:3000');
//==================================server first end==================================


//==================================server second start==================================
var otherApp = express();
otherApp.get('/iframe.html', function (req, res) {
	res.send(fs.readFileSync(path.join(__dirname, 'iframe.html'), 'utf8'));
});
otherApp.get('/resource.do', function (req, res) { //like iframe.html
	res.end("<script>parent.postMessage('Hello,HaHa,I am from http://127.0.0.1:9000/resource.do', 'http://127.0.0.1:3000');</script>");
});
otherApp.listen(9000);
console.log('otherApp listen on:http://127.0.0.1:9000');
//==================================server second end==================================