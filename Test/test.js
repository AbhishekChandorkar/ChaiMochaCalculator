var chai = require('chai');
var expect = require('chai').expect;
var func = require('./calc');

describe('check',function() {
  it('should pass if ok',function(){
    var errormsg = "Cannot divide by zero";
    var content = func.check('0/0');

    expect('content').to.not.contain('0');
  });
});
