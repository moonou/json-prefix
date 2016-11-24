# json-prefix

![travis](https://travis-ci.org/moonou/json-prefix.svg?branch=master)

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

var result = prefix(json)

console.log(result)
/**
{
  foo: {
    bar: 'stringafoo/bar'
  },
  stringa: 'stringastringa',
  number: 7  
}
*/
```