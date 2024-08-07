// Control Structures

// Activity 1: If-Else Statements
// Task 1:
let num = 10;
if(num>=0) console.log("Positive");
else if(num<0) console.log("Negative");
else console.log("Zero");


// Task 2:
let age = 23;
if(age>=18) console.log("Person eligible for vote")
else console.log("Person is not eligible for vote");



// Activity 2: Nested If-Else Statement
// Task 3:
let num1 = 34;
let num2 = -2;
let num3 = 78;
if(num1>=num2){
    if(num1>num3){
        console.log(`The largest number is: ${num1}`);
        
    }
    else{
        console.log(`The largest number is: ${num3}`);
        
    }
}
else{
    if(num2>num3){
        console.log(`The largest number is: ${num2}`);
        
    }
    else{
        console.log(`The largest number is:${num3}`);
        
    }
}

// Activity 3: Switch Case

// // Task 4:
let day = 2;
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Wrong Input");
        break;
}


// Task: 5
let score = 87;
let grade;

if (score > 85) {
    grade = 'A';
} else if (score > 75) {
    grade = 'B';
} else if (score > 65) {
    grade = 'C';
} else if (score > 50) {
    grade = 'D';
} else {
    grade = 'F';
}

switch (grade) {
    case 'A':
        console.log('A');
        break;
    case 'B':
        console.log('B');
        break;
    case 'C':
        console.log('C');
        break;
    case 'D':
        console.log('D');
        break;
    case 'F':
        console.log('F');
        break;
    default:
        console.log('Invalid score');
        break;
}

// Activity 4: Conditional (Ternary) Operator
// Task 6:
let number = 876738;
console.log(number%2==0?'Even':"Odd");

// Activity 5: Combining Conditions
// Task 7:
let year = 2002;
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log(`${year} is a Leap Year`); // Year is divisible by 400
        } else {
            console.log(`${year} is not a Leap Year`); // Year is divisible by 100 but not by 400
        }
    } else {
        console.log(`${year} is a Leap Year`); // Year is divisible by 4 but not by 100
    }
} else {
    console.log(`${year} is not a Leap Year`); // Year is not divisible by 4
}
