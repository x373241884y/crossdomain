/**
 * Created by toor on 17-6-8.
 */
var reqpromise = require('request-promise');

exports.proxyEncode64 = function (req, res) {
	var options = {
		uri: 'http://127.0.0.1:9000/otherdomain/encrypt.do',
		method: 'GET',
		qs: {
			word: req.query.word || req.body.word
		},
		// json: true // Automatically parses the JSON string in the response
	};
	//proxy other server resource
	reqpromise(options).then(function (data) {
		res.json(data);
	}).caught(function (err) {
		res.json(err);
	});
};