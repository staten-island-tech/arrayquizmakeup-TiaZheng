const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote
//"--- wrote --- in ---"
for (let x = 0; x < books.length; x++) {
  console.log(books[x].authorFirst + " " + books[x].authorLast + ` wrote ` + `"` + books[x].name + `"` + ` in ` + books[x].publishDate);
}


//Sort books from oldest to most recent


/*var bookDate = [];
for (let i = 0; i < books.length; i++) {
  bookDate[i] = books[i].publishDate;
}
bookDate.sort(function(a, b){return a-b});
console.log(bookDate);*/

//sort books alphabetically

titles.sort();
console.log(titles);


//Find who wrote War and Peace

const author = (books.authorFirst + books.authorLast);

  const WAP = function() {
    if(books.name ==="War and Peace") {
      return author;
    };
  };

  console.log(author);



//how many books were written before 1900?

//was there at least one book published within the last 100 years?

//was every book published within the last 100 years?