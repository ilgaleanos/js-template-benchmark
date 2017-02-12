var data = require('./data');

var count = 100000
var coffeekup = require('./coffeekup/coffeekup.js');
var dot = require('./dot/dot.js');
var dust = require('./dust/dust.js');
var eco = require('./eco/eco.js');
var ect = require('./ect/ect.js');
var ejs = require('./ejs/ejs.js');
var ejsWithoutWith = require('./ejs-without-with/ejs.js');
var fest = require('./fest/fest.js');
var gaikan = require('./gaikan/gaikan.js');
var handlebars = require('./handlebars/handlebars.js');
var hogan = require('./hogan/hogan.js');
var jade = require('./jade/jade.js');
var jadeWithoutWith = require('./jade-without-with/jade.js');
var jsrender = require('./jsrender/jsrender.js');
var mustache = require('./mustache/mustache.js');
var pug = require('./pug/pug.js');
var swig = require('./swig/swig.js');
var underscore = require('./underscore/underscore.js');

var test = function(name, sample, cb) {
        var i = 0;
        var start;
        var done = function(error, html) {
                i++;
                if (i === count) {
                        var now = Date.now();
                        cb(null, name, now - start);
                }
        }
        sample.prepare(data, function() {
                start = Date.now();
                for (var j = 0; j < count; j++) {
                        sample.step(done);
                }
        });
};

var testUnescaped = function(name, sample, cb) {
        var i = 0;
        var start;
        var done = function(error, html) {
                i++;
                if (i === count) {
                        var now = Date.now();
                        cb(null, name, now - start);
                }
        }
        sample.prepareUnescaped(data, function() {
                start = Date.now();
                for (var j = 0; j < count; j++) {
                        sample.step(done);
                }
        });
};

var samples = [
        { name : 'CoffeeKup', sample : coffeekup },
        { name : 'doT', sample : dot },
        { name : 'Dust', sample : dust },
        { name : 'Eco', sample : eco },
        { name : 'ECT', sample : ect },
        { name : 'EJS without `with`', sample : ejsWithoutWith },
        { name : 'EJS', sample : ejs },
        { name : 'Fest', sample : fest },
        { name : 'Gaikan', sample: gaikan },
        { name : 'Handlebars.js', sample : handlebars },
        { name : 'Hogan.js', sample : hogan },
        { name : 'Jade without `with`', sample : jadeWithoutWith },
        { name : 'Jade', sample : jade },
        { name : 'jsrender', sample : jsrender },
        { name : 'mustache', sample : mustache },
        { name : 'pug', sample : pug },
        { name : 'Swig', sample : swig },
        { name : 'Underscore', sample : underscore }
];

var runTests = function () {
        if (samples.length) {
                var sample = samples.pop();
                test(sample.name, sample.sample, function (err, name, result) {
                        testUnescaped(sample.name, sample.sample, function (err, name, resultUnescaped) {
                                console.log(name);
                                console.log('  Escaped   : ' + result + 'ms');
                                console.log('  Unescaped : ' + resultUnescaped + 'ms');
                                console.log('  Total     : ' + (result + resultUnescaped) + 'ms');
                                console.log('');
                                runTests();
                        });
                });
        }
};

console.log('Rendering ' + count + ' templates:\n');
runTests();
