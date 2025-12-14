const Opintojakso = require('../models/opintojaksoModel');

exports.getAll = async (req, res) => {
  try {
    const rows = await Opintojakso.getAll();
    res.json(rows);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.create = async (req, res) => {
  try {
    const id = await Opintojakso.create(req.body);
    res.status(201).json({ message: 'Opintojakso lisätty', id });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.update = async (req, res) => {
  try {
    await Opintojakso.update(req.params.id, req.body);
    res.json({ message: 'Opintojakso päivitetty' });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.remove = async (req, res) => {
  try {
    await Opintojakso.remove(req.params.id);
    res.json({ message: 'Opintojakso poistettu' });
  } catch (err) {
    res.status(500).json(err);
  }
};
