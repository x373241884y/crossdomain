var express = require('express');
var path = require('path');
//==================================server first start==================================
var mainApp = express();
mainApp.use(express.static(path.join(__dirname, 'static')));
mainApp.listen(3000);
console.log('mainApp listen on:http://127.0.0.1:3000');
//==================================server first end==================================


//==================================server second start==================================
var otherApp = express();

otherApp.get('/resource.do', function (req, res) {
	var callbackName=req.query.callback;
	res.end(callbackName + "(\'Hello,I am from http://127.0.0.1:9000/resource.do\');");
});

otherApp.listen(9000);
console.log('otherApp listen on:http://127.0.0.1:9000');
//==================================server second end==================================