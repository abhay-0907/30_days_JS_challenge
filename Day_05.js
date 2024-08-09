// Functions

// Acitvity 1: function Declaration
// Task 1:
function evenOrOdd(num){
    if(num%2==0) console.log(`${num} number is even`)
    else console.log(`${num} number is odd`)
}

evenOrOdd(89)
evenOrOdd(782834)
evenOrOdd(83530922981)

// Task 2:
function calculate_square(num){
    return num * num;
}
console.log(`Square of a number is ${calculate_square(7)}`);

// Acitivity 2: Expression
// Task 3:
function maxOfTwoNumber(num1,num2){
    if(num1>num2) console.log(`${num1} is greater than ${num2}`);
    else console.log(`${num2} is greater than ${num1}`);
}

maxOfTwoNumber(898,384)

// Task 4:
function concateString(str1, str2){
    str3 = str1 + " " + str2;
    console.log(`Concatenated String: ${str3}`);
    
}
concateString("Abhay", "Sharma")

// Activity 3: Arrow Function

// Task 5:

const sumOfTwoNumber = (num1, num2) => {
    return num1+num2
}
console.log(`Addition of two number: ${sumOfTwoNumber(6730,242)}`)

// Task 6:
const stringContains = (text,key)=>{
    if(text.includes(key)) return true;
    else return false
}
console.log(`String is contains the key: ${stringContains("JavaScript","S")}`)


// Activity 4 Function Parameter and Default Values

// Task 7:
const productOfTwoNumber = (num1, num2 = 3)=>{
    return num1*num2
}

console.log(`Product of Two Number: ${productOfTwoNumber(7)}`);
console.log(`Product of Two Number: ${productOfTwoNumber(89,23)}`);


// Task 8:
const greet=(personName, age = 18)=>{
    console.log(`Hello ${personName} your age is ${age}`)
}
greet('abhay')
greet('javascript',21);

// Activity 5: Higher-Order Functions
// Task 9:
function callManyTimes(fn,limit){
    for(let i = 0;i<limit;i++){
        console.log(fn);
    }
}
function greetWithName(name){
    return (`Hello! ${name} nice to meet you`)
}
callManyTimes(greetWithName("JavaScript"),3)

function higherOrderFunction(fn1,fn2,value){
    return fn2(fn1(value))
}

const addtwo = (num)=> num + 2;
const multiplyByThree = (num)=> num*3;
const result = higherOrderFunction(addtwo,multiplyByThree,5)
console.log(result);
