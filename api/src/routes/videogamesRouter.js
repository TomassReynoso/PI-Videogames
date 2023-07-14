const { Router } = require('express');
const { getVideogamesHandler, getVideogameByIdHandler, createVideogameHandler } = require('../handlers/videogamesHandler');

const videogamesRouter = Router();

const validate = (req, res, next) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: "Missing name" });
    next();
}

videogamesRouter
    .get('/', getVideogamesHandler)
    .get('/:id', getVideogameByIdHandler)
    .post('/', validate, createVideogameHandler)

module.exports = videogamesRouter;