//Prototypes
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
};

//getSummary prototype method, now stored in the prototype rather than
//the object itself
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
};

//getAge 
Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
};

//Revise / Change years
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
};

//Instantiate an object
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2016');

//we can call prototype methods such as revise, defined above
//to manipulate data of different objects
book2.revise('2018')