class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }

    //Static method's dont have to be instantiated, just has to be called with Class
    //i.e. Book.topBookStore();
    static topBookStore() {
        return 'Barnes & Noble';
    }
}

//Instantiate Object
const book1 = new Book('Book One', 'John Doe', '2013');
book1.revise('2018');