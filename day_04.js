// Loops
// Activity 1: For Loop

// task 1
for (let i = 1;i<=10;i++) console.log(i);

// task 2
let num = 5;
for(let i = 1;i<=10;i++) {
    console.log(`${num} * ${i} = ${num*i}`)
}


// Activity 2 : While Loop
// Task 3
let sum = 0;
let i = 1;
while(i<11){
    sum = sum + i;
    i += 1;
}
console.log(`Sum of number from 1 to 10 is ${sum}`);

// Task 4
let a = 10;
while(a>0) {
    console.log(a)
    a-=1;
};

// Activity 3: Do-while Loop
// Task 5
let j = 1;
do{
    console.log(j);
    j+=1
}while(j<5);


// Task 6:
let number = 5;
let fact = 1;
do{
    fact = (fact * number);
    number-=1;
}while(number>=1);
console.log(`Factorial of ${number} is ${fact}`) //Factorial of 0 is 120


// Activity 4: Nested Loop
// Task 7

for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '* ';
    }
    console.log(row.trim());
} 
// Output:
// *
// * *
// * * *
// * * * *
// * * * * *

// Activity 5: Loop Control Statement;

for(let i = 1;i<=10;i++){
    if(i==5)continue;
    console.log(`Number: ${i}`)
}// Skip the number 5;

for(let i = 1;i<=10;i++){
    if(i==7) break;
    console.log(`Number: ${i}`)
}
