/**
 * Created by toor on 17-6-8.
 */
var reqpromise = require('request-promise');
exports.proxyResource = function (req, res) {
//send request to other server
	reqpromise('http://127.0.0.1:9000/resource.do').then(function (data) {
		res.end(data);
	}).caught(function (err) {
		console.log(err);
		res.end('proxy request http://127.0.0.1:9000/resource.do error...');
	});
};