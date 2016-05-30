# wdio-chai-plugin

> A [WebdriverIO](http://webdriver.io/) plugin. Adapter for [Chai](http://chaijs.com/) assertion library


### Installation

The easiest way is to keep `wdio-chai-plugin` as a `dependency` in your `package.json`.

```js
{
	"dependencies": {
		"wdio-chai-plugin": "^0.0.1"
	}
}
```

You can simple do it by:

```
npm install wdio-chai-plugin --save-dev
```

### Configuration

Following code shows the default `wdio` test runner configuration...

```js
// wdio.conf.js 

let chai = require('wdio-chai-plugin');

/** @namespace browser */
module.exports = {
	// ... 

	before: function (capabilities, specs) {
		chai(browser);
	},

	// ... 
};
```

### Usage


```js
describe('Default page', function () {
	it('Test case', function () {
		var url = browser.getUrl();

		url.should.be.equal('https://example.com');
	});
});
```

====

For more information on `WebdriverIO` see the [homepage](http://webdriver.io/).
