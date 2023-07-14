const { Router } = require('express');
const { Genres } = require('../db');
const { getGenresHandler } = require('../handlers/genresHandler');

const genresRouter = Router();

genresRouter.get('/', getGenresHandler);

// genresRouter.get('/', async (req, res) => {
//     const allGenres = await Genres.findAll();
//     res.send(allGenres);
// })

module.exports = genresRouter;