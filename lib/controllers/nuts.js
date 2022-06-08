const { Router } = require('express');
const Nut = require('../models/Nuts');

module.exports = Router()
  .get('/', async (req, res) => {
    const nutData = await Nut.getAll();
    res.json(nutData);
  })
  .get('/:id', async (req, res) => {
    const { id } = req.params;
    const selectedNut = await Nut.getNutById(id);
    res.json(selectedNut);
  });
