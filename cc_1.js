// Task 1:  Variables and Data Types
let employeeName = "Mary Poppins";
const employeeID = 12;
var isActive = true; 

console.log(employeeName, typeof(employeeName));
console.log(employeeID, typeof(employeeID));
console.log(isActive,typeof(isActive));


//Task 2: Compound Data Types

let products = ["Popcorn", "Chocolate", "Movie Tickets"];
const productDetails = {
    name: products; 
    price: 29.99
    InStock = "yes"

} console.log(products, productDetails);


// Task 3: Assignment Operators
let accountBalance = 200;
console.log(accountBalance); // = 200

accountBalance += 10;
console.log(accountBalance); // = 210

accountBalance -= 200;
console.log(accountBalance); // = 10

accountBalance *= 10;
console.log(accountBalance); // = 100

accountBalance /= 2;
console.log(accountBalance); // = 50

accountBalance %= 6;
console.log(accountBalance); // = 2

// Task 4: Comparison Operators
let employeeScore1 = 5;
let employeeScore2 = 8;
console.log(employeeScore1, employeeScore2);

employeeScore1 < employeeScore2
console.log(employeeScore1 < employeeScore2); // true
console.log(employeeScore2 > employeeScore1); //true
console.log(employeeScore1 >= employeeScore2); // false
console.log(employeeScore1 <= employeeScore2); // true
console.log(employeeScore1 === employeeScore2); //false
console.log(employeeScore1 !== employeeScore2); // true
