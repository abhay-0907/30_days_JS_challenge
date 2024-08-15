// Arrays
// Activity 1: Array Creation and Access

// Task 1
const arr1 = [1,2,3,4,5]
console.log(arr1);


// Task 2:
const arr2 = arr1[0];
const arr3 = arr1[arr1.length-1];
console.log(arr2);
console.log(arr3);

// Activity 2: Array method (basic)
// Task 3
const cars = ["BMW","Audi","Mercedes","Tesla","Lamborghini"]
cars.push("Toyota")
console.log(`Cars: ${cars}`);

// Task 4
cars.pop();
console.log(`Cars: ${cars}`);


// Task 5
cars.shift()
console.log(`Cars: ${cars}`);

// Task 6
cars.unshift("Cadillac");
console.log(`Cars: ${cars}`);

// Activity 3: Array Methods (Intermediate
// task 7:
const number = [1,2,3,4,5,6,7,8,9,10];
const newNumber = number.map(i=>i*2)
console.log(newNumber); 
// output:[
//     2,  4,  6,  8, 10,
//    12, 14, 16, 18, 20
//  ]


// task 8:

const evenNumber = number.filter((nums) => (nums%2==0));
console.log(evenNumber); // output: [ 2, 4, 6, 8, 10 ]

// task 9:
let sum = 0;
const sumOfArray = number.reduce((acc,curr)=>acc+curr,0);
console.log(sumOfArray) // output: 55

// Activity 4: Array Iteration

// Task 10:
const nums = ["Java","JavaScript","Assembly","Python","C","C++","C#","R","Rust","Go","Ruby","php","Scala","SQL","MongoDB"]

for(let item = 0;item<nums.length;item++) console.log(nums[item]);


// Task 11:
const transport = ["Cycle","Bike","Car","Train","Ship","Aeroplane","Boat"]
transport.forEach(element => {
    console.log(element);
    
});

// Acitivity 4: Mutli-dimensional Array

// Task 12:
const multiArray = [[1,2,3],[4,5,6],[7,8,9]]
multiArray.forEach((item)=>console.log(item));

// output: [ 1, 2, 3 ]
// [ 4, 5, 6 ]
// [ 7, 8, 9 ]