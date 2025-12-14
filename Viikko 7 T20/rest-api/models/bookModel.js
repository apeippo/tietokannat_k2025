const db = require('./db');

// GET all books
const getAll = async () => {
  const [rows] = await db.query('SELECT * FROM kirja');
  return rows;
};

// GET book by id
const getById = async (id) => {
  const [rows] = await db.query(
    'SELECT * FROM kirja WHERE idKirja = ?',
    [id]
  );
  return rows[0];
};

// POST create book
const create = async (data) => {
  const { idTeos, hyllypaikka, tila, viivakoodi } = data;
  const [result] = await db.query(
    `INSERT INTO kirja (idTeos, hyllypaikka, tila, viivakoodi)
     VALUES (?, ?, ?, ?)`,
    [idTeos, hyllypaikka, tila, viivakoodi]
  );
  return result.insertId;
};

// PUT update book
const update = async (id, data) => {
  const { idTeos, hyllypaikka, tila, viivakoodi } = data;
  await db.query(
    `UPDATE kirja
     SET idTeos = ?, hyllypaikka = ?, tila = ?, viivakoodi = ?
     WHERE idKirja = ?`,
    [idTeos, hyllypaikka, tila, viivakoodi, id]
  );
};

// DELETE book
const remove = async (id) => {
  await db.query(
    'DELETE FROM kirja WHERE idKirja = ?',
    [id]
  );
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
