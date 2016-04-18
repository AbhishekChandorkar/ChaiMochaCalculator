exports.check = function run(text){
  console.log('Running');
  var res = eval(text);
  //calculator.display.value=res;
  return res;
}
