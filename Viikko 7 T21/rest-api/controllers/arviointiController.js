const Arviointi = require('../models/arviointiModel');

exports.getAll = async (req, res) => {
  try {
    const rows = await Arviointi.getAll();
    res.json(rows);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.create = async (req, res) => {
  try {
    const id = await Arviointi.create(req.body);
    res.status(201).json({ message: 'Arviointi lisätty', id });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.update = async (req, res) => {
  try {
    await Arviointi.update(req.params.id, req.body);
    res.json({ message: 'Arviointi päivitetty' });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.remove = async (req, res) => {
  try {
    await Arviointi.remove(req.params.id);
    res.json({ message: 'Arviointi poistettu' });
  } catch (err) {
    res.status(500).json(err);
  }
};
