var PkrToDollar = 155;
var PkrToRiyal = 41;
var Dollars = prompt("How much dollars do you have?");
var Riyals = prompt("How much Riyals do you have?");
var PKR = (Dollars*PkrToDollar)+(Riyals*PkrToRiyal);
document.write("<br>");
document.write("<br>");document.write("<br>");
document.write("Total Currency in PKR: "+PKR);