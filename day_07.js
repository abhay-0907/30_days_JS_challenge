//  Object
// Activity 1 : Object creation and Access
// Task 1:
 const book = {
    
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925
}

// Task 2: 
console.log(`Title: ${book.title
} and Author: ${book.author}`)

// Activity 2: Object Methods

// Task 3:
book.getAuthor = function(){
    const author = book.author
    const title = book.title;
    return `Title: ${title} and Author: ${author} `
}
console.log(book.getAuthor())

// Task 4:

book.updateYear = function(newUpdatedYear){
    book.year = newUpdatedYear;
}
book.updateYear(1923)

console.log(`Updated Year: ${book.year}`)


// Activity 3: Nested Objects
// Task 5:
const library = {
    name: "City Library",
    books: [
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925
        },
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960
        },
        {
            title: "1984",
            author: "George Orwell",
            year: 1949
        }
    ]
};

console.log(library);

// Task 6:
console.log(`Name of the Library: ${library.name}`)
library.books.map(e=>{
   let title = e.title
   console.log(`Title of the book: ${title}`)
})

// Activity 4: This Keyword
// task 7:
book.getTitle = function(){
    return `Book title: ${this.title} and published year: ${this.year}`
}
console.log(book.getTitle())

// Activity 5 Object iteration:
// Task 8
const keys = Object.keys(book);
console.log(`Keys: ${keys}`);

const values = Object.values(book);
console.log(`Values: ${values}`)