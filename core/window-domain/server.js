var express = require('express');
var path = require('path');
//==================================server first start==================================
var mainApp = express();
mainApp.use(express.static(path.join(__dirname, 'static')));

mainApp.get('/resource.do', function (req, res) {
	res.end("<script>\ndocument.domain='example123.com';\nwindow._data='Hello,HaHa,I am from http://www.sub.example123.com:3000/resource.do';\n</script>");
});
mainApp.listen(3000);
console.log('mainApp listen on:http://127.0.0.1:3000');
//==================================server first end==================================