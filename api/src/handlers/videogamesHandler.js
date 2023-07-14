const axios = require('axios');
const { getAllVideogames, getVideogameById, createVideogame, deleteVideogame } = require('../controllers/videogamesController');

const getVideogamesHandler = async (req, res) => {
    const { name } = req.query;

    try {
        let allGames = await getAllVideogames()
        if (name) {
            let response = allGames.filter((game) =>
                game.name.toLowerCase().includes(name.toLowerCase())
            );

            if (response.length > 0) {
                res.status(200).send(response);
            } else {
                res.status(400).send("No se encuentra el juego")
            }
        }
        else {
            res.status(200).json(allGames)
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getVideogameByIdHandler = async (req, res) => {
    const { id } = req.params;

    const allGames = await getAllVideogames()
    try {

        if (id) {
            let gameId = await allGames.filter((game) =>
                game.id.toString() === id
            );
            if (gameId.length) {
                res.status(200).json(gameId);
            } else {
                res.status(400).send("We couldn´t find this Videogame")
            }
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const createVideogameHandler = async (req, res) => {
    const { name, description, plataforms, image, released, rating } = req.body;

    try {
        const response = await createVideogame(name, description, plataforms, image, released, rating);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
module.exports = {
    getVideogamesHandler,
    getVideogameByIdHandler,
    createVideogameHandler,
};