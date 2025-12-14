const Opiskelija = require('../models/opiskelijaModel');

exports.getAll = async (req, res) => {
  try {
    const rows = await Opiskelija.getAll();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

exports.create = async (req, res) => {
  try {
    const id = await Opiskelija.create(req.body);
    res.status(201).json({ message: 'Opiskelija lisätty', id });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.update = async (req, res) => {
  try {
    await Opiskelija.update(req.params.id, req.body);
    res.json({ message: 'Opiskelija päivitetty' });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.remove = async (req, res) => {
  try {
    await Opiskelija.remove(req.params.id);
    res.json({ message: 'Opiskelija poistettu' });
  } catch (err) {
    res.status(500).json(err);
  }
};
