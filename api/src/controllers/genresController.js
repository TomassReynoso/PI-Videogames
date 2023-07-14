const axios = require('axios');
const { API_KEY } = process.env;
const { Genres } = require('../db');
const URL = `https://api.rawg.io/api/games?key=${API_KEY}`;

const getGenres = async () => {
    const genres = await Genres.findAll();
    return genres;
}

module.exports = {
    getGenres,
};