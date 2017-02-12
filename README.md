# Node.JS template engines benchmark

## Engines

- [CoffeeKup](https://github.com/mauricemach/coffeekup)
- [doT](https://github.com/olado/doT)
- [Dust](https://github.com/linkedin/dustjs)
- [Eco](https://github.com/sstephenson/eco)
- [ECT](https://github.com/baryshev/ect)
- [EJS](https://github.com/visionmedia/ejs)
- [Fest](https://github.com/mailru/fest)
- [Gaikan](https://github.com/Deathspike/gaikan)
- [Handlebars.js](https://github.com/wycats/handlebars.js/)
- [Hogan.js](https://github.com/twitter/hogan.js)
- [Jade](https://github.com/visionmedia/jade)
- [JsRender](https://github.com/BorisMoore/jsrender)
- [Mustache](https://github.com/janl/mustache.js/)
- [Pug](https://github.com/pugjs)
- [Swig](https://github.com/paularmstrong/swig)
- [Underscore](https://github.com/documentcloud/underscore)

## Test environment

	 ██████████████████  ████████     user@user
	 ██████████████████  ████████     OS: Manjaro 16.10 Fringilla
	 ██████████████████  ████████     Kernel: x86_64 Linux 4.4.45-1-MANJARO
	 ██████████████████  ████████     Uptime: 6h 55m
	 ████████            ████████     Packages: 1323
	 ████████  ████████  ████████     Shell: bash
	 ████████  ████████  ████████     Resolution: 1920x1080
	 ████████  ████████  ████████     DE: KDE 5.30.0 / Plasma 5.8.5
	 ████████  ████████  ████████     WM: KWin
	 ████████  ████████  ████████     WM Theme: Maia
	 ████████  ████████  ████████     GTK Theme: Maia [GTK2/3]
	 ████████  ████████  ████████     Icon Theme: maia
	 ████████  ████████  ████████     Font: Noto Sans Regular
	 ████████  ████████  ████████     CPU: Intel Core i5-4460 @ 4x 3.4GHz
                                 	  RAM: 1564MiB / 7926MiB


## Results

	Rendering 100000 templates:

	Underscore
	  Escaped   : 1637ms
	  Unescaped : 1102ms
	  Total     : 2739ms

	Swig
	  Escaped   : 4249ms
	  Unescaped : 212ms
	  Total     : 4461ms

	pug
	  Escaped   : 2174ms
	  Unescaped : 93ms
	  Total     : 2267ms

	mustache
	  Escaped   : 3479ms
	  Unescaped : 1577ms
	  Total     : 5056ms

	jsrender
	  Escaped   : 1313ms
	  Unescaped : 194ms
	  Total     : 1507ms

	Jade
	  Escaped   : 8587ms
	  Unescaped : 5068ms
	  Total     : 13655ms

	Jade without `with`
	  Escaped   : 4321ms
	  Unescaped : 860ms
	  Total     : 5181ms

	Hogan.js
	  Escaped   : 3293ms
	  Unescaped : 221ms
	  Total     : 3514ms

	Handlebars.js
	  Escaped   : 1584ms
	  Unescaped : 169ms
	  Total     : 1753ms

	Gaikan
	  Escaped   : 2588ms
	  Unescaped : 50ms
	  Total     : 2638ms

	Fest
	  Escaped   : 1241ms
	  Unescaped : 160ms
	  Total     : 1401ms

	EJS
	  Escaped   : 5386ms
	  Unescaped : 1100ms
	  Total     : 6486ms

	EJS without `with`
	  Escaped   : 4307ms
	  Unescaped : 301ms
	  Total     : 4608ms

	ECT
	  Escaped   : 2587ms
	  Unescaped : 64ms
	  Total     : 2651ms

	Eco
	  Escaped   : 5076ms
	  Unescaped : 560ms
	  Total     : 5636ms

	Dust
	  Escaped   : 3690ms
	  Unescaped : 545ms
	  Total     : 4235ms

	doT
	  Escaped   : 1623ms
	  Unescaped : 49ms
	  Total     : 1672ms

	CoffeeKup
	  Escaped   : 1768ms
	  Unescaped : 5203ms
	  Total     : 6971ms

	
	


## Usage

	git clone https://github.com/ilgaleanos/js-template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js
