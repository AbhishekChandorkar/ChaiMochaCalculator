
function display_number(num)
{
    calculator.txtinp.value = calculator.txtinp.value+num;
}

function display_operator(oper)
{
  if(oper === 'x')
  {
    calculator.txtinp.value = calculator.txtinp.value + '*';
  }else if (oper === '÷') {
    calculator.txtinp.value = calculator.txtinp.value + '/';
  }
  else {
    calculator.txtinp.value = calculator.txtinp.value + oper;
  }
}

function display_clear()
{
  calculator.txtinp.value = " ";
}

function eval_expr(equation)
{
  calculator.txtinp.value = eval(equation);
  return eval(equation);
}

function new_eval(equation)
{
  /*var final_equ = equation.replace(/\d+/g, function(numb){
      return parseInt(numb, 10);
  }); */
  var numb = equation.split(/[^0-9]/g);
  var oper = equation.split(/[0-9]+/g);
  var i = 1;
  var result = numb[i];
  alert('numb ='+numb);
  alert('oper ='+oper);
  for(i=1; i <= oper.length-1; i=i+1){
    if(oper[i] == '')
    {
      break;
    }
    alert('oper[i] = '+oper[i]);
    alert('numb[i] = '+numb[i]);
    if( (oper[i] === '+') || (oper[i] === '-') || (oper[i] === '*') || (oper[i] === '/') || (oper[i] ==='%')){
        var str = result + oper[i] + numb[i+1];
        alert('str = '+str);
        result = eval(str);
        alert('result='+result);
    }
    else if (oper[i] === '@') {
      result = eval(result + '/' + 100);
    }
    else if (oper[i] === '!') {
      for (var j=result-1;j>0;j--){
        var str = result + '*' + j;
        result = eval(str);
      }
    }
  }
  calculator.txtinp.value = result;
}
