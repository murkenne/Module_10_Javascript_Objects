// Module 10 lesson2 assignment

// Task 1: Create a constructor function for the Book object with properties for title, author, and pages
function Book(title, author, pages) {
    this.title = title; // Title of the book
    this.author = author; // Author of the book
    this.pages = pages; // Number of pages in the book
}

// Task 2: Implement a method within the Book object to display book information
Book.prototype.displayInfo = function () {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`; // Returns book details as a formatted string
};

// Task 3: Create an array to store book objects and implement functions to add new books and search for books by title or author
const library = []; // Array to store Book objects

// Function to add a Book object to the library array
function addBook(book) {
    library.push(book); // Adds the book object to the library array
}

// Function to search for books by title or author
// Uses the filter method to find books that match the query in title or author
function searchBooks(query) {
    return library.filter(book => 
        book.title.toLowerCase().includes(query.toLowerCase()) || // Matches query with title
        book.author.toLowerCase().includes(query.toLowerCase())  // Matches query with author
    );
}

// Task 4: Create functions that utilize filter and map methods
// Function to filter out books that have more than 100 pages
function filterBooksByPages() {
    return library.filter(book => book.pages > 100); // Returns books with pages greater than 100
}

// Function to add "Title: " and "Author: " prefixes to the book's title and author properties
function formatBookDetails() {
    return library.map(book => ({
        title: `Title: ${book.title}`, // Adds "Title: " prefix
        author: `Author: ${book.author}`, // Adds "Author: " prefix
        pages: book.pages // Retains the original page count
    }));
}

// Example Usage

// Task 1: Creating Book objects
const book1 = new Book("1984", "George Orwell", 328);
const book2 = new Book("The Little Prince", "Antoine de Saint-Exupéry", 96);
const book3 = new Book("The Catcher in the Rye", "J.D. Salinger", 277);

// Task 3: Adding books to the library
addBook(book1);
addBook(book2);
addBook(book3);

// Task 3: Searching for books by a query
console.log("Search for 'George':", searchBooks("George"));

// Task 4: Filtering books with more than 100 pages
console.log("Books with more than 100 pages:", filterBooksByPages());

// Task 4: Formatting book details with prefixes
console.log("Formatted Book Details:", formatBookDetails());




