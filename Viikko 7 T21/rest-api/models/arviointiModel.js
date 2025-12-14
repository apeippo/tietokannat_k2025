const db = require('../db');

exports.getAll = async () => {
  const [rows] = await db.query('SELECT * FROM arviointi');
  return rows;
};

exports.create = async (data) => {
  const [result] = await db.query(
    `INSERT INTO arviointi (Paivamaara, Arvosana, idOpiskelija, idOpintojakso)
     VALUES (?, ?, ?, ?)`,
    [data.Paivamaara, data.Arvosana, data.idOpiskelija, data.idOpintojakso]
  );
  return result.insertId;
};

exports.update = async (id, data) => {
  await db.query(
    `UPDATE arviointi
     SET Paivamaara=?, Arvosana=?, idOpiskelija=?, idOpintojakso=?
     WHERE idArviointi=?`,
    [data.Paivamaara, data.Arvosana, data.idOpiskelija, data.idOpintojakso, id]
  );
};

exports.remove = async (id) => {
  await db.query('DELETE FROM arviointi WHERE idArviointi=?', [id]);
};
