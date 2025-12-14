const Book = require('../models/bookModel');

// GET /books
exports.getAll = async (req, res) => {
  try {
    const books = await Book.getAll();
    res.json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

// GET /books/:id
exports.getOne = async (req, res) => {
  try {
    const book = await Book.getById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Kirjaa ei löytynyt' });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json(err);
  }
};

// POST /books
exports.create = async (req, res) => {
  try {
    const id = await Book.create(req.body);
    res.status(201).json({ message: 'Kirja lisätty', id });
  } catch (err) {
    res.status(500).json(err);
  }
};

// PUT /books/:id
exports.update = async (req, res) => {
  try {
    await Book.update(req.params.id, req.body);
    res.json({ message: 'Kirja päivitetty' });
  } catch (err) {
    res.status(500).json(err);
  }
};

// DELETE /books/:id
exports.remove = async (req, res) => {
  try {
    await Book.remove(req.params.id);
    res.json({ message: 'Kirja poistettu' });
  } catch (err) {
    res.status(500).json(err);
  }
};
