const axios = require('axios');
const { getGenres } = require('../controllers/genresController');

const getGenresHandler = async (req, res) => {
    try {
        const allGenres = await getGenres();
        res.status(200).json(allGenres)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// const getGenresHandler = async (req, res) => {
//     try {
//         const allGenres = await getGenres();
//         res.status(200).json(allGenres)
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };


module.exports = {
    getGenresHandler,
};