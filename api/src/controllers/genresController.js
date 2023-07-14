const axios = require('axios');
const { API_KEY } = process.env;
const { Genre } = require('../db');
const URL = `https://api.rawg.io/api/genres?key=${API_KEY}`;

// const getGenres = async () => {
//     try {
//         const genres = await Genre.findAll();
//         return genres;
//     } catch (error) {
//         throw new Error('Genero no encontrado')
//     }
// }

const getGenres = async () => {
    try {
        const genresDb = await Genre.findAll({ attributes: ['name'] });
        const genresApi = await axios.get(`https://api.rawg.io/api/genres?key=1191517b9eb8439c8b9961a0075e56be`)
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