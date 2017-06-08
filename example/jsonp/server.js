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

otherApp.get('/otherdomain/encrypt.do', function (req, res) {
	var word = req.query.word || '12345';
	var callbackName = req.query.callback;
	var data = {
		word: word,
		result: new Buffer(word).toString('base64'),
		info: "encrypt word params(default word:12345) info from http://127.0.0.1:9000/otherdomain/encrypt.do"
	};
	if (callbackName) {
		res.end(callbackName + "(\'" + JSON.stringify(data) + "\');");
	} else {
		res.json(data);
	}

});

otherApp.listen(9000);
console.log('otherApp listen on:http://127.0.0.1:9000');
//==================================server second end==================================