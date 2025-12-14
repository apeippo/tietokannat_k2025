const db = require('../db');

exports.getAll = async () => {
  const [rows] = await db.query('SELECT * FROM opintojakso');
  return rows;
};

exports.create = async (data) => {
  const [result] = await db.query(
    'INSERT INTO opintojakso (Nimi, Laajuus, Tunnus) VALUES (?, ?, ?)',
    [data.Nimi, data.Laajuus, data.Tunnus]
  );
  return result.insertId;
};

exports.update = async (id, data) => {
  await db.query(
    'UPDATE opintojakso SET Nimi=?, Laajuus=?, Tunnus=? WHERE idOpintojakso=?',
    [data.Nimi, data.Laajuus, data.Tunnus, id]
  );
};

exports.remove = async (id) => {
  await db.query('DELETE FROM opintojakso WHERE idOpintojakso=?', [id]);
};
