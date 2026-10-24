// Assignment #5 — Math Expressions
var num1 = 10;
var num2 = 20;
var sum = num1 + num2;

document.write("Sum: " + sum);
// Q2. Subtraction, multiplication, division and modulus
var num1 = 20;
var num2 = 6;

document.write("Subtraction: " + (num1 - num2) + "<br>");
document.write("Multiplication: " + (num1 * num2) + "<br>");
document.write("Division: " + (num1 / num2) + "<br>");
document.write("Modulus: " + (num1 % num2));
// Q3. Variable declaration, increment, addition and remainder
var num;

document.write("Value after variable declaration is: " + num + "<br>");

num = 5;
document.write("Initial value: " + num + "<br>");

num++;
document.write("Value after increment is: " + num + "<br>");

num = num + 7;
document.write("Value after addition is: " + num + "<br>");

num--;
document.write("Value after decrement is: " + num + "<br>");

var remainder = num % 3;
document.write("The remainder is: " + remainder);
// Q4. Movie ticket cost
var ticketPrice = 600;
var quantity = 5;
var totalCost = ticketPrice * quantity;

document.write("Price of one ticket: " + ticketPrice + " PKR<br>");
document.write("Number of tickets: " + quantity + "<br>");
document.write("Total cost: " + totalCost + " PKR");
// Q5. Multiplication table
var number = +prompt("Enter a number:");

for (var i = 1; i <= 10; i++) {
    document.write(
        number + " x " + i + " = " + (number * i) + "<br>"
    );
}
// Q6. Temperature converter
var celsius = 25;
var fahrenheit = (celsius * 9 / 5) + 32;

document.write(
    celsius + "°C is " + fahrenheit + "°F<br>"
);

var fahrenheitTemp = 77;
var celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;

document.write(
    fahrenheitTemp + "°F is " + celsiusTemp + "°C"
);
// Q7. E-commerce shopping cart checkout
var priceItem1 = 500;
var priceItem2 = 1000;

var quantityItem1 = 2;
var quantityItem2 = 1;

var shippingCharges = 200;

var totalItem1 = priceItem1 * quantityItem1;
var totalItem2 = priceItem2 * quantityItem2;

var totalCost = totalItem1 + totalItem2 + shippingCharges;

document.write("<h2>Shopping Cart Receipt</h2>");
document.write("Item 1 total: " + totalItem1 + " PKR<br>");
document.write("Item 2 total: " + totalItem2 + " PKR<br>");
document.write("Shipping charges: " + shippingCharges + " PKR<br>");
document.write("<b>Total cost: " + totalCost + " PKR</b>");
// Q8. Calculate percentage
var totalMarks = 500;
var obtainedMarks = 425;

var percentage = (obtainedMarks / totalMarks) * 100;

document.write("Total marks: " + totalMarks + "<br>");
document.write("Obtained marks: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage + "%");
// Q9. Convert US dollars and Saudi Riyals into Pakistani Rupees
var dollars = 10;
var riyals = 25;

var totalPKR = (dollars * 104.80) + (riyals * 28);

document.write("Total currency in PKR: " + totalPKR);
// Q10. Arithmetic in a single expression
var number = 5;

var result = ((number + 5) * 10) / 2;

document.write("Result: " + result);
// Q11. Age calculator
var currentYear = 2026;
var birthYear = 2008;

var age1 = currentYear - birthYear;
var age2 = age1 - 1;

document.write(
    "They are either " + age2 + " or " + age1 + " years old."
);
// Q12. Geometrizer — circle circumference and area
var radius = 5;
var pi = 3.142;

var circumference = 2 * pi * radius;
var area = pi * radius * radius;

document.write("Radius: " + radius + "<br>");
document.write("The circumference is " + circumference + "<br>");
document.write("The area is " + area);
// Q13. Lifetime supply calculator
var favoriteSnack = "Chocolates";
var currentAge = 18;
var maximumAge = 80;
var amountPerDay = 2;

var yearsRemaining = maximumAge - currentAge;
var totalSnacks = yearsRemaining * 365 * amountPerDay;

document.write("Favorite snack: " + favoriteSnack + "<br>");
document.write(
    "You will need " + totalSnacks +
    " " + favoriteSnack +
    " to last you until the ripe old age of " + maximumAge + "."
);
