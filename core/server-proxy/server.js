var express = require('express');
var path = require('path');
//==================================server first start==================================
var mainApp = express();
mainApp.use(express.static(path.join(__dirname, 'static')));
mainApp.get('/server-proxy/proxy.do', function (req, res) {
	// send request to other server
	require('./proxy').proxyResource(req, res);
});
mainApp.listen(3000);
console.log('mainApp listen on:http://127.0.0.1:3000');
//==================================server first end==================================




//==================================server second start==================================
var otherApp = express();
otherApp.get('/resource.do', function (req, res) {
	res.end('Hello,HaHa,I am from http://127.0.0.1:9000/resource.do');
});
otherApp.listen(9000);
console.log('otherApp listen on:http://127.0.0.1:9000');
//==================================server second end==================================