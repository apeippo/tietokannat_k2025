const db = require('../db');

exports.getAll = async () => {
  const [rows] = await db.query('SELECT * FROM opiskelija');
  return rows;
};

exports.create = async (data) => {
  const [result] = await db.query(
    'INSERT INTO opiskelija (Etunimi, Sukunimi, Osoite, Luokkatunnus) VALUES (?, ?, ?, ?)',
    [data.Etunimi, data.Sukunimi, data.Osoite, data.Luokkatunnus]
  );
  return result.insertId;
};

exports.update = async (id, data) => {
  await db.query(
    'UPDATE opiskelija SET Etunimi=?, Sukunimi=?, Osoite=?, Luokkatunnus=? WHERE idOpiskelija=?',
    [data.Etunimi, data.Sukunimi, data.Osoite, data.Luokkatunnus, id]
  );
};

exports.remove = async (id) => {
  await db.query('DELETE FROM opiskelija WHERE idOpiskelija=?', [id]);
};
