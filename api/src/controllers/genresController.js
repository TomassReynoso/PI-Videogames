const axios = require('axios');
const { API_KEY } = process.env;
const { Genre } = require('../db');
const URL = `https://api.rawg.io/api/genres?key=${API_KEY}`;

const getGenres = async () => {
    try {
        const genresDb = await Genre.findAll({ attributes: ['name'] });
        const genresApi = await axios.get(`${URL}`)
        const result = genresApi.data.results.map((genre) => {
            return genre.name
        })
        const allGenre = [...genresDb, result];
        return allGenre;
    } catch (error) {
        throw new Error('Genres not found')
    }
}

module.exports = {
    getGenres,
};