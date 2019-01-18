//Object literals
//we can assign properties and methods inside of object literals
//and use dot notation to get key values from the object
const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2013',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};




