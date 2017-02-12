var fs = require('fs');
var mustache = require('mustache');
var compiled;
var tplData;
var str;

module.exports.prepare = function (data, done) {
	str = fs.readFileSync(__dirname + '/tpl_escaped.mustache', 'utf8');
	tplData = data;
	compiled = mustache.parse(str);
	done();
};

module.exports.prepareUnescaped = function (data, done) {
	str = fs.readFileSync(__dirname + '/tpl_unescaped.mustache', 'utf8');
	tplData = data;
	compiled = mustache.parse(str);
	done();
};

module.exports.step = function (done) {
	var html = mustache.render(str, tplData);
	done(undefined, html);
};
