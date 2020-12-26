var CelTemp = prompt("Whats the Temperature in Celsius?");
TempToFar = (CelTemp*9/5)+32;
document.write(CelTemp+"'C is "+TempToFar+"'F");
document.write("<br>");
var FarTemp = prompt("Whats the Temperature in Fahrenheit?");
TempToCel = (FarTemp-32)*5/9;
document.write(FarTemp+"'F is "+TempToCel+"'C");