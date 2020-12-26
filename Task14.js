var a = 2;
var b = 1;
document.write("a is "+a);
document.write("<br>"); document.write("<br>");
document.write("b is "+b);
document.write("<br>"); document.write("<br>");
var result = --a - --b + ++b + b--;
// --a is 1 and a is 1
// --b is 0 and b is 0
// ++b is 1 and b is 1
// b-- is 1 and b is 0
document.write("result is "+result);