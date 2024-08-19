// ES6+ Features

// Activity 1: Template Literals:

// Task 1: Template Literals
const person_name = "John Doe";
const person_age = 25;
console.log(`Person Name: ${person_name} \nPerson Age: ${person_age}`)

// Task 2: Mutli Line String using Template literals
const pg = `JavaScriptis a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior.[10]

\nWeb browsers have a dedicated JavaScript engine that executes the client code. These engines are also utilized in some servers and a variety of apps. The most popular runtime system for non-browser usage is Node.js.

\nJavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.[11] It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).`
// console.log(pg);

// Activity 2: Destructuring

// Task 3: Object Desturcturing
const usr = {
    user_name : "JavaScript",
    user_email : "Example@gmail.com",
    comment: "Hello from javascript",
    logged : false
}
const { user_name: name, user_email: email } = usr;
console.log(`Name: ${name} \nEmail: ${email}`)


// Task 4: Array Destructuring
const arr = ["Python","JavaScript","Java","C"];
const [first,second,third,fourth] = arr
console.log(`First: ${first}\nSecond: ${second}\nThird: ${third}\nFourth: ${fourth}`);


// Activity 3: Spread and Rest Operators

// task 5: Spread Operator
let arr1 = [ "Lion","Wolf","Crocodile","Leopord","jaguar"]
let arr2 = ["Elephant","Zebra","WildBeest","Girraf","Deer"]

let newArray = [...arr1 ,...arr2]
console.log(newArray)

// Task 6: Rest Operator
function sum(...arg){
    let total = 0;
    for(let i of arg){
        total = total + i;
    }
    return total;
}
console.log(`Sum: ${sum(2,3,4,5)}`);
console.log(`Sum: ${sum(57,98,37,29,15)}`);


// Activity 5: enhanced object Literals
// Task 7 enhanced object Literals
function getLaptop(make, model, year) {
    return {
        make,
        model,
        year
    }
}


console.log(getLaptop("Apple", "MacBook", "2015"));
