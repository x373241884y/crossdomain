var express = require('express');
var path = require('path');
//==================================server first start==================================
var bodyParser = require('body-parser');

var mainApp = express();
mainApp.use(express.static(path.join(__dirname, 'static')));
mainApp.use(bodyParser());
var proxy = require('./proxy');
mainApp.get('/server-proxy/proxy.do', function (req, res) {
	proxy.proxyEncode64(req, res);
});
mainApp.post('/server-proxy/proxy.do', function (req, res) {
	proxy.proxyEncode64(req, res,true);
});

mainApp.listen(3000);
console.log('mainApp listen on:http://127.0.0.1:3000');
//==================================server first end==================================




//==================================server second start==================================
var otherApp = express();

otherApp.get('/otherdomain/encrypt.do', function (req, res) {
	var word = req.query.word || '12345';
	var data = {
		word: word,
		result: new Buffer(word).toString('base64'),
		info:"encrypt word params(default word:12345) info from http://127.0.0.1:9000/otherdomain/encrypt.do"
	};
	res.json(data);
});
otherApp.listen(9000);
console.log('otherApp listen on:http://127.0.0.1:9000');
//==================================server second end==================================