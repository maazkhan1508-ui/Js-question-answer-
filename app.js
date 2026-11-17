




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





// ========..=========..===========
// Section 1: Variables & Data Types
// =========. .======.  ==========

// Q1
let num1 = 10;
let num2 = 20;
console.log(num1 + num2);


// Q2
let name = "Maaz Khan";
alert(name);


// Q3
let city = "Karachi";
console.log(city);


// Q4
let age = 20;
console.log(age);


// Q5
let number = 100;
let string = "Hello JavaScript";
let boolean = true;

console.log(number);
console.log(string);
console.log(boolean);


// Q6
let price = 1500;
alert(price);


// ================================
// Section 2: String Concatenation
// ================================

// Q7
let firstName = "Maaz";
let lastName = "Khan";

let fullName = firstName + " " + lastName;
console.log(fullName);


// Q8
console.log("5" + 5);
// Output: 55


// Q9
let studentName = "Maaz";
let course = "JavaScript";

console.log(studentName + " is learning " + course);


// Q10
let userAge = 20;

console.log("My age is " + userAge);


// Q11
let student = "Maaz";
let subject = "JavaScript";
let marks = 90;

console.log(student + " is studying " + subject + " and got " + marks + " marks.");


// ================================
// Section 3: Pre-Increment / Post-Increment
// ================================

// Q12
let a = 5;

console.log(a++); // Output: 5
console.log(a);   // Output: 6


// Q13
let b = 10;

console.log(++b); // Output: 11
console.log(b);   // Output: 11


// Q14
//Post-Increment (a++)
// [Pehle old value use hoti hai, phir value +1 hoti hai.]

// Pre-Increment (++a):
// [Pehle value +1 hoti hai, phir new value use hoti hai.]


// Q15
let c = 0;

c++;
console.log(c); // 1

c++;
console.log(c); // 2

c++;
console.log(c); // 3


// Q16
let x = 15;

console.log(x--);
// Output: 15


// Q17
let y = 20;

console.log(--y);
// Output: 19


// ========%===============%=======
// Section 4: If / Else If / Else
// =========%===============%======

// Q18
let marks1 = 95;

if (marks1 > 90) {
    console.log("A Grade");
} else {
    console.log("Try Again");
}


// Q19
let age1 = 20;

if (age1 > 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}


// Q20
let number1 = 10;

if (number1 > 0) {
    console.log("Positive");
} else {
    console.log("Negative");
}


// Q21
let temperature = 45;

if (temperature > 40) {
    console.log("Hot");
} else {
    console.log("Not Hot");
}


// Q22
let day = 1;

if (day === 1) {
    console.log("Monday");
} else {
    console.log("Not Monday");
}


// Q23
let score = 40;

if (score < 50) {
    console.log("Fail");
} else {
    console.log("Pass");
}


// Q24
let x1 = 100;

if (x1 === 100) {
    console.log("Equal");
} else {
    console.log("Not Equal");
}


// Q25
let salary = 60000;

if (salary > 50000) {
    console.log("High");
} else {
    console.log("Low");
}


// Q26
let grade = "A";

if (grade === "A") {
    console.log("Excellent");
} else {
    console.log("Keep Trying");
}


// Q27
let time = 15;

if (time > 12) {
    console.log("Afternoon");
} else {
    console.log("Morning");
}


// Q28
let count = 0;

if (count === 0) {
    console.log("Empty");
} else {
    console.log("Not Empty");
}


// Q29
let status = "active";

if (status === "active") {
    console.log("Running");
} else if (status === "paused") {
    console.log("On Hold");
} else {
    console.log("Stopped");
}


// Q30
let level = 2;

if (level === 1) {
    console.log("Beginner");
} else if (level === 2) {
    console.log("Intermediate");
} else {
    console.log("Advanced");
}
