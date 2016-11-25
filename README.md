# json-prefix

![travis](https://travis-ci.org/moonou/json-prefix.svg?branch=master)
[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
traverse json tree add prefix to string
``` javascript
var prefix = require('json-prefix')

var json = {
  foo: {
    bar: 'foo/bar'
  },
  stringa: 'stringa',
  number: 7
}

var result = prefix(json, 'prefixstr')

console.log(result)
/**
{
  foo: {
    bar: 'prefixstrfoo/bar'
  },
  stringa: 'prefixstrstringa',
  number: 7  
}
*/
```

[npm-url]: https://www.npmjs.com/package/json-prefix
[downloads-url]: https://www.npmjs.com/package/json-prefix