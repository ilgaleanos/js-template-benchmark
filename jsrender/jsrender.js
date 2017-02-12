var fs = require('fs');
var jsrender = require('jsrender');
var tplData;
var compiled;

module.exports.prepare = function (data, done) {
	var str = fs.readFileSync(__dirname + '/tpl_escaped.jsrender', 'utf8');
	tplData = data;
	compiled = jsrender.templates(str);
	done();
};

module.exports.prepareUnescaped = function (data, done) {
	var str = fs.readFileSync(__dirname + '/tpl_unescaped.jsrender', 'utf8');
	tplData = data;
	compiled = jsrender.templates(str);
	done();
};

module.exports.step = function (done) {
	var html = compiled(tplData);
	done(undefined, html);
};
