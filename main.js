let num1=parseInt(prompt("Enter number1"));
let num2=parseInt(prompt("Enter number2"));
let operator=prompt("+,-,*,/,% Select any one operator");
switch(operator){
case '+':
document.write("Addition of two number is "+num1+num2);
break;
case '-':
document.write("Subtraction of two number is "+num1-num2);
break;
case '*':
document.write("Multiplication of two number is "+num1*num2);
break;
case '/':
document.write("Division of two number is "+num1/num2);
break;
case '%':
document.write("Modules of two number is "+num1%num2);
break;
default:
document.write("Invalid Operator");
}