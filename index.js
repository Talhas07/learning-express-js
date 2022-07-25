// Importing package
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;

// Where we will keep books
let books = [];

// Configuring middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// POST API
app.post('/book', (req, res) => {
  const book = req.body;

  // here length of books' array will be the id of that book
  book.id = books.length;

  // Output the book to the console for debugging
  console.log(book);
  books.push(book);

  res.send('Book is added to the database');
});

// GET API
app.get('/books', (req, res) => {
  res.json(books);
});

// GET by ID API
app.get('/book/:id', (req, res) => {
  // Reading ID from the URL
  const id = req.params.id;

  // Searching books for the id
  for (let book of books) {
      if (book.id === id) {
          res.json(book);
          return;
      }
  }

  // Sending 404 when not found something is a good practice
  res.status(404).send('Book not found');
});

// PUT API
app.put('/book/:id', (req, res) => {
  // Reading id from the URL
  const id = req.params.id;
  const book = req.body;

  // Remove item from the books array
  for (let i = 0; i < books.length; i++) {
      let book = books[i]
      if (book.id === id) {
          books[i] = book;
      }
  }

  res.send('Book is replace');
});

// PATCH API
app.patch('/book/:id', (req, res) => {
  // Reading id from the URL
  const id = req.params.id;
  const book = req.body;

  // Remove item from the books array
  for (let i = 0; i < books.length; i++) {
      let book = books[i]
      if (book.id === id) {
          books[i] = {...book[i], ...book};
      }
  }

  res.send('Book is update');
});

// DELETE API
app.delete('/book/:id', (req, res) => {
  // Reading id from the URL
  const id = req.params.id;

  // Remove item from the books array
  books = books.filter(i => {
      if (i.id !== id) {
          return true;
      }
      return false;
  });

  res.send('Book is deleted');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));