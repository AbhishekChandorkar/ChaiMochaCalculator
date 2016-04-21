
//var chai = require('chai');

var expect = chai.expect;
var should = chai.should();
var assert = chai.assert;

describe('Verify Operations', function() {
  it('Division Operation',
    function(){
      var fn = function() {throw err;}
      //assert.equal(evaluate(4+5),9,'First Test');
      expect(eval_expr(5/10)).to.equal(0.5);
    });
     var err = ReferenceError('Bad function');
     var fn = function () {eval_expr(5/0); throw err;}
     it('Divide by zero error', function(){
       expect(fn).to.throw(err);
     }
   );
});
