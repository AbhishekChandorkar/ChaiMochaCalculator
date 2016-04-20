var chai = require('chai');
var expect = chai.expect;
var test = require('./calc');

describe('test',function() {
  it('should pass if ok',function(){
    var errormsg = "Cannot divide by zero";
    var content = test.check('1');

    expect('content').to.not.contain('0');
  });
});
