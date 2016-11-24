var assert = require('assert')
var prefix = require('../index.js')

describe('Test Code', function() {

  var stringa = 'stringa'
  var json = {
    foo: {
      bar: 'foo/bar'
    },
    stringa
  }
  
  var prefix_str = 'prefix_'

  var json_prefix = prefix(json, prefix_str)

  it('should not break tree', function () {
    assert.ok(json.stringa === stringa)
  })

  it('should have prefix', function () {
    assert.ok(json_prefix.foo.bar.indexOf(prefix_str) !== -1 )
  })

})